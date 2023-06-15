from flask import request
import requests
from server import app, login, dao
from server.routes.document import document_bp
from server.routes.user import user_bp
from server.routes.api import api_bp
from flask import Blueprint


@login.user_loader
def user_load(user_id):
    return dao.get_user_by_id(user_id=user_id)


@app.route('/')
def test():
    pdf_url = input("Path_cloudinay: ").strip()

    with open("temp.pdf", "wb") as f:
        response = requests.get(pdf_url)
        f.write(response.content)
    with open("temp.pdf", "rb") as f:
        print(f.read())
    return "ha"


app.register_blueprint(user_bp, url_prefix='/users')
app.register_blueprint(api_bp, url_prefix='/api')
app.register_blueprint(document_bp, url_prefix='/documents')


if __name__ == '__main__':
    app.run(debug=True)
