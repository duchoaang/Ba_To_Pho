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
            return jsonify(response_data)

        fields = {'email': email, 'username': username}
        password = request.json.get('password')
        password = hashlib.md5(password.encode()).hexdigest()
        fields['password'] = password

        add_user(fields)

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
        return jsonify(response_data)
    except Exception as e:
        response_data = {
            'message': "Lỗi server",
            'status': 505
        }
        print(e)
        return jsonify(response_data)


# "/confirm/<token>" ['GET']
def confirm_email(token):
    try:
        email = my_token.confirm_token(token, expiration=1800)
    except IntegrityError:
        email = False

    if email is False:
        return render_template("confirm_result.html", message="Link xác thực đã hết hạn")

    u = get_user_by_email(email)
    if u:
        if not u.is_confirm:
            confirm_user(u)
            return render_template("confirm_result.html", message="Xác thực thành công")
        else:
            return render_template("confirm_result.html", message="Tài khoản đã được xác thực trước đây")
    else:
        return render_template("confirm_result.html", message="Không tìm thấy thông tin đăng ký")


# def get_confirm_status():
#     key = app.config['USER_TEMP_KEY']
#     if key not in session:
#         response_data = {
#             'message': "Không tìm thấy thông tin đăng ký",
#             'status': 404
#         }
#         return jsonify(response_data)
#     data = session[key]
#
#     if data['is_confirm']:
#         response_data = {
#             'message': "Xác thực thành công!",
#             'status': 200
#         }
#         return jsonify(response_data)
#     else:
#         response_data = {
#             'message': "Chưa xác thực",
#             'status': 204
#         }
#         return jsonify(response_data)


# "/resend-confirm" ['POST']
def resend_confirmation():
    user_id = request.json.get('user_id')
    if user_id is None:
        response_data = {
            'message': "userId không hợp lệ",
            'status': 404
        }
        return jsonify(response_data), 404

    user = dao.get_user_by_id(user_id)
    email = user.email

    token = my_token.generate_confirmation_token(email)
    confirm_url = url_for('confirm_email', token=token, _external=True)
    html = render_template('confirm.html', confirm_url=confirm_url)
    subject = "Vui lòng xác thực email"
    send_email(email, subject, html)
    msg = f"Đã gửi link xác nhận đến {email}."
    response_data = {
        'message': msg,
        'status': 200
    }
    return jsonify(response_data), 200


# "/login" ['POST']
def user_login():
    if request.method == 'POST':
        username = request.json.get('username')
        password = request.json.get('password')

        user = check_login(username=username, password=password)
        if user:
            if user.is_active is False:
                response_data = {
                    'message': "Tài khoản đã bị vô hiệu hóa",
                    'status': 403
                }
                return jsonify(response_data), 403
            login_user(user=user)
            response_data = {
                'message': "Success",
                'id': current_user.id,
                'name': current_user.name,
                'username': current_user.username,
                'avatar': current_user.avatar,
                'is_confirm': current_user.is_confirm,
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
    logout_user()
    return "success"


def user_login_by_google():
    data = request.json
    if not data:
        response_data = {'status': 404, 'message': "Request is empty"}
        return jsonify(response_data)
    email_verified = data.get('verified_email')
    fields = {'email': data.get('email'), 'name': data.get('name'), 'avatar': data.get('picture')}
    user = dao.get_user_by_email(fields['email'])

    # Tài khoản đã tồn tại
    if user:
        if user.is_active is False:
            response_data = {
                'message': "Tài khoản đã bị vô hiệu hóa",
                'status': 403
            }
            return jsonify(response_data), 403
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
