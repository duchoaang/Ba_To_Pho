from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from urllib.parse import quote
from flask_login import LoginManager

app = Flask(__name__)

app.secret_key = '689567gh$^^&*#%^&*^&%^*DFGH^&*&*^*'
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:%s@localhost/batopho?charset=utf8mb4' % quote("Admin@123")
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = True
app.config['PAGE_SIZE'] = 8 # chỉnh số trang hiển thị product
app.config['COMMENT_SIZE'] = 8
app.config['PAGE_INF'] = 9999

db = SQLAlchemy(app=app)
login = LoginManager(app=app)


