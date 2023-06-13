from server import app, login, dao
from server.routes.user import user_bp
from server.routes.api import api_bp
from flask import Blueprint, session, request, render_template, jsonify


@login.user_loader
def user_load(user_id):
    return dao.get_user_by_id(user_id=user_id)


app.register_blueprint(user_bp, url_prefix='/users')
app.register_blueprint(api_bp, url_prefix='/api')


if __name__ == '__main__':
    app.run(debug=True)
