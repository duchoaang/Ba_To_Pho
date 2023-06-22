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
