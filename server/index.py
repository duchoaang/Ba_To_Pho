import hashlib
import time
from datetime import datetime
from fileinput import filename

import cloudinary
import dropbox
import requests
from flask import request, render_template, send_from_directory
from sqlalchemy import event

from server import app, login, dao, admin, utils
from server.models import User
from server.routes.admin import admin_bp
from server.routes.comment import comment_bp
from server.routes.document import document_bp
from server.routes.site import site_bp
from server.routes.user import user_bp
from server.routes.api import api_bp
from flask import Blueprint
import os
from dropbox.sharing import MemberPolicy


@login.user_loader
def user_load(user_id):
    return dao.get_user_by_id(user_id=user_id)


@app.route('/login')
def login():
    return render_template('login.html')

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def fe(path):
    return render_template('fe-react.html')

@app.route('/assets/<path:path>')
def send_assets(path):
    return send_from_directory('assets', path)


app.register_blueprint(user_bp, url_prefix='/users')
app.register_blueprint(admin_bp, url_prefix='/admin')
app.register_blueprint(api_bp, url_prefix='/api')
app.register_blueprint(document_bp, url_prefix='/documents')
app.register_blueprint(comment_bp, url_prefix='/comments')
app.register_blueprint(site_bp, url_prefix='/')

if __name__ == '__main__':
    app.run(debug=True)
