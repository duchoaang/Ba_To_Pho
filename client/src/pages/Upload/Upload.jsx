import classNames from 'classnames/bind';
import styles from './Upload.module.scss';

import Button from '@/Button';

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

const Upload = () => {
    return (
        <form className={cx('wrapper')} method="POST" action="/upload/post">
            <section className="border border-warning bg-warning">
                <InputGroup title="Tiêu đề" info="Quyết định 80% SEO">
                    <input
                        type="text"
                        name="title"
                        id="title"
                        className="form-control"
                        placeholder="Tối thiểu 20 kí tự"
                        minLength={20}
                        required
                    />
                </InputGroup>
                <InputGroup title="Danh mục" info="">
                    <select name="category" id="category" className="form-select" required>
                        <option hidden>--Chọn danh mục--</option>
                    </select>
                </InputGroup>
                <InputGroup title="Mô tả ngắn" info="Tối ưu từ 70 - 200 kí tự">
                    <textarea
                        name="description"
                        className="form-control"
                        placeholder="Tối thiểu 70 kí tự"
                        minLength={70}
                        maxLength={200}
                        required
                    />
                </InputGroup>
                <InputGroup title="Link download" info="">
                    <input
                        type="text"
                        name="link-download"
                        className="form-control"
                        placeholder="Link download: Mediafire, Fshare, Google Drive,..."
                        required
                    />
                </InputGroup>
                <InputGroup title="Tác giả" info="">
                    <input type="text" name="author" className="form-control" placeholder="" required />
                </InputGroup>
                <InputGroup
                    title="Hình ảnh về tài liệu"
                    info="Hoàn thành đầy đủ thông tin giúp code của bạn được nhiều người biết đến và có thứ hạng cao trên kết quả tìm kiếm"
                >
                    <label htmlFor="images" className={cx('label-inp-img')}>
                        <span className="material-icons">add_circle</span>
                        Thêm ảnh...
                    </label>
                    <input name="images" id="images" type="file" accept="image/*" hidden />
                </InputGroup>
                <InputGroup title="Mô tả chi tiết">
                    <textarea name="detail-description" className="form-control" required />
                </InputGroup>
                <InputGroup title="Từ khóa" info="Tối đa 6 từ khóa">
                    <input
                        type="text"
                        name="author"
                        className="form-control"
                        placeholder="Tối thiểu 3 từ khóa"
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
                    type="submit"
                    className="text-uppercase text-white btn btn-warning"
                    leftIcon={<span className="material-icons">cloud_upload</span>}
                >
                    Tải lên ngay
                </Button>
            </section>
        </form>
    );
};

export default Upload;
