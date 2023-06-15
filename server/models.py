from sqlalchemy import Column, Integer, String, Float, Boolean, DateTime, ForeignKey, Text, Enum
from sqlalchemy.orm import relationship, backref
from server import db, app
from datetime import datetime
from enum import Enum as MyEnum
from flask_login import UserMixin
import uuid


def generate_uuid():
    return str(uuid.uuid4())


class BaseModel(db.Model):
    __abstract__ = True
    id = Column(String(36), primary_key=True, default=generate_uuid)

    def to_dict(self, fields=None):
        result = {}
        for c in self.__table__.columns:
            if fields is None or c.name in fields:
                value = getattr(self, c.name)
                if isinstance(value, MyEnum):
                    value = value.name
                result[c.name] = value
        return result


class UserRole(MyEnum):
    ADMIN = 1
    USER = 2


class Status(MyEnum):
    WAITING = 1
    ACCEPT = 2
    REJECT = 3


class User(BaseModel, UserMixin):
    username = Column(String(50), nullable=False, unique=True)
    password = Column(String(100), nullable=False)
    password2 = Column(String(100), nullable=True)
    email = Column(String(100), unique=True, nullable=False)

    name = Column(String(50), nullable=True)
    phone_number = Column(String(20), nullable=True)
    gender = Column(Boolean, nullable=True)
    dob = Column(DateTime, nullable=True)

    date_joined = Column(DateTime, default=datetime.now())
    last_login = Column(DateTime, default=datetime.now())
    user_role = Column(Enum(UserRole), default=UserRole.USER)

    avatar = Column(String(255), default="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png")
    bio = Column(Text, nullable=True)  # updatesau
    social_media = Column(String(50), nullable=True)  # updatesau
    address = Column(String(100), nullable=True)  # updatesau
    gem = Column(Float, default=300000, nullable=False)
    is_active = Column(Boolean, nullable=False, default=True)
    is_confirm = Column(Boolean, nullable=False, default=True)

    documents = relationship('Document', backref='user', lazy=True)
    favour_lists = relationship('FavourList', backref='user', lazy=True)
    comments = relationship("Comment", backref="user", lazy=True)
    rates = relationship("Rate", backref="user", lazy=True)
    downloads = relationship("UserDownloadDoc", backref="user", lazy=True)
    notifications = relationship("Notification", backref="user", lazy=True)

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
    created_date = Column(DateTime, default=datetime.now())
    updated_date = Column(DateTime, default=datetime.now())
    img = Column(String(255),
                 default="https://img.freepik.com/free-vector/documents-concept-illustration_114360-138.jpg")
    view_count = Column(Integer, default=0)
    captcha = Column(String(25), nullable=False)
    discount = Column(Float, default=0)
    gem_cost = Column(Float, nullable=False)

    cloud_link = Column(Text, nullable=False)

    # Update
    cloud_link_download = Column(Text, nullable=False)
    cloudinary_public_id = Column(Text, nullable=False)
    cloudinary_secure_url = Column(Text, nullable=False)
    cloudinary_image_public_id = Column(Text, nullable=False)
    cloudinary_image_secure_url = Column(Text, nullable=False)

    # --------
    status = Column(Enum(Status), default=Status.WAITING)
    user_id = Column(String(36), ForeignKey(User.id), nullable=False)
    document_type_id = Column(String(36), ForeignKey(DocumentType.id), nullable=False)

    favour_lists = relationship('FavourList', backref='document', lazy=True)
    document_categories = relationship("Document_Category", backref='document', lazy=False)
    document_keywords = relationship("Document_Keyword", backref="document", lazy=False)

    comments = relationship("Comment", backref="document", lazy=True)
    rates = relationship("Rate", backref="document", lazy=True)
    downloads = relationship("UserDownloadDoc", backref="document", lazy=True)

    def __str__(self):
        return self.title


class FavourList(BaseModel):
    user_id = Column(String(36), ForeignKey(User.id), nullable=False)
    document_id = Column(String(36), ForeignKey(Document.id), nullable=False)
    created_date = Column(DateTime, default=datetime.now())

    def __str__(self):
        return self.id


class Category(BaseModel):
    id = Column(String(36), primary_key=True, unique=True, default=generate_uuid)
    name = Column(String(50), unique=True, nullable=False)
    category_parent_id = Column(String(36), ForeignKey('category.id'), nullable=True)
    category_children = relationship("Category", backref=backref('category_parent', remote_side=[id]), lazy=True)
    category_documents = relationship("Document_Category", backref='category', lazy=True)

    def __str__(self):
        return self.name


class Document_Category(BaseModel):
    document_id = Column(String(36), ForeignKey("document.id"), nullable=False)
    category_id = Column(String(36), ForeignKey("category.id"), nullable=False)

    def __str__(self):
        return self.id


class Document_Keyword(BaseModel):
    document_id = Column(String(36), ForeignKey("document.id"), nullable=False)
    keyword_id = Column(String(36), ForeignKey("keyword.id"), nullable=False)
    created_date = Column(DateTime, default=datetime.now())

    def __str__(self):
        return self.id


class Keyword(BaseModel):
    name = Column(String(50), unique=True, nullable=False)
    keyword_documents = relationship("Document_Keyword", backref="keyword", lazy=True)

    def __str__(self):
        return self.name


class Comment(BaseModel):
    content = Column(Text, nullable=False)
    created_date = Column(DateTime, default=datetime.now())
    user_id = Column(String(36), ForeignKey(User.id), nullable=False)
    document_id = Column(String(36), ForeignKey(Document.id), nullable=False)

    def __str__(self):
        return self.content


class Rate(BaseModel):
    number_star = Column(Integer, nullable=False)
    created_date = Column(DateTime, default=datetime.now())
    user_id = Column(String(36), ForeignKey(User.id), nullable=False)
    document_id = Column(String(36), ForeignKey(Document.id), nullable=False)

    def __str__(self):
        return self.number_star


class UserDownloadDoc(BaseModel):
    gem_cost = Column(Float, nullable=False)
    created_date = Column(DateTime, default=datetime.now())
    user_id = Column(String(36), ForeignKey(User.id), nullable=False)
    document_id = Column(String(36), ForeignKey(Document.id), nullable=False)

    def __str__(self):
        return self.id


class Notification(BaseModel):
    content = Column(String(255), nullable=False)
    created_date = Column(DateTime, nullable=False)
    is_seen = Column(Boolean, default=False)
    user_id = Column(String(36), ForeignKey(User.id), nullable=False)

    def __str__(self):
        return self.content


if __name__ == '__main__':
    with app.app_context():
        db.drop_all()
        db.create_all()
        u1 = User(username='u1', password='123', password2='234', name='user', phone_number='0987654321', gender=1,
                  dob=datetime(2002, 2, 2), email="user1@gmail.com", gem=500000)
        db.session.add(u1)

        dt1 = DocumentType(name='PDF')
        dt2 = DocumentType(name='Word')
        dt3 = DocumentType(name='Powerpoint')
        db.session.add_all([dt1, dt2, dt3])

        d1 = Document(title='Cơ sở lập trình', content='Học lập trình cơ bản', owner='Võ Thị B', captcha='xTz9Kp',
                      discount=0, gem_cost=100000, user=u1, document_type=dt1,
                      cloud_link="https://drive.google.com/drive/folders/1SZIhCIrm9bqvsuwN4PkaWtbY6MIWNKX2",
                      cloud_link_download="https://drive.google.com/drive/folders/1SZIhCIrm9bqvsuwN4PkaWtbY6MIWNKX2",
                      cloudinary_public_id="https://drive.google.com/drive/folders/1SZIhCIrm9bqvsuwN4PkaWtbY6MIWNKX2",
                      cloudinary_secure_url="https://drive.google.com/drive/folders/1SZIhCIrm9bqvsuwN4PkaWtbY6MIWNKX2")
        d2 = Document(title='Toán cao cấp', content='Toán cao cấp', owner='Nguyễn Văn A', captcha='xTz9Kp',
                      discount=50000, gem_cost=80000, user=u1, document_type=dt2,
                      cloud_link="https://drive.google.com/drive/folders/1SZIhCIrm9bqvsuwN4PkaWtbY6MIWNKX2",
                      cloud_link_download="https://drive.google.com/drive/folders/1SZIhCIrm9bqvsuwN4PkaWtbY6MIWNKX2",
                      cloudinary_public_id="https://drive.google.com/drive/folders/1SZIhCIrm9bqvsuwN4PkaWtbY6MIWNKX2",
                      cloudinary_secure_url="https://drive.google.com/drive/folders/1SZIhCIrm9bqvsuwN4PkaWtbY6MIWNKX2")
        d3 = Document(title='Nhập môn hướng đối tượng', content='Hướng đối tượng cho người mới bắt đầu',
                      owner='Trần Thị C', captcha='xTz9Kp', discount=0, gem_cost=200000, user=u1, document_type=dt1,
                      cloud_link="https://drive.google.com/drive/folders/1SZIhCIrm9bqvsuwN4PkaWtbY6MIWNKX2",
                      cloud_link_download="https://drive.google.com/drive/folders/1SZIhCIrm9bqvsuwN4PkaWtbY6MIWNKX2",
                      cloudinary_public_id="https://drive.google.com/drive/folders/1SZIhCIrm9bqvsuwN4PkaWtbY6MIWNKX2",
                      cloudinary_secure_url="https://drive.google.com/drive/folders/1SZIhCIrm9bqvsuwN4PkaWtbY6MIWNKX2")

        db.session.add_all([d1, d2, d3])

        c1 = Category(name='Lập trình')
        c2 = Category(name='Toán')
        c3 = Category(name='Lập trình hướng đối tượng', category_parent=c1)
        db.session.add_all([c1, c2, c3])

        d_c1 = Document_Category(document=d1, category=c1)
        d_c2 = Document_Category(document=d2, category=c2)
        d_c3 = Document_Category(document=d3, category=c1)
        d_c4 = Document_Category(document=d3, category=c3)

        db.session.add_all([d_c1, d_c2, d_c3, d_c4])

        db.session.commit()
