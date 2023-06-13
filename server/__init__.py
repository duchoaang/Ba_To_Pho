from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from urllib.parse import quote
from flask_login import LoginManager
from flask_cors import CORS
from flask_mail import Mail
import cloudinary

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})


app.secret_key = '689567gh$^^&*#%^&*^&%^*DFGH^&*&*^*'
app.config['SECURITY_PASSWORD_SALT'] = 'test_test'
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:%s@localhost/batopho?charset=utf8mb4' % quote("Admin@123")
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = True
app.config['PAGE_SIZE'] = 8 # chỉnh số trang hiển thị product
app.config['COMMENT_SIZE'] = 8
app.config['PAGE_INF'] = 9999

mail = Mail()
app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 465
app.config['MAIL_USE_SSL'] = True
app.config['MAIL_USERNAME'] = 'tailieubatopho@gmail.com'
app.config['MAIL_PASSWORD'] = 'pebpevcdzfwlzmws'
app.config['MAIL_DEFAULT_SENDER'] = 'tailieubatopho@gmail.com'

db = SQLAlchemy(app=app)
mail.init_app(app)
login = LoginManager(app=app)


cloudinary.config(
    cloud_name = "dhffue7d7",
    api_key = "215425482852391",
    api_secret = "a9xaGBMJr7KgKhJa-1RpSpx_AmU"
)
APP_KEY = 'youh9irihpuik2f'
APP_SECRET = 'ymejn6mc6q60hvs'