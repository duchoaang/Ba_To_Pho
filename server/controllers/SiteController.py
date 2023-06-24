import requests
from flask import jsonify

from server import dao


def rate():
    document_id = requests.json.get('document_id')
    number_star = requests.json.get('number_star')
    user_id = requests.json.get('user_id')
    dao.rate_document(document_id, number_star, user_id)
    return jsonify({"status": 200})


def favour():
    document_id = requests.json.get('document_id')
    user_id = requests.json.get('user_id')
    dao.favour(document_id, user_id)
    return jsonify({"status": 200})


def get_user_info(id):
    user = dao.get_user_by_id(id)
    user_info = user.to_dict(
        fields=["id", "username", "name", "email", "phone_number", "gender", "dob", "avatar", "bio", "social_media",
                "address", "gem", "warn_time"])
    return jsonify(user_info)
