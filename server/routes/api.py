from flask import Blueprint
from server.controllers.APIControlller import *

api_bp = Blueprint('api_bp', __name__)

api_bp.route('/documents', methods=['GET'])(api_documents)
api_bp.route('/popular-new-documents', methods=['GET'])(api_popular_new_documents)
api_bp.route('/documents/<id>', methods=['GET'])(api_document_by_id)
api_bp.route('/documents/<doc_id>', methods=['PATCH'])(api_document_update)
api_bp.route('/categories', methods=['GET'])(api_categories)
api_bp.route('/types', methods=['GET'])(api_document_types)
api_bp.route('/keywords', methods=['GET'])(api_keywords)
api_bp.route('/comments/<document_id>', methods=['GET'])(api_comments)
api_bp.route('/documents/download', methods=['POST'])(get_link_download)

