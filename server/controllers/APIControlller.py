from flask import jsonify
from server.dao import get_documents
from server.models import Status


# -------------- "/api" ------------------


# "/documents" ['GET']
def api_documents():
    documents = get_documents(status=Status.WAITING)
    documents_list = [doc.to_dict(fields=["id", "title", "owner", "img", "view_count", "captcha", "status"]) for doc in
                      documents]
    return jsonify(documents_list)
