import math
import datetime
import os

from flask import render_template, request, redirect, session, jsonify, url_for, flash
from flask_login import login_required, login_user

from saleapp import app, utils, dao, sendmail, my_token, login
from saleapp.dao import *
from saleapp.models import UserRole, Status, User
from saleapp.sendmail import send_email
# from flask_restful import Resource, Api

# from flask_login import login_user, logout_user, login_required, current_user
import hashlib
import json


@login.user_loader
def user_load(user_id):
    return dao.get_user_by_id(user_id=user_id)


@app.route("/api/documents")
def api_documents():
    documents = get_documents(status=Status.WAITING)
    documents_list = [doc.to_dict(fields=["id", "title", "owner", "img", "view_count", "captcha", "status"]) for doc in
                      documents]
    return jsonify(documents_list)


@app.route("/register")
def show_register():
    return render_template('register.html')


@app.route("/register", methods=['POST'])
def register():
    email = request.form.get('email')
    u = get_user_by_email(request.form.get('email'))
    if u:
        msg = f"Email {email} đã được sử dụng. Vui lòng chọn email khác."
        flash(msg, 'danger')
        return redirect(url_for('show_register'))

    fields = {}
    fields['email'] = email
    fields['username'] = request.form.get('username')
    password = request.form.get('password')
    password = hashlib.md5(password.encode()).hexdigest()
    fields['password'] = password
    password2 = request.form.get('password2')
    password2 = hashlib.md5(password2.encode()).hexdigest()
    fields['password2'] = password2
    fields['name'] = request.form.get('name')
    fields['phone_number'] = request.form.get('phone-number')
    fields['gender'] = request.form.get('gender')
    fields['dob'] = request.form.get('dob')
    user = dao.add_user(fields)
    login_user(user=user)
    token = my_token.generate_confirmation_token(email)

    confirm_url = url_for('confirm_email', token=token, _external=True)
    html = render_template('confirm.html', confirm_url=confirm_url)
    subject = "Vui lòng xác thực email"
    send_email(email, subject, html)

    msg = f"Link xác thực đã gửi đến {email}. Vui lòng kiểm tra để xác thực tài khoản"
    flash(msg, 'info')
    return redirect(url_for('show_register'))


@app.route('/confirm/<token>')
@login_required
def confirm_email(token):
    try:
        email = my_token.confirm_token(token)
    except:
        flash('Link xác nhận đã hết hạn.', 'danger')
    user = dao.get_user_by_email(email)
    if user.is_confirm:
        flash('Tài khoản đã được xác thực trước đây.', 'success')
    else:
        dao.confirm_user(user)
        flash('Bạn đã xác thực thành công!', 'success')
    return redirect(url_for('show_register'))


@app.route('/resend')
@login_required
def resend_confirmation():
    token = my_token.generate_confirmation_token(current_user.email)
    confirm_url = url_for('confirm_email', token=token, _external=True)
    html = render_template('confirm.html', confirm_url=confirm_url)
    subject = "Vui lòng xác thực email"
    send_email(current_user.email, subject, html)
    msg = f"Link xác thực đã gửi đến {current_user.email}. Vui lòng kiểm tra để xác thực tài khoản"
    flash(msg, 'info')
    return redirect(url_for('show_register'))


@app.route('/user/login')
def show_login():
    return render_template("login.html")


@app.route('/user/login', methods=['POST'])
def user_login():
    if request.method == 'POST':
        username = request.form.get('username')
        password = request.form.get('password')

        user = dao.check_login(username=username, password=password)
        if user:
            login_user(user=user)
            msg = "Đăng nhập thành công"
            flash(msg, 'info')
            return redirect(url_for("show_login"))
        else:
            msg = "Sai tên đăng nhập hoặc mật khẩu"
    flash(msg, 'danger')
    return redirect(url_for("show_login"))


if __name__ == '__main__':
    app.run(debug=True)
