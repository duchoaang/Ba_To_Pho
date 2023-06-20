from flask import Blueprint
from server.controllers.DocumentController import upload_cloudinary, test_duyet_bai

document_bp = Blueprint('document_bp', __name__)

document_bp.route('/upload', methods=['POST'])(upload_cloudinary)
document_bp.route('/duyet-bai', methods=["PATCH"])(test_duyet_bai)
