import hashlib
from datetime import date

from flask_login import current_user

from server import app, db
from sqlalchemy import or_, and_, not_, func, extract
from sqlalchemy.orm import aliased
from server.models import *


def add_user(user):
    db.session.add(user)
    db.session.commit()


def get_documents(title=None, category_id=None, created_date=None, username=None, status=None):
    d = Document.query
    if status:
        d = d.filter(Document.status.__eq__(status))
    if title:
        d = d.filter(Document.title.contains(title))
    if category_id:
        d = d.join(Document_Category).filter(Document_Category.category_id == category_id)
    if created_date:
        d = d.filter(func.date(Document.created_date).__eq__(created_date.date()))
    if username:
        d = d.filter(Document.user.username.contains(username))
    return d.all()


def get_categories(name=None, category_parent_id=None):
    c = Category.query
    if name:
        c = c.filter(Category.name.contains(name))
    if category_parent_id:
        c = c.filter(Category.category_parent_id.__eq__(category_parent_id))
    return c.all()


def get_user_by_email(email):
    u = User.query.filter(User.email.__eq__(email)).first()
    if u:
        return u
    return None


def get_existed_user(username, email, user_role=UserRole.USER):
    u = User.query.filter(User.user_role.__eq__(user_role))
    u = u.filter(or_(User.email.__eq__(email), User.username.__eq__(username))).first()
    if u:
        return u
    return None


def confirm_user(user):
    user.is_confirm = True
    db.session.add(user)
    db.session.commit()


def add_user(fields):
    user = User(username=fields['username'], password=fields['password'], email=fields['email'])
    db.session.add(user)
    db.session.commit()
    return user


def get_user_by_id(user_id):
    u = User.query.get(user_id)
    return u


def check_login(username, password):
    if username and password:
        password = str(hashlib.md5(password.strip().encode('utf-8')).hexdigest())

        return User.query.filter(User.username.__eq__(username),
                                 User.password.__eq__(password),
                                 User.user_role.__eq__(UserRole.USER)).first()


