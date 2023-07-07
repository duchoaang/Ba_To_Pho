import hashlib
import pythoncom
import win32com.client
from pdf2image import convert_from_path
from docx2pdf import convert

import os
import unicodedata


def hash_text(plain_text):
    return hashlib.md5(plain_text.encode()).hexdigest()


def strip_accents(s):
    return ''.join(c for c in unicodedata.normalize('NFD', s) if unicodedata.category(c) != 'Mn')


# Convert DOCX to PDF
# file_name_without_extension: tên file ví dụ: 123_tailieu (0 có extension)
# path: đường dẫn của file, vì lưu ngay tại thư mục của project nên 123_tailieu.docx đã là tên đường dẫn.
def convert_docx_to_pdf(file_name_without_extension, path):
    pythoncom.CoInitialize()
    pdf_file = f"{file_name_without_extension}.pdf"
    convert(path, os.path.abspath(pdf_file))

    # xóa file docx được lưu tại thư mục sau khi convert xong
    os.remove(path)

    # trả về đường dẫn của file pdf đã được chuyển đổi từ file docx
    return pdf_file


# Convert PPTX to PDF
def convert_pptx_to_pdf(path):
    pythoncom.CoInitialize()
    pptx_file = os.path.abspath(path)
    pdf_file = os.path.splitext(pptx_file)[0]
    application = win32com.client.Dispatch("PowerPoint.Application")
    presentation = application.Presentations.Open(pptx_file)
    presentation.SaveAs(pdf_file, 32)
    application.Quit()
    return f"{pdf_file}.pdf"


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
