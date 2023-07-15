from flask import Blueprint

from server.controllers.SiteController import *

site_bp = Blueprint('site_bp', __name__)

site_bp.route('/rate', methods=['POST'])(rate)
site_bp.route('/favour', methods=['POST'])(favour)
site_bp.route('/current-user', methods=['POST', 'GET'])(get_current_user)
site_bp.route('/profile/<id>', methods=['GET'])(get_user_info)
site_bp.route('/verify-recaptcha', methods=["POST"])(verify_recaptcha)
site_bp.route('/keywords', methods=["POST"])(save_keywords())
