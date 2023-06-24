from flask import jsonify, request

from server import app
from server.dao import get_documents, get_categories, get_document_types, get_keywords, get_comment_by_doc, get_users, \
    get_document_by_id
from server.models import Status


# -------------- "/api" ------------------


# "/documents" ['GET']
def api_documents():
    status = request.args.get('status')
    documents = get_documents(status=status)
    documents_list = [doc.to_dict(
        fields=["id", "title", "owner", "content", "img", "view_count", "captcha", "status", "gem_cost", "discount",
                "username", "cloudinary_image_secure_url", "cloud_link", "img_cloud_link", "file_link_download",
                "img_link_download", "cloudinary_secure_url"
                                     "document_type_id", "document_type", "keywords",
                "categories", "average_rate", "num_rate"]) for doc
        in
        documents]

    return jsonify(documents_list)


def api_document_by_id(id):
    doc = get_document_by_id(id)
    doc_info = doc.to_dict(
        fields=["id", "title", "owner", "content", "img", "view_count", "captcha", "status", "gem_cost", "discount",
                "username", "cloudinary_image_secure_url", "cloud_link", "img_cloud_link", "file_link_download",
                "img_link_download", "cloudinary_secure_url"
                                     "document_type_id", "document_type", "keywords",
                "categories", "average_rate", "num_rate"])

    return jsonify(doc_info)



# "/categories" ['GET']
def api_categories():
    categories = get_categories()
    categories_list = [cate.to_dict(fields=["id", "name", "category_parent_id"]) for cate in categories]
    return jsonify(categories_list)


def api_document_types():
    types = get_document_types()
    type_list = [t.to_dict(fields=["id", "name"]) for t in types]
    return jsonify(type_list)


def api_keywords():
    keywords = get_keywords()
    kw_list = [k.to_dict(fields=["id", "name"]) for k in keywords]
    return jsonify(kw_list)


def api_comments(document_id):
    comments = get_comment_by_doc(document_id)
    comment_list = [c.to_dict(fields=["id", "content", "user.username"]) for c in comments]
    print(comment_list)
    return jsonify(comment_list)


def api_users():
    users = get_users()
    user_list = [u.to_dict(
        fields=["id", "username", "name", "email", "phone_number", "gender", "dob", "avatar", "bio", "social_media",
                "address", "gem", "warn_time"]) for u in users]
    return jsonify(user_list)

# if __name__ == '__main__':
#     with app.app_context():
#         api_comments("08cadefc-e544-46fe-92df-3eeb414ac7a1")
