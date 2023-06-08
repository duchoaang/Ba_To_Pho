import classNames from 'classnames/bind';
import styles from './Upload.module.scss';

const cx = classNames.bind(styles);

const InputGroup = ({ title, info, ...props }) => {
    return (
        <div className={cx('input-group')}>
            <label for={props.name}>
                <b className="text-warning">
                    {title} <span className="text-danger">{props.required ? '*' : ''}</span>
                </b>
            </label>
            <input {...props} />
            <span>{info}</span>
        </div>
    );
};

const Upload = () => {
    return (
        <form className={cx('wrapper')}>
            <section className="border border-warning bg-warning">
                <InputGroup title="Tiêu đề" name="title" required />
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
            </section>
            <section className="border border-danger bg-danger text-danger d-flex">
                <span className="material-icons fw-bolder">priority_high</span>
                <p className="mb-0">
                    Vì lý do bảo mật, chúng tôi thật sự khuyên bạn nên chọn tên người dùng khác với địa chỉ email của
                    bạn (abc***@gmail.com)
                </p>
            </section>
        </form>
    );
};

export default Upload;
