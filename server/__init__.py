import os
from datetime import timedelta
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from urllib.parse import quote
from flask_login import LoginManager
from flask_cors import CORS
from flask_mail import Mail
from flask_session import Session
import cloudinary
from .config import config

app = Flask(__name__, static_url_path="/")
CORS(app, origins=["http://localhost:3000", "http://tailieubtp.com", "https://tailieubtp.com"], supports_credentials=True)

app.secret_key = config['SECRET_KEY']
app.config['SECURITY_PASSWORD_SALT'] = config['SECURITY_PASSWORD_SALT']
app.config['SQLALCHEMY_DATABASE_URI'] = f"mysql+pymysql://{config['DATABASE_USER']}:{quote(config['DATABASE_PASSWORD'])}@{config['DATABASE_HOST']}/{config['DATABASE_NAME']}?charset=utf8mb4"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = True
app.config['PAGE_SIZE'] = config['PAGE_SIZE']
app.config['COMMENT_SIZE'] = config['COMMENT_SIZE']
app.config['PAGE_INF'] = config['PAGE_INF']
app.config['USER_TEMP_KEY'] = config['USER_TEMP_KEY']

mail = Mail()
app.config['MAIL_SERVER'] = config['MAIL_SERVER']
app.config['MAIL_PORT'] = config['MAIL_PORT']
app.config['MAIL_USE_SSL'] = config['MAIL_USE_SSL']
app.config['MAIL_USERNAME'] = config['MAIL_USERNAME']
app.config['MAIL_PASSWORD'] = config['MAIL_PASSWORD']
app.config['MAIL_DEFAULT_SENDER'] = config['MAIL_DEFAULT_SENDER']

app.config['SESSION_COOKIE_SAMESITE'] = config.get('SESSION_COOKIE_SAMESITE')
app.config['SESSION_COOKIE_SECURE'] = config.get('SESSION_COOKIE_SECURE')
app.config["SESSION_PERMANENT"] = config.get('SESSION_PERMANENT')
app.config["SESSION_TYPE"] = config.get('SESSION_TYPE')
Session(app)

app.config['FLASK_ADMIN_SWATCH'] = config.get('FLASK_ADMIN_SWATCH')
app.config['FLASK_ADMIN_FLUID_LAYOUT'] = config.get('FLASK_ADMIN_FLUID_LAYOUT')

db = SQLAlchemy(app=app)
mail.init_app(app)
login = LoginManager(app=app)

cloudinary.config(
    cloud_name=config.get('CLOUDINARY_CLOUD_NAME'),
    api_key=config.get('CLOUDINARY_API_KEY'),
    api_secret=config.get('CLOUDINARY_API_SECRET')
)

APP_KEY = config.get('APP_KEY')
APP_SECRET = config.get('APP_SECRET')
