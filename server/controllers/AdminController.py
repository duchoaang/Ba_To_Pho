from datetime import datetime

from flask import request, render_template, flash, redirect, jsonify
from flask_login import login_user

from server import dao
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


def get_stat_downloads():
    if request.method == 'POST':
        period = request.json.get('period')
        start_time = request.json.get('start_time')
        end_time = request.json.get('end_time')
        download_datas = dao.get_download_stats(start_time, end_time, period)
        if download_datas is None:
            return jsonify({"status": 400})

        download_labels = [data.label for data in download_datas]
        download_values = [data.downloads for data in download_datas]

        download_cate_datas = dao.get_download_stats_by_cate(start_time, end_time)
        if download_cate_datas is None:
            return jsonify({"status": 400})
        download_cate_labels = [data.cate for data in download_cate_datas]
        download_cate_values = [data.downloads for data in download_cate_datas]
        return jsonify({"status": 200, "download_labels": download_labels, "download_values": download_values,
                        "download_cate_labels": download_cate_labels, "download_cate_values": download_cate_values})
    else:
        return jsonify({"status": 404})


def get_stat_uploads():
    if request.method == 'POST':
        period = request.json.get('period')
        start_time = request.json.get('start_time')
        end_time = request.json.get('end_time')
        upload_datas = dao.get_upload_stats(start_time, end_time, period)
        if upload_datas is None:
            return jsonify({"status": 400})

        upload_labels = [data.label for data in upload_datas]
        upload_values = [data.uploads for data in upload_datas]

        upload_cate_datas = dao.get_upload_stats_by_cate(start_time, end_time)
        if upload_cate_datas is None:
            return jsonify({"status": 400})
        upload_cate_labels = [data.cate for data in upload_cate_datas]
        upload_cate_values = [data.uploads for data in upload_cate_datas]
        return jsonify({"status": 200, "upload_labels": upload_labels, "upload_values": upload_values,
                        "upload_cate_labels": upload_cate_labels, "upload_cate_values": upload_cate_values})
    else:
        return jsonify({"status": 404})
