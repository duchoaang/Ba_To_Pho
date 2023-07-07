import hashlib
import secrets
import time
from datetime import datetime
from fileinput import filename

import cloudinary
import dropbox
import requests
from flask import request, render_template, jsonify
from sqlalchemy import event

from server import app, login, dao, admin, utils
from server.dao import add_no_accept_document
from server.models import User
from server.routes.admin import admin_bp
from server.routes.comment import comment_bp
from server.routes.document import document_bp
from server.routes.site import site_bp
from server.routes.user import user_bp
from server.routes.api import api_bp
import pandas as pd

from flask import Blueprint
import os
from dropbox.sharing import MemberPolicy
from werkzeug.datastructures import FileStorage

@login.user_loader
def user_load(user_id):
    return dao.get_user_by_id(user_id=user_id)


@app.route('/login')
def login():
    return render_template('login.html')


@app.route('/')
def test():
    df = pd.read_excel(r'D:\PersonalFolder\Desktop\tailieu.xlsx', sheet_name='Sheet1')

    # Lấy dữ liệu từ các cột
    for index, row in df.iterrows():
        name = row['Name']
        description = row['Description']
        auth = row['Auth']
        file_path = row['file']
        with open(file_path, 'rb') as f:
            file = FileStorage(f)
            # image = request.files.get('image')
            print(file.filename)
            extension = file.filename.split('.')[-1]
            dt_id = dao.get_document_type_id_by_extension(extension)
            if dt_id is None:
                return
            filename = secrets.token_hex(10) + "_" + file.filename
            res = cloudinary.uploader.upload(file, resource_type="raw", public_id=filename)  # luu file tren cloudinary
            path = res['secure_url']  # link download
            download_path = res['public_id']
            res_img = cloudinary.uploader.upload(image, resource_type="auto")  # luu file tren cloudinary
            path_img = res_img['secure_url']  # link download
            download_path_img = res_img['public_id']

            print(path, download_path)
            print(file.filename)
            print(path_img, download_path_img)
            print(image.filename)
            u_id = User.query.first().id
            title = request.form.get('title')
            author = request.form.get('author')
            des = request.form.get('description')

            fields = {
                "title": title,
                "author": author,
                "description": des,
                "user_id": u_id,
                "document_type_id": dt_id
            }
            categories = request.form.get('categories')

            kw = request.form.get('keywords').split(',')
            keywords = [utils.strip_accents(k.lower()) for k in kw]

            add_no_accept_document(fields, categories, keywords, download_path, path, download_path_img, path_img)
    return "ok"


@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def fe(path):
    return render_template('fe-react.html')


app.register_blueprint(user_bp, url_prefix='/users')
app.register_blueprint(admin_bp, url_prefix='/admin')
app.register_blueprint(api_bp, url_prefix='/api')
app.register_blueprint(document_bp, url_prefix='/documents')
app.register_blueprint(comment_bp, url_prefix='/comments')
app.register_blueprint(site_bp, url_prefix='/')

if __name__ == '__main__':
    app.run(debug=True)
