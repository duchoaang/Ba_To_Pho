import cloudinary.uploader
from saleapp.models import Category, SachTacGia, Product, UserRole, Receipt, Rule, UserReceipt, ChiTietNhapSach, ReceiptDetail
from saleapp import app, db, untils
from flask_admin import Admin, BaseView, expose, AdminIndexView
from flask_admin.contrib.sqla import ModelView
from flask_login import current_user, logout_user
from flask import request, redirect, jsonify
from datetime import datetime


class AuthenticatedModelView(ModelView):
    def is_accessible(self):
        return current_user.is_authenticated and current_user.user_role == UserRole.ADMIN


class ChangeRuleView(ModelView):
    def is_accessible(self):
        return current_user.is_authenticated and current_user.user_role == UserRole.ADMIN



class ProductView(AuthenticatedModelView):

    can_create = False
    column_display_pk = True
    can_view_details = True
    can_export = True
    can_delete = False
    column_searchable_list = ['name', 'description', 'id']
    column_filters = ['name', 'price']
    column_export_list = ['image']
    column_labels = {
        'created_date': 'Ngay Tao',
        'name': 'Ten'
    }
    column_sortable_list = ['name', 'id', 'price']

    def is_accessible(self):
        return current_user.is_authenticated and not current_user.user_role == UserRole.USER

class ChiTiet(AuthenticatedModelView):
    column_display_pk = True
    can_view_details = True
    can_export = True
    column_searchable_list = ['product_id']

class ReceiptView(AuthenticatedModelView):
    column_display_pk = True
    can_create = False
    can_edit = False
    can_delete = False
    can_view_details = True
    can_export = True
    column_searchable_list = ['id']

    column_sortable_list = ['created_date']


class ChiTietHoaDon(AuthenticatedModelView):
    column_display_pk = True
    can_view_details = True
    can_export = True
    column_searchable_list = ['product_id']

class SachTacGiaView(AuthenticatedModelView):
    column_display_pk = True
    can_view_details = True
    can_export = True
    column_searchable_list = ['product_id']


class LogoutView(BaseView):
    @expose('/')
    def index(self):
        logout_user()
        return redirect('/admin')

    def is_accessible(self):
        return current_user.is_authenticated


class StatsView(BaseView):
    @expose('/')
    def index(self):
        return self.render('admin/Stats.html', stats=untils.category_stats())

    def is_accessible(self):
        return current_user.is_authenticated and (
                    current_user.user_role == UserRole.ADMIN or current_user.user_role == UserRole.IMPORTER)


class DeleteView(BaseView):
    @expose('/')
    def index(self):
        id = request.args.get('value')
        pay = request.args.get('payment')

        product = untils.get_product_by_id2(id)

        all_product = untils.get_all_product()

        quote = ''

        if id and not product:
            quote = 'Không có sản phẩm hợp lệ!'

        if product:
            return self.render('admin/delete.html', id=id, products=all_product, product=product, pay = pay, quote=quote)
        if pay:
            quote = 'Xóa thành công'
            untils.delete_product_by_id(pay)
            # return redirect('/admin/deleteview')

        return self.render('admin/delete.html', products=untils.get_all_product(), product=product, pay=pay, quote=quote)

    def is_accessible(self):
        return current_user.is_authenticated and current_user.user_role == UserRole.ADMIN




class ImportView(BaseView):
    @expose('/')
    def __index__(self):

        name = request.args.get('name')
        quantity = request.args.get('soluong')
        mota = request.args.get('mota')
        price = request.args.get('gia')
        avatar_path = 'https://cdn.tgdd.vn/Products/Images/42/235838/Galaxy-S22-Ultra-Burgundy-600x600.jpg'

        avatar = request.files.get('avatar')
        if avatar:
            res = cloudinary.uploader.upload(avatar)
            avatar_path = res['secure_url']

        if name:
            category = request.args.get('theloai')
            tacgia = request.args.get('tacgia')

            return self.render('admin/import.html', min=150,
                               quote=untils.add_product(name=name, category=category, author=tacgia, quantity=quantity,
                                                        price=price, mota=mota, avatar=avatar_path))
# note min = 150
        return self.render('admin/import.html', min=150)

    def is_accessible(self):
        return current_user.is_authenticated and (
                    current_user.user_role == UserRole.ADMIN or current_user.user_role == UserRole.IMPORTER)


class MyAdminIndex(AdminIndexView):
    @expose('/')
    def index(self):
        return self.render('admin/index.html', stats=untils.category_stats())


admin = Admin(app=app, name='QUẢN TRỊ BÁN HÀNG', template_mode='bootstrap4',
              index_view=MyAdminIndex())

# admin.add_view(ChiTiet(ChiTietNhapSach, db.session))
admin.add_view(ChiTietHoaDon(ReceiptDetail, db.session))
# admin.add_view(SachTacGiaView(SachTacGia, db.session))
admin.add_view(ProductView(Product, db.session))

admin.add_view(DeleteView(name='Delete'))
admin.add_view(ImportView(name='Import'))
admin.add_view(StatsView(name='Thống kê'))
# admin.add_view(ReceiptView(Receipt, db.session))
# admin.add_view(PayView(name='Payment'))
# admin.add_view(ChangeRuleView(Rule, db.session))
admin.add_view(LogoutView(name='Logout'))
