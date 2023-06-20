from flask import request, jsonify
from server.dao import *
import cloudinary.uploader


# -------------- "/api" ------------------


def upload_cloudinary():
    print(request.files)
    file = request.files.get('file')
    image = request.files.get('image')
    res = cloudinary.uploader.upload(file, resource_type="auto")  # luu file tren clundinary
    path = res['secure_url']  # link dowload
    download_path = res['public_id']

    res_img = cloudinary.uploader.upload(image, resource_type="auto")  # luu file tren clundinary
    path_img = res_img['secure_url']  # link dowload
    download_path_img = res_img['public_id']

    print(path, download_path)
    print(file.filename)
    print(path_img, download_path_img)
    print(image.filename)
    u_id = User.query.first().id
    dt_id = DocumentType.query.first().id
    fields = {
        "title": "heheheheheheheh",
        "owner": "Phtas",
        "description": "1234567890",
        "user_id": u_id,
        "document_type_id": dt_id
    }
    categories = {
    }

    keywords = {
    }

    add_no_accept_document(fields, categories, keywords, download_path, path, download_path_img, path_img)
    return "success"


def test_duyet_bai():
    print(request.json)
    return jsonify({"ok": '200'})
