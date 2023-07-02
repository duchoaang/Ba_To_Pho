import hashlib
import time
from flask import request, url_for, render_template, jsonify, session, flash
from flask_login import login_user, current_user, logout_user
from sqlalchemy.exc import IntegrityError

from server import my_token, app, dao, login
from server.dao import get_existed_user, add_user, get_user_by_email, confirm_user, check_login, get_user_by_id, \
    add_user_form_google, update_user
from server.models import UserRole
from server.sendmail import send_email
from server.my_token import generate_confirmation_token


# -------------- "/user" ------------------

# "/register" ['POST']
def user_register():
    try:
        email = request.json.get('email')
        username = request.json.get('name')
        u = get_existed_user(username, email)
        if u:
            if u.email == email:
                msg = f"Email {email} đã được sử dụng. Vui lòng chọn email khác."
            else:
                msg = f'Username {username} đã được sử dụng. Vui lòng chọn username khác.'
            response_data = {
                'message': msg,
                'status': 404
            }
            return jsonify(response_data), 404

        fields = {'email': email, 'username': username}
        password = request.json.get('password')
        password = hashlib.md5(password.encode()).hexdigest()
        fields['password'] = password

        token = generate_confirmation_token(email)
        start_time = time.time()
        confirm_url = url_for('user_bp.confirm_email', token=token, _external=True)
        html = render_template('confirm.html', confirm_url=confirm_url)
        subject = "Vui lòng xác thực email"
        send_email(email, subject, html)
        end_time = time.time()
        elapsed_time = end_time - start_time

        msg = f"Đã gửi link xác nhận đến {email}."
        response_data = {
            'message': msg,
            'status': 200
        }
        key = app.config['USER_TEMP_KEY']
        session[key] = {
            "username": username,
            "password": password,
            "email": email,
            "is_confirm": False,
            "elapsed_time": elapsed_time,
        }
        return jsonify(response_data), 200
    except Exception as e:
        response_data = {
            'message': "Lỗi server",
            'status': 505
        }
        print(e)
        return jsonify(response_data), 505


# "/confirm/<token>" ['GET']
def confirm_email(token):
    key = app.config['USER_TEMP_KEY']

    if key not in session:
        response_data = {
            'message': "Không tìm thấy thông tin đăng ký",
            'status': 404
        }
        return jsonify(response_data), 404
    data = session[key]

    elapsed_time = data['elapsed_time']
    try:
        email = my_token.confirm_token(token, expiration=elapsed_time + 90)
    except:
        email = False
    if email is False:
        response_data = {
            'message': "Link xác thực đã hết hạn",
            'status': 404
        }
        return jsonify(response_data), 404

    mail = data['email']

    u = get_user_by_email(email)
    if u:
        response_data = {
            'message': "Tài khoản đã xác thực rồi",
            'status': 304
        }
        return jsonify(response_data), 304

    if email != mail:
        response_data = {
            'message': "Email xác nhận không trùng với thông tin đăng ký hiện tại",
            'status': 404
        }
        return jsonify(response_data), 404

    try:
        new_user = add_user(data)
    except IntegrityError as e:
        msg = ""
        if "username" in str(e):
            msg += "Username đã được sử dụng"
        elif "email" in str(e):
            if msg != "":
                msg += "\n"
            msg += "Email này đã đuợc xác nhận bởi tài khoản khác"
        response_data = {
            'message': msg,
            'status': 404
        }
        return jsonify(response_data), 404

    response_data = {
        'message': "Bạn đã xác thực tài khoản thành công!",
        'status': 200
    }

    data = session[key]
    data['is_confirm'] = True
    session[key] = data
    return jsonify(response_data), 200


def get_confirm_status():
    key = app.config['USER_TEMP_KEY']
    if key not in session:
        response_data = {
            'message': "Không tìm thấy thông tin đăng ký",
            'status': 404
        }
        return jsonify(response_data)
    data = session[key]

    if data['is_confirm']:
        response_data = {
            'message': "Xác thực thành công!",
            'status': 200
        }
        return jsonify(response_data)
    else:
        response_data = {
            'message': "Chưa xác thực",
            'status': 204
        }
        return jsonify(response_data)


# "/resend/confirm" ['GET']
def resend_confirmation():
    if current_user.is_authenticated:
        token = my_token.generate_confirmation_token(current_user.email)
        confirm_url = url_for('confirm_email', token=token, _external=True)
        html = render_template('confirm.html', confirm_url=confirm_url)
        subject = "Vui lòng xác thực email"
        send_email(current_user.email, subject, html)
        msg = f"Đã gửi link xác nhận đến {current_user.email}."
        response_data = {
            'message': msg,
            'status': 200
        }
        return jsonify(response_data), 200
    else:
        msg = f"Vui lòng đăng nhập."
        response_data = {
            'message': msg,
            'status': 404
        }
        return jsonify(response_data), 404


# "/login" ['POST']
def user_login():
    if request.method == 'POST':
        username = request.json.get('username')
        password = request.json.get('password')

        user = check_login(username=username, password=password)
        if user:
            login_user(user=user)
            response_data = {
                'message': "Success",
                'id': current_user.id,
                'name': current_user.name,
                'username': current_user.username,
                'avatar': current_user.avatar,
                'status': 200
            }
            return jsonify(response_data), 200
        else:
            response_data = {
                'message': "Failed",
                'status': 404
            }
            return jsonify(response_data), 404


def user_logout():
    data = request.form
    id = next(data.items())[0]
    if current_user.id == id:
        logout_user()
        return "success"
    else:
        return "logged out before"


def user_login_by_google():
    data = request.json
    email_verified = data.get('verified_email')
    fields = {'email': data.get('email'), 'name': data.get('name'), 'avatar': data.get('picture')}
    user = dao.get_user_by_email(fields['email'])

    # Tài khoản đã tồn tại
    if user:
        login_user(user=user)
        response_data = user.to_dict(fields=["id", "username", "name", "email", "avatar"])
        response_data['status'] = 200
        response_data['message'] = "success"
        return jsonify(response_data)

    # Tài khoản chưa tồn tại
    if email_verified:
        result = add_user_form_google(fields)
        # thêm thành công
        if result is not None:
            user = result
            login_user(user=user)
            response_data = user.to_dict(fields=["id", "username", "name", "email", "avatar"])
            response_data['status'] = 200
            response_data['message'] = "success"
            return jsonify(response_data)
        # thêm không thành công
        else:
            response_data = {'status': 404, 'message': "An error has occurred"}
            return jsonify(response_data)

    # Email chưa được xác thực
    else:
        response_data = {'status': 404, 'message': "Email is not verified"}
        return jsonify(response_data)


def user_update(id):
    data = request.json.get('key')
    fields = {'name': data.get('fullName'), 'bio': data.get('bio'), 'social_media': data.get('socialMedia'),
              'address': data.get('address'), 'phone_number': data.get('phoneNumber')}
    return jsonify(update_user(id, fields))


