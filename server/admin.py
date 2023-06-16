import hashlib

from flask_admin import Admin
from flask_admin.contrib.sqla import ModelView
from flask_admin.contrib.sqla.fields import InlineModelFormList
from flask_admin.form import rules
from flask_admin.model import InlineFormAdmin
from wtforms import HiddenField

from server.dao import get_user_by_id
from server.models import UserRole, Document, User, Category, Rule
from server import app, db


# class AdminModelView(ModelView):
#     def is_accessible(self):
#         return current_user.is_authenticated and current_user.user_role == UserRole.ADMIN


class UserModelView(ModelView):
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


class DocumentModelView(ModelView):
    can_create = True
    can_edit = True
    can_export = True
    can_view_details = True
    column_list = ['title', 'owner', 'content', 'view_count', 'gem_cost', 'discount', 'status', 'user', 'categories', 'keywords']


class RuleModelView(ModelView):
    can_create = True
    can_edit = True
    can_view_details = True


class CategoryModelView(ModelView):
    can_create = True
    can_edit = True
    can_export = True
    can_view_details = True
    form_columns = ["name", "category_parent", "category_children"]


admin = Admin(app=app, name='batopho', template_mode='bootstrap4')
admin.add_view(UserModelView(User, db.session))
admin.add_view(DocumentModelView(Document, db.session))
admin.add_view(RuleModelView(Rule, db.session))
admin.add_view(CategoryModelView(Category, db.session))

