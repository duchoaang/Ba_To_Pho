from flask import request
from server.dao import *
import cloudinary.uploader



# -------------- "/api" ------------------


def upload_cloudinary():
    print(request.files)
    file = request.files['file-0']
    res = cloudinary.uploader.upload(file, resource_type="auto")  # luu anh tren clundinary
    path = res['secure_url']  # link dowload
    dowload_path = res['public_id']
    print(path, dowload_path)
    print(file.filename)

    fields = {
        "title": "heheheheheheheh",
        "owner": "Phtas",
        "description": "1234567890",
    }
    categories = {
        "cate-1": "34a2fb94-fec1-4b97-a5a1-b85f3efa4416",
        "cate-2": "a77ee434-2efe-44f6-91b5-32d4466cb636",
    }
    keywords = {
        "kw-1": "Võ",
        "kw-2": "Phú",
        "kw-3": "Phát",
    }

    add_no_accept_document(fields, categories, keywords, dowload_path, path)
    return "success"


def add_document():
    data = request.json
    fields = {}
    fields["title"] = data.get('title')
    fields["owner"] = data.get('owner')
    fields['description'] = data.get('description')
    categories = data.get('categories')
    keywords = data.get('keywords')
