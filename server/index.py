import hashlib

from flask import request, render_template
import requests
from sqlalchemy import event

from server import app, login, dao, admin, utils
from server.models import User
from server.routes.admin import admin_bp
from server.routes.document import document_bp
from server.routes.user import user_bp
from server.routes.api import api_bp
from flask import Blueprint


@login.user_loader
def user_load(user_id):
    return dao.get_user_by_id(user_id=user_id)


@app.route('/login')
def login():
    return render_template('login.html')


# @app.route('/')
# def test():
#     pdf_url = input("Path_cloudinary: ").strip()
#     with open("temp.pdf", "wb") as f:
#         response = requests.get(pdf_url)
#         f.write(response.content)
#     with open("temp.pdf", "rb") as f:
#         print(f.read())
#     return "ha"


@app.route('/test')
def test():
    pdf_url = input("Path_cloudinary: ").strip()
    with open("temp.pdf", "wb") as f:
        response = requests.get(pdf_url)
        f.write(response.content)
    with open("temp.pdf", "rb") as f:
        print(f.read())

    img_url = input("Image_Path_cloudinary: ").strip()
    with open("image.png", "wb") as f:
        response = requests.get(img_url)
        f.write(response.content)

    # dbx = utils.get_dropbox_client()
    #
    # with open("temp.pdf", "rb") as f:
    #     dbx.files_upload(f.read(), "/sample.pdf")

    # Delete the temporary PDF file
    # import os
    # os.remove("temp.pdf")
    return "ha"


app.register_blueprint(user_bp, url_prefix='/users')
app.register_blueprint(admin_bp, url_prefix='/admin')
app.register_blueprint(api_bp, url_prefix='/api')
app.register_blueprint(document_bp, url_prefix='/documents')

if __name__ == '__main__':
    app.run(debug=True)
