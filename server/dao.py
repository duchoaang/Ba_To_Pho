import hashlib
from datetime import date

from flask_login import current_user

from server import app, db
from sqlalchemy import or_, and_, not_, func, extract
from sqlalchemy.orm import aliased
from server.models import *


def add_user(fields):
    user = User(username=fields['username'], password=fields['password'], email=fields['email'])
    db.session.add(user)
    db.session.commit()
    return user


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



def get_categories(name=None, category_parent_id=None):
    c = Category.query
    if name:
        c = c.filter(Category.name.contains(name))
    if category_parent_id:
        c = c.filter(Category.category_parent_id.__eq__(category_parent_id))
    return c.all()


def get_keyword_by_name(name):
    kw = Keyword.query.filter(Keyword.name.__eq__(name))
    return kw.first()



def add_no_accept_document(fields, categories, keywords, cloudinary_public_id, cloudinary_secure_url, cloudinary_image_public_id, cloudinary_image_secure_url):
    doc = Document(title=fields['title'], owner=fields['owner'], content=fields['description'])
    dc_list = []
    dk_list = []
    for cate in categories.values():
        dc = Document_Category(document=doc, category_id=cate)
        dc_list.append(dc)
    for key in keywords.values():
        kw = get_keyword_by_name(key)
        if kw:
            dk = Document_Keyword(document=doc, keyword=kw)
            dk_list.append(dk)
        else:
            k = Keyword(name=key)
            dk = Document_Keyword(document=doc, keyword=k)
            dk_list.append(k)
            dk_list.append(dk)

    doc.user_id = "a59d44ae-df16-44af-bcc8-0a1e283d2628"
    doc.gem_cost = 100
    doc.captcha = "AFB2QD1"
    doc.document_type_id = "1c6a2982-55df-4996-819b-bdbe983b0170"
    doc.cloud_link = "https://drive.google.com/drive/folders/1SZIhCIrm9bqvsuwN4PkaWtbY6MIWNKX2"
    doc.cloud_link_download = "https://drive.google.com/drive/folders/1SZIhCIrm9bqvsuwN4PkaWtbY6MIWNKX2"
    doc.cloudinary_secure_url = cloudinary_secure_url
    doc.cloudinary_public_id = cloudinary_public_id
    doc.cloudinary_image_public_id = cloudinary_image_public_id
    doc.cloudinary_image_secure_url = cloudinary_image_secure_url
    db.session.add(doc)
    db.session.add_all(dc_list)
    db.session.add_all(dk_list)
    db.session.commit()



if __name__ == '__main__':
    with app.app_context():
        fields = {
            "title": "heheheheheheheh",
            "owner": "Phtas",
            "description": "1234567890",
        }
        categories = {
            "cate-1": "34a2fb94-fec1-4b97-a5a1-b85f3efa4416",
            "cate-2": "a77ee434-2efe-44f6-91b5-32d4466cb636",
        }
        keywords = {
            "kw-1": "Võ",
            "kw-2": "Phú",
            "kw-3": "Phát",
        }


