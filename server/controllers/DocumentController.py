import os
import secrets

from flask import request, jsonify
from server import dao, utils
from server.dao import *
import cloudinary.uploader


# -------------- "/api" ------------------


def upload_cloudinary():
    file = request.files.get('file')
    image = None
    extension = file.filename.split('.')[-1]
    dt_id = dao.get_document_type_id_by_extension(extension)
    if dt_id is None:
        return jsonify({"status": "404", "message": "File không đúng định dạng"})
    file_name = secrets.token_hex(10) + "_" + file.filename  # token_tenfile.docx (CÓ EXTENSION)
    file_name_without_extension = file_name.replace(f'.{extension}', "")  # token_tenfile (0 CÓ EXTENSION)
    res = cloudinary.uploader.upload(file, resource_type="raw", public_id=file_name)  # luu file tren cloudinary
    path = res['secure_url']  # link download
    download_path = res['public_id']

    # Convert first page to PNG
    try:
        if extension == "pptx":
            utils.save_file(file, file_name)
            pdf_path = utils.convert_pptx_to_pdf(file_name, file_name_without_extension)
        elif extension == "docx":
            utils.save_file(file, file_name)
            pdf_path = utils.convert_docx_to_pdf(file_name,file_name_without_extension)
        elif extension == "pdf":
            utils.save_file(file, file_name)
            pdf_path = os.path.abspath(file_name)
        image = utils.convert_pdf_to_png(file_name_without_extension, pdf_path)
    except Exception as e:
        print("Lỗi" + str(e))

    res_img = cloudinary.uploader.upload(image, resource_type="auto")  # luu file tren cloudinary
    path_img = res_img['secure_url']  # link download
    download_path_img = res_img['public_id']

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
    os.remove(image)
    os.remove(file)
    return jsonify({"status": "200", "message": "success"})
