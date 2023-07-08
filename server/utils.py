import hashlib
from pdf2image import convert_from_path

import os
import unicodedata


def hash_text(plain_text):
    return hashlib.md5(plain_text.encode()).hexdigest()


def strip_accents(s):
    return ''.join(c for c in unicodedata.normalize('NFD', s) if unicodedata.category(c) != 'Mn')


# SAVE FILE (FileStorage) vào thư mục của project
# file: file kiểu FileStorage nhận từ frontend
# file_name: là tên file có extension đóng vai trò là path
def save_file(file, file_name):
    file.seek(0)
    # hàm save cần truyền vào path nơi lưu file, ở đây truyền file_name sẽ lưu vào thư mục của project
    file.save(file_name)


# Convert PDF to PNG
def convert_pdf_to_png(file_name, temp_pdf_path):
    # dùng file lưu tạm để lấy trang đầu tiên thành image
    file = os.path.abspath(r"poppler-23.05.0\Library\bin")
    try:
        images = convert_from_path(temp_pdf_path, poppler_path=file, first_page=1, last_page=1)
    except Exception as e:
        print("Lỗi: " + str(e))
    image_path = f'{file_name}.png'
    images[0].save(image_path, "PNG")
    # Xóa file lưu tạm
    os.remove(temp_pdf_path)
    return image_path
