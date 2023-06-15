<<<<<<< HEAD
from datetime import timedelta

=======
>>>>>>> origin/backend-phat
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from urllib.parse import quote
from flask_login import LoginManager
from flask_cors import CORS
from flask_mail import Mail
<<<<<<< HEAD
from flask_session import Session

app = Flask(__name__)
CORS(app, supports_credentials=True)
=======
import cloudinary

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})
>>>>>>> origin/backend-phat


app.secret_key = '689567gh$^^&*#%^&*^&%^*DFGH^&*&*^*'
app.config['SECURITY_PASSWORD_SALT'] = 'test_test'
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:%s@localhost/batopho?charset=utf8mb4' % quote("Admin@123")
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = True
app.config['PAGE_SIZE'] = 8 # chỉnh số trang hiển thị product
app.config['COMMENT_SIZE'] = 8
app.config['PAGE_INF'] = 9999
<<<<<<< HEAD
app.config['USER_TEMP_KEY'] = 'user_temp'
=======
>>>>>>> origin/backend-phat

mail = Mail()
app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 465
app.config['MAIL_USE_SSL'] = True
app.config['MAIL_USERNAME'] = 'tailieubatopho@gmail.com'
app.config['MAIL_PASSWORD'] = 'pebpevcdzfwlzmws'
app.config['MAIL_DEFAULT_SENDER'] = 'tailieubatopho@gmail.com'

<<<<<<< HEAD
app.config['SESSION_COOKIE_SAMESITE'] = 'None'
app.config['SESSION_COOKIE_SECURE'] = True

app.config["SESSION_PERMANENT"] = False
app.config["SESSION_TYPE"] = "filesystem"
Session(app)

=======
>>>>>>> origin/backend-phat
db = SQLAlchemy(app=app)
mail.init_app(app)
login = LoginManager(app=app)


<<<<<<< HEAD

=======
cloudinary.config(
    cloud_name = "dhffue7d7",
    api_key = "215425482852391",
    api_secret = "a9xaGBMJr7KgKhJa-1RpSpx_AmU"
)
APP_KEY = 'youh9irihpuik2f'
APP_SECRET = 'ymejn6mc6q60hvs'
>>>>>>> origin/backend-phat
