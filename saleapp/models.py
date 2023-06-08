from sqlalchemy import Column, Integer, String, Float, Boolean, DateTime, ForeignKey, Text, Enum
from sqlalchemy.orm import relationship, backref
from saleapp import db, app
from datetime import datetime
from enum import Enum as UserEnum
from flask_login import UserMixin


class BaseModel(db.Model):
    __abstract__ = True
    id = Column(String(50), primary_key=True)


class UserRole(UserEnum):
    ADMIN = 1
    USER = 2
    STAFF = 3
    IMPORTER = 4


class User(BaseModel, UserMixin):
    username = Column(String(50), nullable=False, unique=True)
    password = Column(String(100), nullable=False)
    password2 = Column(String(100), nullable=False)
    name = Column(String(50), nullable=False)
    phone_number = Column(String(20), nullable=False)
    date_joined = Column(DateTime, default=datetime.now())
    last_login = Column(DateTime,default=datetime.now())
    user_role = Column(Enum(UserRole), default=UserRole.USER)
    address = Column(String(100), nullable=True)
    gender = Column(Boolean, nullable=False)
    dob = Column(DateTime, nullable=False)
    avatar = Column(String(255), default="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png")
    bio = Column(Text, nullable=True)
    social_media = Column(Text, nullable=True)
    email = Column(String(100), nullable=False)
    gem = Column(Float, nullable=False)
    is_active = Column(Boolean, nullable=False)
    documents = relationship('Document', backref='user', lazy=True)
    favour_documents = relationship('Document', secondary="FavourList", backref='favour_users', lazy=True)
    comments = relationship("Comment", backref="user", lazy=True)
    rates = relationship("Rate", backref="user", lazy=True)
    downloads = relationship("UserDownloadDoc", backref="user", lazy=True)

    def __str__(self):
        return self.name


class DocumentType(BaseModel):
    name = Column(String(25), nullable=False)
    documents = relationship("Document", backref='document_type', lazy=True)

    def __str__(self):
        return self.title


class Document(BaseModel):
    title = Column(String(100), nullable=False)
    content = Column(Text, nullable=False)
    owner = Column(String(50), nullable=False)
    date_create = Column(DateTime, default=datetime.now())
    img = Column(String(255), nullable=False)
    view_count = Column(Integer, default=0)
    captcha = Column(String(25), nullable=False)
    discount = Column(Float, default=0)
    gem_cost = Column(Float, nullable=False)
    user_id = Column(String(50), ForeignKey(User.id), nullable=False)
    document_type_id = Column(String(50), ForeignKey(DocumentType.id), nullable=False)
    comments = relationship("Comment", backref="document", lazy=True)
    rates = relationship("Rate", backref="document", lazy=True)
    downloads = relationship("UserDownloadDoc", backref="document", lazy=True)

    # favour_users (backref)
    # categories (backref)

    def __str__(self):
        return self.title


class FavourList(BaseModel):
    user_id = Column(String(50), ForeignKey(User.id), nullable=False)
    document_id = Column(String(50), ForeignKey(Document.id), nullable=False)
    created_date = Column(DateTime, default=datetime.now())

    def __str__(self):
        return self.id


class Category(BaseModel):
    name = Column(String(50), nullable=False)
    category_parent_id = Column(String(50), ForeignKey('category.id'), nullable=True)
    category_children = relationship("Category", backref='category_parent', lazy=True)
    documents = relationship("Document", secondary="Document_Category", backref=backref('categories', lazy=False), lazy=True)

    def __str__(self):
        return self.name


class Document_Category(BaseModel):
    document_id = Column(String(50), ForeignKey(Document.id), nullable=False)
    category_id = Column(String(50), ForeignKey(Category.id), nullable=False)

    def __str__(self):
        return self.id


class Keyword(BaseModel):
    name = Column(String(50), nullable=False)
    documents = relationship("Document", secondary="Document_Keyword", backref=backref("keywords", lazy=False), lazy=True)

    def __str__(self):
        return self.name


class Document_Keyword(BaseModel):
    document_id = Column(String(50), ForeignKey(Document.id), nullable=False)
    keyword_id = Column(String(50), ForeignKey(Keyword.id), nullable=False)
    create_date = Column(DateTime, nullable=False)

    def __str__(self):
        return self.id


class Comment(BaseModel):
    content = Column(Text, nullable=False)
    create_date = Column(DateTime, nullable=False)
    user_id = Column(String(50), ForeignKey(User.id), nullable=False)
    document_id = Column(String(50), ForeignKey(Document.id), nullable=False)

    def __str__(self):
        return self.content


class Rate(BaseModel):
    number_star = Column(Integer, nullable=False)
    create_date = Column(DateTime, nullable=False)
    user_id = Column(String(50), ForeignKey(User.id), nullable=False)
    document_id = Column(String(50), ForeignKey(Document.id), nullable=False)

    def __str__(self):
        return self.number_star


class UserDownloadDoc(BaseModel):
    gem_cost = Column(Float, nullable=False)
    create_date = Column(DateTime, nullable=False)
    user_id = Column(String(50), ForeignKey(User.id), nullable=False)
    document_id = Column(String(50), ForeignKey(Document.id), nullable=False)

    def __str__(self):
        return self.id


if __name__ == '__main__':
    with app.app_context():

        db.drop_all()
        db.create_all()

        # db.session.commit()
