from datetime import date

from flask_login import current_user

from saleapp import app, db
from sqlalchemy import or_, and_, not_, func, extract
from sqlalchemy.orm import aliased
from saleapp.models import *


def get_documents(title=None, category_id=None, created_date=None, username=None):
    d = Document.query
    if title:
        d = d.filter(Document.title.contains(title))
    if category_id:
        d = d.join(Document_Category).filter(Document_Category.category_id == category_id)
    if created_date:
        d = d.filter(func.date(Document.created_date).__eq__(created_date.date()))
    if username:
        d = d.filter(Document.user.username.contrains(username))
    return d.all()

