
from flask import request, render_template, send_from_directory, jsonify

from server import app, login, dao, admin, utils
from server.routes.admin import admin_bp
from server.routes.comment import comment_bp
from server.routes.document import document_bp
from server.routes.site import site_bp
from server.routes.user import user_bp
from server.routes.api import api_bp


@login.user_loader
def user_load(user_id):
    return dao.get_user_by_id(user_id=user_id)


@app.route('/login')
def login():
    return render_template('login.html')


@app.route('/')
def index():
    return render_template('index.html')


'''
    TODO: assets -> static folder
'''


@app.route('/', defaults={'path': ''})
# @app.route('/<path:path>')
def fe(path):
    return app.send_static_file('index.html')


@app.route('/src/assets/<path:path>')
def send_assets(path):
    return send_from_directory('static/img', path)


@app.route('/search')
def search():
    return render_template('search.html')


app.register_blueprint(user_bp, url_prefix='/users')
app.register_blueprint(admin_bp, url_prefix='/admin')
app.register_blueprint(api_bp, url_prefix='/api')
app.register_blueprint(document_bp, url_prefix='/documents')
app.register_blueprint(comment_bp, url_prefix='/comments')
app.register_blueprint(site_bp, url_prefix='/')

if __name__ == '__main__':
    app.run(debug=True)
