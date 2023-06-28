import os
import secrets

import dropbox
import requests
from flask import request, jsonify
from server import dao, utils
from server.dao import *
import cloudinary.uploader
from io import BytesIO


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


def upload_dropbox():
    documents = request.json.get("documents")
    access_token = request.json.get("access_token")
    try:
        for document in documents:
            doc_id = document.get('id')
            description = document.get('description')
            gem_cost = document.get('gem_cost')
            if  description or gem_cost:
                try:
                    dao.update_document_admin(id=doc_id, description=description, gem_cost=gem_cost)
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
                    shared_link = dbx.sharing_create_shared_link(response.path_display)
                else:
                    shared_link = shared_links[0]
                # create dowload link
                links = dbx.sharing_get_shared_links(response.path_display).links
                if len(links) > 0:
                    cloud_link = links[0].url
                    file_link_download = cloud_link.replace('?dl=0', '?dl=1')
                else:
                    cloud_link = shared_link.url
                    file_link_download = cloud_link.url.replace('?dl=0', '?dl=1')

            print(cloud_link, file_link_download)

            with open("image.png", "rb") as f:
                response = dbx.files_upload(f.read(), "/" + file_name_img)
                shared_links = dbx.sharing_list_shared_links(response.path_display).links
                if len(shared_links) == 0:
                    shared_link = dbx.sharing_create_shared_link(response.path_display)
                else:
                    shared_link = shared_links[0]
                # create download link
                links = dbx.sharing_get_shared_links(response.path_display).links
                if len(links) > 0:
                    img_cloud_link = links[0].url
                    img_link_download = img_cloud_link.replace('?dl=0', '?dl=1')
                else:
                    img_cloud_link = shared_link.url
                    img_link_download = img_cloud_link.replace('?dl=0', '?dl=1')

            print(img_cloud_link, img_link_download)

            os.remove(doc.cloudinary_public_id)
            os.remove("image.png")

            # Xóa trên cloudinary
            cloudinary.uploader.destroy(doc.cloudinary_public_id)
            cloudinary.uploader.destroy(doc.cloudinary_image_public_id)

            dao.update_document(doc.id, cloud_link, img_cloud_link, file_link_download, img_link_download)
    except Exception as e:
        print("Lỗi: " + str(e))
        return "fail"
    return jsonify({"status": 200})


def reject_document():
    documents = request.json.get("documents")
    for document in documents:
        dao.reject_document(document)
    return jsonify({"status": 200})

