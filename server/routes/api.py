from flask import Blueprint
from server.controllers.APIControlller import api_documents

api_bp = Blueprint('api_bp', __name__)

api_bp.route('/documents', methods=['GET'])(api_documents)
