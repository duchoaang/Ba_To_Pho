from flask import Blueprint
from server.controllers.UserController import user_register, confirm_email, user_login, resend_confirmation, user

user_bp = Blueprint('user_bp', __name__)


user_bp.route('/register', methods=['POST'])(user_register)
user_bp.route('/login', methods=['POST'])(user_login)
user_bp.route('/resend/confirm', methods=['GET'])(resend_confirmation)
user_bp.route('/confirm/<token>', methods=['GET'])(confirm_email)
user_bp.route('/', methods=['GET'])(user)

