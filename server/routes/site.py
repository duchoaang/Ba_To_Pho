from flask import Blueprint

from server.controllers.SiteController import rate, favour, get_user_info

site_bp = Blueprint('site_bp', __name__)

site_bp.route('/rate', methods=['POST'])(rate)
site_bp.route('/favour', methods=['POST'])(favour)
site_bp.route('/profile/<id>', methods=['GET'])(get_user_info)
