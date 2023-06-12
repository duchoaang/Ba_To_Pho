import hashlib

from flask import request, url_for, render_template, jsonify
from flask_login import login_user, current_user

from server import my_token
from server.dao import get_existed_user, add_user, get_user_by_email, confirm_user, check_login
from server.sendmail import send_email
from server.my_token import generate_confirmation_token


# -------------- "/user" ------------------


# "/register" ['POST']
def user_register():
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

    user = add_user(fields)
    login_user(user=user)

    token = generate_confirmation_token(email)
    confirm_url = url_for('user_bp.confirm_email', token=token, _external=True)
    html = render_template('confirm.html', confirm_url=confirm_url)
    subject = "Vui lòng xác thực email"
    send_email(email, subject, html)

    msg = f"Đã gửi link xác nhận đến {email}."
    response_data = {
        'message': msg,
        'status': 200
    }
    return jsonify(response_data), 200


# "/confirm/<token>" ['GET']
def confirm_email(token):
    try:
        email = my_token.confirm_token(token)
    except:
        response_data = {
            'message': "Link xác thực đã hết hạn",
            'status': 404
        }
        return jsonify(response_data), 404
    user = get_user_by_email(email)
    if user.is_confirm:
        response_data = {
            'message': "Tài khoản đã được xác thực!",
            'status': 304
        }
        return jsonify(response_data), 304
    confirm_user(user)
    response_data = {
        'message': "Bạn đã xác thực tài khoản thành công!",
        'status': 304
    }
    return jsonify(response_data), 200


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
                'status': 200
            }
            return jsonify(response_data), 200
        else:
            response_data = {
                'message': "Failed",
                'status': 404
            }
            return jsonify(response_data), 404


def user():
    return jsonify({'ok': 'ok'})
