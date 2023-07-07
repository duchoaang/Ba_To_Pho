import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './Upload.module.scss';
import Button from '@mui/material/Button';
import ClearIcon from '@mui/icons-material/Clear';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

import get from '~/utils/request/get';
import post from '~/utils/request/post';

const cx = classNames.bind(styles);

const InputGroup = ({ title, children, info }) => {
    return (
        <div className={cx('input-group')}>
            <label htmlFor={children.props ? children.props.id ?? '' : ''}>
                <b className="text-warning">
                    {title}{' '}
                    <span className="text-danger">{children.props ? (children.props.required ? '*' : '') : ''}</span>
                </b>
            </label>
            <div className={cx('input-group-field')}>{children}</div>
            {info ? <span className={cx('input-group-info')}>{info}</span> : null}
        </div>
    );
};

const INIT_FORM_DATA = {
    title: '',
    categories: [],
    description: '',
    author: '',
    keywords: [],
    file: null,
    image: null,
};

const Upload = () => {
    const [formData, setFormData] = useState(INIT_FORM_DATA);
    const [keywordTmp, setKeywordTmp] = useState('');
    const [categories, setCategories] = useState([]);
    const [disableButton, setDisableButton] = useState(false);
    const handleFileChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.type === 'file' ? e.target.files[0] : e.target.value });
    };

    useEffect(() => {
        get('api/categories').then((data) => setCategories(data));
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        setDisableButton(true);

        const data = new FormData();
        Object.entries(formData).map(([key, value] = entry) => {
            switch (key) {
                case 'file':
                case 'image':
                    data.append(key, value, value.name);
                    break;
                case 'categories':
                    data.append(
                        key,
                        value.map((i) => categories[i].id),
                    );
                    break;
                default:
                    data.append(key, value);
                    break;
            }
        });

        post('documents/upload', data).then((res) => {
            if (res.status === '200') {
                alert('Upload tài liệu thành công');
                setFormData(INIT_FORM_DATA);
                setDisableButton(false);
            }
        });
    };

    return (
        <form className={cx('wrapper')} method="POST" onSubmit={handleSubmit}>
            <section className="border border-warning bg-warning">
                <InputGroup title="Tên tài liệu" info="Quyết định 80% SEO">
                    <input
                        type="text"
                        name="title"
                        id="title"
                        className="form-control"
                        placeholder="Tối thiểu 10 kí tự"
                        minLength={10}
                        value={formData.title}
                        onChange={handleFileChange}
                        required
                    />
                </InputGroup>
                <InputGroup title="Danh mục" info="">
                    {formData.categories.map((c, index) => (
                        <Button
                            key={index}
                            size="small"
                            variant="outlined"
                            endIcon={<ClearIcon />}
                            onClick={() => {
                                setFormData({
                                    ...formData,
                                    categories: (() => {
                                        formData.categories.splice(index, 1);
                                        return formData.categories;
                                    })(),
                                });
                            }}
                        >
                            {categories[c].name}
                        </Button>
                    ))}
                    <select
                        name="categories"
                        id="categories"
                        className="form-select"
                        onChange={(e) => {
                            setFormData({
                                ...formData,
                                categories: (() => {
                                    formData.categories.push(e.target.value - 0);
                                    return formData.categories;
                                })(),
                            });
                        }}
                        required
                    >
                        <option hidden>--Chọn danh mục--</option>
                        {categories.map((c, index) =>
                            formData.categories.includes(index - 0) ? null : (
                                <option key={index} value={index}>
                                    {c.name}
                                </option>
                            ),
                        )}
                    </select>
                </InputGroup>
                <InputGroup title="Mô tả ngắn" info="Tối ưu từ 70 - 200 kí tự">
                    <textarea
                        name="description"
                        className="form-control"
                        placeholder="Tối thiểu 70 kí tự"
                        maxLength={200}
                        value={formData.description}
                        onChange={handleFileChange}
                        required
                    />
                </InputGroup>
                <InputGroup title="Tác giả" info="">
                    <input
                        type="text"
                        name="author"
                        className="form-control"
                        placeholder="Tên tác giả gốc của tài liệu"
                        value={formData.author}
                        onChange={handleFileChange}
                        required
                    />
                </InputGroup>
                <InputGroup title="Từ khóa" info="Tối đa 6 từ khóa">
                    {formData.keywords.map((k, index) => (
                        <Button
                            key={index}
                            size="small"
                            variant="outlined"
                            endIcon={<ClearIcon />}
                            onClick={() => {
                                setFormData({
                                    ...formData,
                                    keywords: (() => {
                                        formData.keywords.splice(index, 1);
                                        return formData.keywords;
                                    })(),
                                });
                            }}
                        >
                            {k}
                        </Button>
                    ))}
                    <div className="d-flex">
                        <input
                            type="text"
                            name="keywords"
                            className="form-control"
                            placeholder="Tối thiểu 3 từ khóa"
                            value={keywordTmp}
                            onChange={(e) => {
                                setKeywordTmp(e.target.value);
                            }}
                        />
                        <Button
                            className="ms-2"
                            variant="contained"
                            onClick={() => {
                                if (formData.keywords.length < 6)
                                    setFormData({
                                        ...formData,
                                        keywords: (() => {
                                            formData.keywords.push(keywordTmp.trim(' '));
                                            return formData.keywords;
                                        })(),
                                    });
                                setKeywordTmp('');
                            }}
                        >
                            Thêm
                        </Button>
                    </div>
                </InputGroup>
                <InputGroup title="File tài liệu" info="">
                    <input
                        name="file"
                        id="file"
                        type="file"
                        accept="application/pdf, .pdf, application/msword, .doc, .docx, application/vnd.ms-powerpoint, .ppt, .pptx"
                        onChange={handleFileChange}
                        required
                    />
                </InputGroup>
                <InputGroup
                    title="Hình ảnh về tài liệu"
                    info="Hoàn thành đầy đủ thông tin giúp code của bạn được nhiều người biết đến và có thứ hạng cao trên kết quả tìm kiếm"
                >
                    <label htmlFor="image" className={cx('label-inp-img')}>
                        <span className="material-icons">add_circle</span>
                        Thêm ảnh...
                    </label>
                    <input
                        name="image"
                        id="image"
                        type="file"
                        accept="image/*"
                        hidden
                        onChange={handleFileChange}
                        required
                    />
                </InputGroup>
            </section>
            <section className="border border-primary-subtle bg-info">
                <div className="d-flex align-items-center">
                    <span className="material-icons text-warning">lock</span>
                    <b className="ms-2 text-primary">Chính sách bảo mật thông tin</b>
                </div>
                <hr className="text-primary" />
                <p>
                    Chọn một tên người dùng <b>ẩn danh</b>
                </p>
                <input type="text" name="anonymous" className="form-control" />
            </section>
            <section className="border border-danger bg-danger text-danger d-flex">
                <span className="material-icons fw-bolder">priority_high</span>
                <p className="mb-0">
                    Vì lý do bảo mật, chúng tôi thật sự khuyên bạn nên chọn tên người dùng khác với địa chỉ email của
                    bạn (abc***@gmail.com)
                </p>
            </section>
            <section className="border border-warning bg-warning">
                <input name="confirm" id="confirm" type="checkbox" />
                <label htmlFor="confirm">Tôi đã đọc và đồng ý với các điều khoản của BaToPho</label>
                <br />
                <Button
                    disabled={disableButton}
                    variant="contained"
                    type="submit"
                    color="warning"
                    startIcon={<CloudUploadIcon />}
                >
                    Tải lên ngay
                </Button>
            </section>
        </form>
    );
};

export default Upload;
