from flask import jsonify, request
from flask_login import current_user

from server import dao


def add_comment():
    if current_user.is_authenticated:
        content = request.json.get('content')
        user_id = request.json.get('user_id')
        document_id = request.json.get('document_id')
        dao.add_comment(content, user_id, document_id)
        return jsonify({"status": 201, "message": 'Successfully'})
    else:
        return jsonify({"status": 403, "msg": 'chưa đăng nhập'})


def remove_comment():
    if current_user.is_authenticated:
        comment_id = request.json.get('comment_id')
        if dao.del_comment(comment_id, current_user.id):
            return jsonify({"status": 200})
        else:
            return jsonify(
                {"status": 403, "msg": 'Bình luận không thuộc quyền sở hữu của user ' + current_user.username})
    else:
        return jsonify({"status": 403, "msg": 'chưa đăng nhập'})
