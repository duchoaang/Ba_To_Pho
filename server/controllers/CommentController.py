from flask import jsonify, request

from server import dao

def add_comment():
    content = request.json.get('content')
    user_id = request.json.get('user_id')
    document_id = request.json.get('document_id')
    dao.add_comment(content, user_id, document_id)
    return jsonify({"message": 'Successfully'})


def remove_comment():
    comment_id = request.json.get('comment_id')
    dao.del_comment(comment_id)
    return jsonify({"status": 200})
