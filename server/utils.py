import hashlib
import os

import unicodedata
import fitz
from pdf2image import convert_from_path

from server import app


# import aspose.slides as slides
# import aspose.words as aw


def hash_text(plain_text):
    return hashlib.md5(plain_text.encode()).hexdigest()


def strip_accents(s):
    return ''.join(c for c in unicodedata.normalize('NFD', s) if unicodedata.category(c) != 'Mn')


# Save file
def save_file(file, file_name):
    file.seek(0)
    file.save(file_name)


# Convert PPTX to PDF
# def convert_pptx_to_pdf(file, name):
#     pres = slides.Presentation(file)
#     # Save presentation as PDF
#     pdf_file = f"{name}.pdf"
#     pres.save(pdf_file, slides.export.SaveFormat.PDF)
#     os.remove(file)
#     return pdf_file
#
#
# # Convert DOCX to PDF
# def convert_docx_to_pdf(file, name):
#     doc = aw.Document(file)
#     pdf_file = f"{name}.pdf"
#     doc.save(pdf_file)
#     return pdf_file


# Convert PDF to PNG
def convert_pdf_to_png(file_name, temp_pdf_path):
    # dùng file lưu tạm để lấy trang đầu tiên thành image
    doc = fitz.open(temp_pdf_path)
    image_file = f'{file_name}.png'

    # Chuyển đổi trang đầu tiên của tệp PDF sang hình ảnh PNG
    page = doc[0]
    pix = page.get_pixmap()
    pix.save(image_file)
    return image_file

