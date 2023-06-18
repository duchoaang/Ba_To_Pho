from flask import request, render_template, flash, redirect
from flask_login import login_user

from server.dao import check_login
from server.models import UserRole


def admin_login():
    if request.method == 'POST':
        username = request.form.get('username')
        password = request.form.get('password')

        user = check_login(username=username, password=password, user_role=UserRole.ADMIN)
        if user:
            login_user(user=user)
            return redirect('/admin')
        else:
            flash('Username hoặc password không đúng!', 'error')
            return redirect('/admin')
