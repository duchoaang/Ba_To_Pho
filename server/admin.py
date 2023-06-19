import hashlib

from flask import redirect
from flask_admin import Admin, AdminIndexView, expose, BaseView
from flask_admin.contrib.sqla import ModelView
from flask_admin.contrib.sqla.fields import InlineModelFormList
from flask_admin.form import rules
from flask_admin.menu import MenuLink
from flask_admin.model import InlineFormAdmin
from flask_login import current_user, logout_user
from markupsafe import Markup
from wtforms import HiddenField

from server.dao import get_user_by_id
from server.models import UserRole, Document, User, Category, Rule
from server import app, db


class AdminModelView(ModelView):
    def is_accessible(self):
        return current_user.is_authenticated and current_user.user_role == UserRole.ADMIN


class LogoutView(BaseView):
    @expose('/')
    def index(self):
        logout_user()
        return redirect('/admin')

    def is_accessible(self):
        return current_user.is_authenticated and current_user.user_role == UserRole.ADMIN


class NotificationView(AdminModelView):
    can_create = False
    can_edit = False
    can_export = False
    can_view_details = False
    can_delete = False
    column_filters = ['id', 'username', 'name']
    column_list = ['username', 'name', 'notification_content', 'warning', 'send']
    column_formatters = {
        'notification_content': lambda v, c, m, p: Markup('<div class="form-group row">\
              <div class="w-100">\
                    <label for="content_{}" class="d-none">content</label>\
                    <textarea class="form-control bg-white border border-secondary border-1" id="content_{}" rows="3"></textarea>\
              </div>\
            </div>'.format(m.id, m.id)),
        'warning': lambda v, c, m, p: Markup('<div class="form-check d-flex justify-content-center w-100">\
                <label for="warning_{}" class="d-none">content</label>\
                <input class="form-check-input" id="warning_{}" type="checkbox">\
            </div>'.format(m.id, m.id)),
        'send': lambda v, c, m, p: Markup('<div class="d-flex justify-content-center w-100">\
                    <button type="button" data-id="{}" id="{}" class="btn btn-primary btn-send-notification">Gửi</button>\
                </div>'.format(m.id, m.id)),
    }


class UserModelView(AdminModelView):
    column_list = ['username', 'name', 'phone_number', 'gender', 'dob', 'gem', 'is_active', 'is_confirm']
    column_formatters = dict(gender=lambda v, c, m, p: 'Nữ' if v else 'Nam')
    column_formatters = dict(dob=lambda v, c, m, p: m.dob.strftime('%d-%m-%Y') if m.dob else '')
    form_widget_args = {
        'password': {
            'type': 'password'
        },
        'password2': {
            'type': 'password'
        }
    }
    can_create = True
    can_edit = True
    can_export = True
    can_view_details = True
    column_filters = ['id', 'username', 'name']

    form_extra_fields = {
        'old_password': HiddenField(),
        'old_password2': HiddenField()
    }

    def on_form_prefill(self, form, id):
        form.old_password.data = form.password.data
        form.old_password2.data = form.password2.data

    def on_model_change(self, form, model, is_created):
        if not is_created:
            if form.password.data != form.old_password.data:
                model.password = hashlib.md5(form.password.data.encode()).hexdigest()
            if form.password2.data != form.old_password2.data:
                model.password2 = hashlib.md5(form.password2.data.encode()).hexdigest()


class DocumentModelView(AdminModelView):
    can_create = True
    can_edit = True
    can_export = True
    can_view_details = True
    column_filters = ['title', 'owner', 'content', 'view_count', 'gem_cost', 'discount', 'status', 'user.username', 'categories',
                      'keywords']
    column_list = ['title', 'owner', 'content', 'view_count', 'gem_cost', 'discount', 'status', 'user', 'categories',
                   'keywords']


class RuleModelView(AdminModelView):
    can_create = True
    can_edit = True
    can_view_details = True
    column_filters = ['name']


class CategoryModelView(AdminModelView):
    can_create = True
    can_edit = True
    can_export = True
    can_view_details = True
    column_filters = ["name", "category_parent", "category_children"]
    form_columns = ["name", "category_parent", "category_children"]


admin = Admin(app=app, name='batopho', template_mode='bootstrap4')
admin.add_view(UserModelView(User, db.session))
admin.add_view(DocumentModelView(Document, db.session))
admin.add_view(RuleModelView(Rule, db.session))
admin.add_view(CategoryModelView(Category, db.session))
admin.add_view(NotificationView(User, db.session, name="Notification", endpoint="notification"))
admin.add_view(LogoutView(name='Logout'))
