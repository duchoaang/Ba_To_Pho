from urllib import request

from flask import jsonify
from server.dao import get_documents, get_categories
from server.models import Status


# -------------- "/api" ------------------


# "/documents" ['GET']
def api_documents():
    if request.method == 'POST':
        category_ids = request.json("categories")
        type_ids = request.json("type_ids")
        title = request.json("title")
        documents = get_documents(title=title, category_ids=category_ids.values(), type_ids=type_ids.values())
        documents_list = [doc.to_dict(
            fields=["id", "title", "owner", "content", "img", "view_count", "captcha", "status", "gem_cost", "discount",
                    "username"
                    "document_type_id", "document_type", "keywords", "categories", "average_rate", "num_rate"]) for doc
            in
            documents]

        return jsonify(documents_list)
    else:
        status = request.args.get('status')
        documents = get_documents(status=status)
        documents_list = [doc.to_dict(
            fields=["id", "title", "owner", "content", "img", "view_count", "captcha", "status", "gem_cost", "discount",
                    "username", "cloudinary_image_secure_url", "cloudinary_secure_url"
                    "document_type_id", "document_type", "keywords", "categories", "average_rate", "num_rate"]) for doc
            in
            documents]

        return jsonify(documents_list)


# "/categories" ['GET']
def api_categories():
    categories = get_categories()
    categories_list = [cate.to_dict(fields=["name", "category_parent_id"]) for cate in categories]
    return jsonify(categories_list)
