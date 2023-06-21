from flask import request, render_template, flash, redirect, jsonify
from flask_login import login_user

from server.dao import check_login, get_user_by_id, warn_user, send_notification
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


def notice_to_user():
    if request.method == 'POST':
        user_id = request.json.get('user_id')
        content = request.json.get('content')
        warning = request.json.get('warning')
        send_notification(user_id, content)
        if warning:
            warn_user(user_id)
        return jsonify({"status": 200, "msg": "success"})
