import hashlib

from sqlalchemy import Column, Integer, String, Float, Boolean, DateTime, ForeignKey, Text, Enum, event
from sqlalchemy.orm import relationship, backref
from server import db, app
from datetime import datetime
from enum import Enum as MyEnum
from flask_login import UserMixin
import uuid

from server.utils import hash_text


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
    is_confirm = Column(Boolean, nullable=False, default=False)
    warn_time = Column(Integer, nullable=False, default=0)

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
        return self.name


class Document(BaseModel):
    title = Column(String(100), nullable=False)
    description = Column(Text, nullable=False)
    author = Column(String(50), nullable=False)
    created_date = Column(DateTime, default=datetime.now())
    updated_date = Column(DateTime, default=datetime.now())
    view_count = Column(Integer, default=0)
    captcha = Column(String(25), nullable=False)
    discount = Column(Float, default=0)
    gem_cost = Column(Float, nullable=False, default=100)

    # Link after confirm
    cloud_link = Column(Text, nullable=False)  # link view dropbox
    img_cloud_link = Column(Text, nullable=False)  # link view image dropbox

    # Link download tai web
    file_link_download = Column(Text, nullable=False)  # link bam download
    img_link_download = Column(Text, nullable=False)  # image

    # link de duyet cloudinary
    cloudinary_public_id = Column(Text, nullable=False)
    cloudinary_secure_url = Column(Text, nullable=False)

    cloudinary_image_public_id = Column(Text, nullable=False)
    cloudinary_image_secure_url = Column(Text, nullable=False)

    # --------
    status = Column(Enum(Status), default=Status.WAITING)
    user_id = Column(String(36), ForeignKey(User.id), nullable=False)
    document_type_id = Column(String(36), ForeignKey(DocumentType.id), nullable=False)

    favour_lists = relationship('FavourList', backref='document', lazy=True)

    comments = relationship("Comment", backref="document", lazy=True)
    rates = relationship("Rate", backref="document", lazy=True)
    downloads = relationship("UserDownloadDoc", backref="document", lazy=True)
    categories = relationship('Category', secondary='document__category', back_populates='documents')
    keywords = relationship('Keyword', secondary='document__keyword', back_populates='documents')

    def __str__(self):
        return self.title

    def to_dict(self, fields=None):
        result = super().to_dict(fields)
        if 'name' in fields:
            result['name'] = self.user.name
        if 'categories' in fields:
            result['categories'] = [{'id': category.id, 'name': category.name} for category in self.categories]
        if 'keywords' in fields:
            result['keywords'] = [{'id': keyword.id, 'name': keyword.name} for keyword in self.keywords]
        if 'document_type' in fields:
            result['document_type'] = self.document_type.name
        if 'average_rate' in fields:
            result['average_rate'] = sum(rate.number_star for rate in self.rates) / len(self.rates) if self.rates else 0
        if 'num_rate' in fields:
            result['num_rate'] = len(self.rates)
        return result


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
    documents = relationship('Document', secondary='document__category', back_populates='categories')

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
    documents = relationship('Document', secondary='document__keyword', back_populates='keywords')

    def __str__(self):
        return self.name


class Comment(BaseModel):
    content = Column(Text, nullable=False)
    created_date = Column(DateTime, default=datetime.now())
    user_id = Column(String(36), ForeignKey(User.id), nullable=False)
    document_id = Column(String(36), ForeignKey(Document.id), nullable=False)
    is_active = Column(Boolean, default=True)

    def __str__(self):
        return self.content

    def to_dict(self, fields=None):
        result = super().to_dict(fields)
        if 'user.username' in fields:
            result['username'] = self.user.username
        return result


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
    created_date = Column(DateTime, nullable=False, default=datetime.now())
    is_seen = Column(Boolean, default=False)
    user_id = Column(String(36), ForeignKey(User.id), nullable=False)

    def __str__(self):
        return self.content


class Rule(BaseModel):
    name = Column(String(100), nullable=False)
    value = Column(Integer, nullable=False)

    def __str__(self):
        return self.name


if __name__ == '__main__':
    with app.app_context():
        db.drop_all()
        db.create_all()

        p = '123'
        p2 = '234'
        admin = User(username='admin', password=hash_text(p), password2=hash_text(p2), name='admin',
                     phone_number='0987654321', gender=1,
                     dob=datetime(2002, 2, 2), email="admin@gmail.com", gem=500000, user_role=UserRole.ADMIN)
        u1 = User(username='u1', password=hash_text(p), password2=hash_text(p2), name='user',
                     phone_number='0987654321', gender=1,
                     dob=datetime(2002, 2, 2), email="user1@gmail.com", gem=500000)
        db.session.add_all([admin, u1])

        dt1 = DocumentType(name='PDF')
        dt2 = DocumentType(name='Word')
        dt3 = DocumentType(name='Powerpoint')
        db.session.add_all([dt1, dt2, dt3])

        chuoi = """Tiểu thuyết, Tiểu thuyết tình cảm, Lãng mạn, Hình sự, Khoa học viễn tưởng,
        Lịch sử hư cấu, Phi hư cấu, Hồi ký, Tự truyện, Tiểu sử,
        Lịch sử, Tự giúp đỡ, Tâm lý học, Triết học, Khoa học,
        Khoa học xã hội, Khoa học tự nhiên, Công nghệ, Kinh doanh,
        Đầu tư, Tiếp thị, Luật pháp, Tôn giáo, Tinh thần,
        Kitô giáo, Phật giáo, Hồi giáo, Thi ca, Văn học,
        Nấu ăn, Du lịch, Nhật ký, Sổ tay, Hướng dẫn, Kỹ thuật,
        Y học, Thể thao, Thiếu nhi, Sách tranh, Thú cưng,
        Nông nghiệp, Sức khỏe, Thú y, Động vật, Hoa,
        Địa lý, Lịch sử văn hoá, Nhân chủng học, Chính trị, Ngôn ngữ,
        Kinh tế học, Môi trường, Thủ công, Chế tạo, Giáo dục, Gia đình,
        Sân khấu, Âm nhạc, Nghệ thuật biểu diễn, Văn học Mỹ,
        Văn học Anh, Văn học Pháp, Ma quái, Huyền bí, Huyền thoại,
        Thiếu niên, Thanh thiếu niên, Hội hoạ, Kiến trúc, Truyện tranh, Manga"""

        ket_qua = [x.strip() for x in chuoi.split(",")]

        cate_list = []
        for c in ket_qua:
            category = Category(name=c)
            cate_list.append(category)


        r = Rule(name='waiting_time_confirm', value=30)
        db.session.add(r)
        db.session.commit()
