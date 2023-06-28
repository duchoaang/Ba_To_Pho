from flask import Blueprint
from server.controllers.DocumentController import upload_cloudinary, upload_dropbox, reject_document

document_bp = Blueprint('document_bp', __name__)

document_bp.route('/upload', methods=['POST'])(upload_cloudinary)
document_bp.route('/duyet-bai', methods=['POST'])(upload_dropbox)
document_bp.route('./tu-choi', methods=['POST'])(reject_document)
