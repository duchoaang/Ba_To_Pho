from flask import Blueprint

from server.controllers.AdminController import admin_login

admin_bp = Blueprint('admin_bp', __name__)

admin_bp.route('/login', methods=['POST'])(admin_login)

