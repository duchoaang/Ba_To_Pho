from flask import Blueprint

from server.controllers.SiteController import rate, favour

site_bp = Blueprint('site_bp', __name__)

site_bp.route('/rate', methods=['POST'])(rate)
site_bp.route('/favour', methods=['POST'])(favour)

