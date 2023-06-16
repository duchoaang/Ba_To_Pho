import hashlib


def hash_text(plain_text):
    return hashlib.md5(plain_text.encode()).hexdigest()
