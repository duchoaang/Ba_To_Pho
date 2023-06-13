from flask import jsonify
from server.dao import get_documents, get_categories
from server.models import Status


# -------------- "/api" ------------------


# "/documents" ['GET']
def api_documents():
    documents = get_documents(status=Status.WAITING)
    documents_list = [doc.to_dict(fields=["id", "title", "owner", "img", "view_count", "captcha", "status"]) for doc in
                      documents]
    return jsonify(documents_list)


# "/categories" ['GET']
def api_categories():
    categories = get_categories()
    categories_list = [cate.to_dict(fields=["name", "category_parent_id"]) for cate in categories]
    return jsonify(categories_list)