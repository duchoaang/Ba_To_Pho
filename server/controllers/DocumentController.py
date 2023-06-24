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
    res = cloudinary.uploader.upload(file, resource_type="raw", public_id=filename)  # luu file tren clundinary
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
    return jsonify({"status": "200", "message": "success"})


def upload_dropbox():
    # print("Link: https://www.dropbox.com/developers/apps/info/mmtoae7qmte1tyq")
    # access_token = input("Nhap access token: ").strip()
    # doc_id = input("Document ID: ")

    documents = request.json["documents"]
    access_token = request.json["token"]
    try:
        for document in documents:
            doc = dao.get_document_by_id(document)
            pdf_url = doc.cloudinary_secure_url
            # doc.cloudinary_public_id = test.pptx
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

            # Luu session
            dbx = dropbox.Dropbox(access_token)

            # TRY - CATCH

            # fields update into database
            cloud_link = None
            img_cloud_link = None
            file_link_download = None
            img_link_download = None

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
                # create dowload link
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
    return jsonify({"ok": '200'})
