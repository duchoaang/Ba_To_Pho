from pdf2docx import parse
from docx2pdf import convert

def pdf_to_docx(pdf_file_path: str, docx_file_path: str) -> None:
    parse(pdf_file_path, docx_file_path)

def docx_to_pdf(docx_file_path: str, pdf_file_path: str) -> None:
    convert(docx_file_path, pdf_file_path)

def pptx_to_pdf(pptx_file_path: str, pdf_file_path: str) -> None:
    pass

