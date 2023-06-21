import hashlib
import time
from datetime import datetime
from fileinput import filename

import cloudinary
import dropbox
import requests
from flask import request, render_template
from sqlalchemy import event

from server import app, login, dao, admin, utils
from server.models import User
from server.routes.admin import admin_bp
from server.routes.document import document_bp
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


# @app.route('/adafafafafas')
# def test():
#     pdf_url = input("Path_cloudinary: ").strip()
#     with open("temp.pdf", "wb") as f:
#         response = requests.get(pdf_url)
#         f.write(response.content)
#     print("-------------------------------")
#     img_url = input("Image_Path_cloudinary: ").strip()
#     with open("image.png", "wb") as f:
#         response = requests.get(img_url)
#         f.write(response.content)
#
#     doc = dao.get_doc_by_cloudinary_url(pdf_url)
#     doc_name = doc.title.replace(" ", "_")
#     doc_name = utils.strip_accents(doc_name)
#     created_date = datetime.now()
#
#     file_name = doc_name + "_" + str(created_date) + ".pdf"
#     file_name_img = doc_name + "_" + str(created_date) + ".png"
#
#     print("Link: https://www.dropbox.com/developers/apps/info/mmtoae7qmte1tyq ")
#     access_token = input("Nhap access token: ").strip()
#     dbx = dropbox.Dropbox(access_token)
#
#     # fields update into database
#     cloud_link = None
#     img_cloud_link = None
#     file_link_download = None
#     img_link_download = None
#
#     with open("temp.pdf", "rb") as f:
#         response = dbx.files_upload(f.read(), "/" + file_name)
#         shared_links = dbx.sharing_list_shared_links(response.path_display).links
#         if len(shared_links) == 0:
#             shared_link = dbx.sharing_create_shared_link(response.path_display)
#         else:
#             shared_link = shared_links[0]
#         # create dowload link
#         links = dbx.sharing_get_shared_links(response.path_display).links
#         if len(links) > 0:
#             cloud_link = links[0].url
#             file_link_download = cloud_link.replace('?dl=0', '?dl=1')
#         else:
#             cloud_link = shared_link.url
#             file_link_download = cloud_link.url.replace('?dl=0', '?dl=1')
#
#     print(cloud_link, file_link_download)
#
#     with open("image.png", "rb") as f:
#         response = dbx.files_upload(f.read(), "/" + file_name_img)
#         shared_links = dbx.sharing_list_shared_links(response.path_display).links
#         if len(shared_links) == 0:
#             shared_link = dbx.sharing_create_shared_link(response.path_display)
#         else:
#             shared_link = shared_links[0]
#         # create dowload link
#         links = dbx.sharing_get_shared_links(response.path_display).links
#         if len(links) > 0:
#             img_cloud_link = links[0].url
#             img_link_download = img_cloud_link.replace('?dl=0', '?dl=1')
#         else:
#             img_cloud_link = shared_link.url
#             img_link_download = img_cloud_link.replace('?dl=0', '?dl=1')
#
#     print(img_cloud_link, img_link_download)
#
#     os.remove("temp.pdf")
#     os.remove("image.png")
#
#     # Xóa trên cloudinary
#     del_file = input("Press public_id_file: ")
#     cloudinary.uploader.destroy(del_file)
#     del_img = input("Press public_id_img: ")
#     cloudinary.uploader.destroy(del_img)
#
#     doc = dao.get_doc_by_cloudinary_url(pdf_url)
#     dao.update_document(doc.id, cloud_link, img_cloud_link, file_link_download, img_link_download)
#
#     return "success"



app.register_blueprint(user_bp, url_prefix='/users')
app.register_blueprint(admin_bp, url_prefix='/admin')
app.register_blueprint(api_bp, url_prefix='/api')
app.register_blueprint(document_bp, url_prefix='/documents')

if __name__ == '__main__':
    app.run(debug=True)
