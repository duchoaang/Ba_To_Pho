import os
from datetime import datetime

import cloudinary
import dropbox
import requests
from flask import jsonify, request

from server import app, utils
from server.dao import get_documents, get_categories, get_document_types, get_keywords, get_comment_by_doc, get_users, \
    get_document_by_id
from server.models import Status
from server import dao


# -------------- "/api" ------------------


# "/documents" ['GET']
def api_documents():
    status = request.args.get('status')
    documents = get_documents(status=status)
    documents_list = [doc.to_dict(
        fields=["id", "title", "author", "description", "view_count", "captcha", "status", "gem_cost", "discount",
                "username", "cloudinary_image_secure_url", "cloud_link", "img_cloud_link", "file_link_download",
                "img_link_download", "cloudinary_secure_url",
                "document_type_id", "document_type", "keywords",
                "categories", "average_rate", "num_rate", "num_favour_users"]) for doc
        in
        documents]

    return jsonify(documents_list)


# "/documents/<id>" ['GET']
def api_document_by_id(doc_id):
    doc = get_document_by_id(doc_id)
    doc_info = doc.to_dict(
        fields=["id", "title", "author", "description", "view_count", "captcha", "status", "gem_cost", "discount",
                "username", "cloudinary_image_secure_url", "cloud_link", "img_cloud_link", "file_link_download",
                "img_link_download", "cloudinary_secure_url",
                "document_type_id", "document_type", "keywords",
                "categories", "average_rate", "num_rate"])

    return jsonify(doc_info)


# "/documents/<id>" ['PATCH']
def api_document_update(doc_id):
    status = request.json.get('status')
    if status == Status.REJECT:
        dao.reject_document(doc_id)
        return jsonify({"status": 200})
    description = request.json.get('description')
    gem_cost = request.json.get('gem_cost')
    access_token = request.headers.get('access_token')
    try:
        dao.update_document_admin(doc_id, description, status, gem_cost)
    except Exception as e:
        print(str(e))
    doc = dao.get_document_by_id(doc_id)
    pdf_url = doc.cloudinary_secure_url
    with open(doc.cloudinary_public_id, "wb") as f:
        response = requests.get(pdf_url)
        f.write(response.content)

    img_url = doc.cloudinary_image_secure_url
    with open("image.png", "wb") as f:
        response = requests.get(img_url)
        f.write(response.content)
    doc_name = doc.title.replace(" ", "_")
    doc_name = utils.strip_accents(doc_name)
    created_date = datetime.now()

    extension = doc.cloudinary_public_id.split('.')[-1]
    file_name = doc_name + "_" + str(created_date) + "." + extension
    file_name_img = doc_name + "_" + str(created_date) + ".png"
    dbx = dropbox.Dropbox(access_token)

    with open(doc.cloudinary_public_id, "rb") as f:
        response = dbx.files_upload(f.read(), "/" + file_name)
        shared_links = dbx.sharing_list_shared_links(response.path_display).links
        if len(shared_links) == 0:
            shared_link = dbx.sharing_create_shared_link_with_settings(response.path_display, settings=None)
        else:
            shared_link = shared_links[0]
        # create download link
        cloud_link = shared_link.url
        file_link_download = cloud_link.replace('?dl=0', '?dl=1')

    print(cloud_link, file_link_download)

    with open("image.png", "rb") as f:
        response = dbx.files_upload(f.read(), "/" + file_name_img)
        shared_links = dbx.sharing_list_shared_links(response.path_display).links
        if len(shared_links) == 0:
            shared_link = dbx.sharing_create_shared_link_with_settings(response.path_display, settings=None)
        else:
            shared_link = shared_links[0]
        # create download link
        img_cloud_link = shared_link.url
        img_link_download = img_cloud_link.replace('?dl=0', '?dl=1')

    print(img_cloud_link, img_link_download)

    os.remove(doc.cloudinary_public_id)
    os.remove("image.png")

    # Xóa trên cloudinary
    cloudinary.uploader.destroy(doc.cloudinary_public_id)
    cloudinary.uploader.destroy(doc.cloudinary_image_public_id)

    dao.update_document(doc.id, cloud_link, img_cloud_link, file_link_download, img_link_download)

    return jsonify({"status": 200})


# "/categories" ['GET']
def api_categories():
    categories = get_categories()
    categories_list = [cate.to_dict(fields=["id", "name", "category_parent_id"]) for cate in categories]
    return jsonify(categories_list)


def api_document_types():
    types = get_document_types()
    type_list = [t.to_dict(fields=["id", "name"]) for t in types]
    return jsonify(type_list)


def api_keywords():
    keywords = get_keywords()
    kw_list = [k.to_dict(fields=["id", "name"]) for k in keywords]
    return jsonify(kw_list)


def api_comments(document_id):
    comments = get_comment_by_doc(document_id)
    comment_list = [c.to_dict(fields=["id", "content", "user.username"]) for c in comments]
    print(comment_list)
    return jsonify(comment_list)


def api_users():
    users = get_users()
    user_list = [u.to_dict(
        fields=["id", "username", "name", "email", "phone_number", "gender", "dob", "avatar", "bio", "social_media",
                "address", "gem", "warn_time"]) for u in users]
    return jsonify(user_list)
