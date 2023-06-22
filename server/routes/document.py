from flask import Blueprint
from server.controllers.DocumentController import upload_cloudinary, upload_dropbox

document_bp = Blueprint('document_bp', __name__)

document_bp.route('/upload', methods=['POST'])(upload_cloudinary)
document_bp.route('/upload-dropbox', methods=['GET'])(upload_dropbox)
<<<<<<< HEAD
document_bp.route('/duyet-bai', methods=["POST"])(upload_dropbox)
=======
document_bp.route('/duyet-bai', methods=["POST"])(test_duyet_bai)
>>>>>>> 1347ce722f40725c531dec7d0afce4d445d9901c

