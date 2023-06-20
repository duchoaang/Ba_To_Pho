from flask import Blueprint

<<<<<<< HEAD
from server.controllers.AdminController import admin_login, notice_to_user
=======
from server.controllers.AdminController import admin_login
>>>>>>> bded29c0efcd37d822832e75f2556d999b99e62b

admin_bp = Blueprint('admin_bp', __name__)

admin_bp.route('/login', methods=['POST'])(admin_login)
<<<<<<< HEAD
admin_bp.route('/notice', methods=['POST'])(notice_to_user)
=======

>>>>>>> bded29c0efcd37d822832e75f2556d999b99e62b
