import { useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';

import Button from '@/Button';

const cx = classNames.bind(styles);

const MENU_ITEM = [
    {
        icon: 'apps',
        title: 'Tất cả môn học',
        subItem: [],
    },
    {
        icon: 'business_center',
        title: 'Việc kinh doanh',
        subItem: [],
    },
    {
        icon: 'public',
        title: 'Nhân văn',
        subItem: [],
    },
    {
        icon: 'calculate',
        title: 'Toán học',
        subItem: [],
    },
    {
        icon: 'terminal',
        title: 'Lập trình',
        subItem: ['Lập trình C/C++', 'Lập trình Python', 'Lập trình Java', 'Lập trình JavaScript'],
    },
    {
        icon: 'science',
        title: 'Khoa học',
        subItem: [],
    },
    {
        icon: 'create',
        title: 'Viết',
        subItem: [],
    },
];

const SubMenu = ({ data }) => {
    return (
        <li className={cx('sub-menu')}>
            <div className="d-flex align-items-center pb-2">
                {data.icon ? (
                    <span className="material-icons" style={{ color: '#1ab9f4' }}>
                        {data.icon}
                    </span>
                ) : null}
                <span className="ms-1">{data.title}</span>
                {data.subItem ? <span className="material-icons">arrow_drop_down</span> : null}
            </div>
            <ul className="bg-white">
                {data.subItem.map((title, index) => (
                    <li key={index} className="py-2 ps-4 pe-3">
                        {title}
                    </li>
                ))}
            </ul>
        </li>
    );
};

const ModalWrapper = ({ show, children }) => {
    return <div className={cx('modal-wrapper', { show })}>{children}</div>;
};

const Header = () => {
    const [user, setUser] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [showRegister, setShowRegister] = useState(false);
    const [formData, setFormData] = useState({
        // Khởi tạo giá trị mặc định của form
        name: '',
        email: '',
        password: '',
      });

      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(123)
        fetch('http://127.0.0.1:5000/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
        
          },
          body: JSON.stringify(formData),
        })
          .then((response) => response.json())
          .then((data) => {
            // Xử lý phản hồi từ máy chủ nếu cần
          })
          .catch((error) => {
            // Xử lý lỗi nếu có
          });
      };
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    

    const handleRegister = () => {
        setShowModal(false);
        setShowRegister(true);
    };



    return (
        <>
            <ModalWrapper show={showModal}>
                <div className={cx('modal-inner')}>
                    <h2>Đăng nhập với...</h2>
                    <div className="d-flex g-2 justify-content-center">
                        <Button>Google</Button>
                        <Button>Facebook</Button>
                    </div>
                    <p className="mt-3">hoặc</p>
                    <form>
                        <div className="mb-3 text-start">
                            <label for="login-email" class="form-label">
                                Tên người dùng hoặc email
                            </label>
                            <input type="email" class="form-control" id="login-email" placeholder="name@example.com" />
                        </div>
                        <div className="text-start">
                            <label for="login-password" class="form-label">
                                Mật khẩu
                            </label>
                            <input type="password" class="form-control" id="login-password" />
                        </div>
                        <div className="d-flex justify-content-between mt-3">
                            <div>
                                <input type="checkbox" id="login-remember" name="login-remember" />
                                <label htmlFor="login-remember">Ghi nhớ tôi</label>
                            </div>
                            <Link to="/">Quên mật khẩu</Link>
                        </div>
                        <Button className="w-100 mt-3">ĐĂNG NHẬP</Button>
                    </form>
                    <p className="text-center mt-3">
                        đây là lần đầu tiên của bạn? <Link to="/">Đăng ký ngay</Link>
                    </p>
                </div>
            </ModalWrapper>
            <ModalWrapper show={showRegister}>
                <div className={cx('modal-inner')}>
                    <h2>Đăng ký</h2>

                    <form onSubmit={handleSubmit}>
                    <div className="mb-3 text-start">
                            <label for="login-email" class="form-label">
                                Tên người dùng của bạn
                            </label>
                            <input type="text" onChange={handleChange} class="form-control" id="login-email" placeholder="username" />
                        </div>
                        <div className="mb-3 text-start">
                            <label for="login-email" class="form-label">
                                Email của bạn
                            </label>
                            <input type="email" onChange={handleChange} class="form-control" id="login-email" placeholder="name@example.com" />
                        </div>
                        <div className="text-start">
                            <label for="login-password" class="form-label">
                                Mật khẩu
                            </label>
                            <input type="password" class="form-control" id="login-password" />
                        </div>
                        <div className="text-start">
                            <label for="login-password" class="form-label">
                                Xác nhận mật khẩu
                            </label>
                            <input type="password" class="form-control" id="login-password" />
                        </div>
                        <div className="d-flex justify-content-between mt-3">
                            <div>
                                <label htmlFor="login-remember" style={{ marginRight: '10px' }}>
                                    Bạn đã đọc và đồng ý <Link to="/">điều khoản</Link> của Ba Tô Phở{' '}
                                </label>
                                <input type="checkbox" id="login-remember" name="login-remember" />
                            </div>
                            {/* <Link to="/">Quên mật khẩu</Link> */}
                        </div>
                        <Button type="submit" className="w-100 mt-3">ĐĂNG KÝ</Button>
                    </form>
                    <p className="text-center mt-3" style={{ paddingBottom: '20px' }}>
                        Bạn đã có tài khoản? <Link to="/">Đăng nhập</Link>
                    </p>
                    <div className="d-flex g-2 justify-content-center">
                        <Button>Facebook</Button>
                        <b>Hoặc</b>
                        <Button>Gmail</Button>
                    </div>
                </div>
            </ModalWrapper>
            <header className={cx('wrapper')}>
                <div className={cx('logo')}>
                    <Link to="/">
                        <img src="/src/assets/logo.png" alt="Logo" className="w-100 h-100" />
                    </Link>
                </div>
                <div className={cx('input', 'd-flex align-items-center')}>
                    <select className="form-select">
                        <option value="1">Các tài liệu</option>
                        <option value="2">Câu hỏi</option>
                        <option value="3">Giáo sư</option>
                    </select>
                    <input type="text" placeholder="Tìm kiếm trên tài liệu" className="form-control" />
                    <button className="btn">
                        <span className="material-icons">search</span>
                    </button>
                </div>
                <div className={cx('actions')}>
                    <Link to="/upload">
                        <Button className="me-5 btn btn-warning border">Tải lên</Button>
                    </Link>
                    {user ? (
                        <Button
                            onClick={() => {
                                setUser(false);
                            }}
                        >
                            User
                        </Button>
                    ) : (
                        <>
                            <Button
                                className="me-2"
                                onClick={() => {
                                    setShowModal(true);
                                }}
                            >
                                Đăng nhập
                            </Button>

                            <Button className="me-2" onClick={handleRegister}>
                                Đăng ký
                            </Button>
                        </>
                    )}
                </div>
            </header>
            <ul className={cx('menu', 'd-flex justify-content-around mt-2')}>
                {MENU_ITEM.map((item, index) => (
                    <SubMenu key={index} data={item} />
                ))}
            </ul>
        </>
    );
};

export default Header;
