import secrets

from flask import request, jsonify
from server import dao, utils
from server.dao import *
import cloudinary.uploader


# -------------- "/api" ------------------


def upload_cloudinary():
    print(request.files)
    file = request.files.get('file')
    image = request.files.get('image')
    print(file.filename)
    extension = file.filename.split('.')[-1]
    dt_id = dao.get_document_type_id_by_extension(extension)
    if dt_id is None:
        return jsonify({"status": "404", "message": "File không đúng định dạng"})
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
    return jsonify({"status": "200", "message": "success"})

