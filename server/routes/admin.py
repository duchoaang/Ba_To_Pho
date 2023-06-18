from flask import Blueprint

from server.controllers.AdminController import admin_login, notice_to_user

admin_bp = Blueprint('admin_bp', __name__)

admin_bp.route('/login', methods=['POST'])(admin_login)
admin_bp.route('/notice', methods=['POST'])(notice_to_user)


