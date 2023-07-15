import requests
from flask import jsonify, request
from flask_login import current_user

from server import dao


def rate():
    document_id = request.json.get('document_id')
    number_star = request.json.get('number_star')
    user_id = request.json.get('user_id')
    dao.rate_document(document_id, number_star, user_id)
    return jsonify({"status": 200})


def favour():
    document_id = request.json.get('document_id')
    user_id = request.json.get('user_id')
    dao.favour(document_id, user_id)
    return jsonify({"status": 200})


def get_user_info(id):
    user = dao.get_user_by_id(id)
    user_info = user.to_dict(
        fields=["id", "username", "name", "email", "phone_number", "gender", "dob", "avatar", "bio", "social_media",
                "address", "gem", "warn_time", "user_docs", "wait_docs", "result_docs", "fav_docs"])
    return jsonify(user_info)


def get_current_user():
    if current_user.is_authenticated:
        data = current_user.to_dict(fields=["id", "username", "name", "gender", "avatar", "is_active", "bio", "gem"])
        data["is_authenticated"] = True
        return jsonify(data)
    return jsonify({"is_authenticated": False})


def verify_recaptcha():
    token = request.json.get("token")

    url = "https://www.google.com/recaptcha/api/siteverify"
    params = {
        "secret": "6Lc6fCMnAAAAADED65lZ8s3XFnZ64qSzwx5_3Olt",
        "response": token
    }

    response = requests.post(url, params=params)
    result = response.json()

    if result["success"]:
        return jsonify({"success": True})
    else:
        return jsonify({"success": False, "message": "Xác thực reCAPTCHA không thành công."})


def save_keywords():
    keywords = request.json.get('keywords')
    user_id = request.json.get('user_id')

    response, status_code = dao.save_keyword_search_by_user(user_id, keywords.strip().lower())
    return jsonify(response), status_code
