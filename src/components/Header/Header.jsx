import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import axios from 'axios';
import Button from '@/Button';
import Swal, { swal } from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';
import Btn from '@mui/material/Button';
import Input from '@/Input';
import Tooltip from '@mui/material/Tooltip';
import { useGoogleLogin, googleLogout } from '@react-oauth/google';
import GoogleButton from 'react-google-button';
const cx = classNames.bind(styles);
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faBacon } from '@fortawesome/free-solid-svg-icons';

import 'boxicons';
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
    const [userGoogle, setUserGoogle] = useState([]);
    // const [profile, setProfile] = useState([]);
    const [infoUser, setInfoUser] = useState([]);
    const [infoUserGoogle, setInfoUserGoogle] = useState([]);
    const [formDataLoginGoogle, setFormDataLoginGoogle] = useState([]);
    const [idUser, setIdUser] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [showRegister, setShowRegister] = useState(false);
    const [userName, setUserName] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [checkButton, setCheckbutton] = useState(false);
    const [isFormValid, setIsFormValid] = useState(false);
    const [errorMessage, setErrorMessage] = useState(false);
    const [confirmEmail, setConfirmEmail] = useState(false);

    const [showAlertConfirmEmail, setShowAlertConfirmEmail] = useState(false);
    const [showLoading, setShowLoading] = useState(false);
    const [ErrorUserNameEmail, setErrorUserNameEmail] = useState(false);
    const [results, setResults] = useState([]);
    const [loginFailed, setLoginFailed] = useState(false);

    const login = useGoogleLogin({
        onSuccess: (codeResponse) => setUserGoogle(codeResponse),

        onError: (error) => console.log('Login Failed:', error),
    });
    const logOut = () => {
        googleLogout();
        setProfile(null);
    };
    // console.log(userGoogle);
    // lay thong tin user google
    useEffect(() => {
        if (userGoogle) {
            axios
                .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${userGoogle.access_token}`, {
                    headers: {
                        Authorization: `Bearer ${user.access_token}`,
                        Accept: 'application/json',
                    },
                })
                .then((res) => {
                    console.log(res);
                    setFormDataLoginGoogle(res.data);
                    // setProfile(res.data);
                })
                .catch((err) => console.log(err));
        }
    }, [userGoogle]);

    // gui thong tin user google len server
    useEffect(() => {
        if (formDataLoginGoogle) {
            axios
                .post('http://127.0.0.1:5000/users/loginGoogle', formDataLoginGoogle, { withCredentials: true })
                .then((response) => {
                    setUser(true);
                    // console.log(response.data);
                    setInfoUserGoogle({
                        id: response.data.id,
                        name: response.data.name,
                        avatar: response.data.avatar,
                    });
                    setShowModal(false);
                    setLoginFailed(false);
                })
                .catch((error) => {
                    console.log(error.message);
                    // setLoginFailed(true);
                    console.log('dang nhap k thanh cong');
                });
        }
    }, [formDataLoginGoogle]);

    useEffect(() => {
        axios.get('http://127.0.0.1:5000/current-user', { withCredentials: true }).then((response) => {
            console.log(response.data.is_active);
            if (response.data.is_active === true) {
                setUser(true);
                // console.log(response.data);
                setInfoUser({
                    id: response.data.id,
                    username: response.data.username,
                    avatar: response.data.avatar,
                });
            }
        });
    }, []);

    const AlertConfirmEmailSucess = () => {
        Swal.fire({
            icon: 'success',
            title: 'Đăng kí thành công',
            text: 'Chúc bạn có một trải nghiệm tốt lành!',

            willClose: setShowAlertConfirmEmail(false),
        });
    };

    const AlertConfirmEmail = () => {
        let timerInterval;
        Swal.fire({
            title: 'Xác nhận email !',
            html: 'Hãy xác nhận email của bạn trong <b></b> giây .',
            timer: 5000,
            timerProgressBar: true,
            didOpen: () => {
                Swal.showLoading();
                const b = Swal.getHtmlContainer().querySelector('b');
                let remainingTime;
                timerInterval = setInterval(() => {
                    remainingTime = Math.floor(Swal.getTimerLeft() / 1000);
                    b.textContent = remainingTime;
                }, 1000);
            },
            willClose: () => {
                setConfirmEmail(false);
                clearInterval(timerInterval);
            },
        }).then((result) => {
            /* Read more about handling dismissals below */
            if (result.dismiss === Swal.DismissReason.timer) {
                console.log('I was closed by the timer');
            }
        });
    };

    useEffect(() => {
        setIsFormValid(
            userName !== '' && userPassword !== '' && userEmail !== '' && confirmPassword !== '' && checkButton,
        );
    }, [userName, userPassword, userEmail, confirmPassword, checkButton]);
    // form data dang ki
    const [formData, setFormData] = useState({
        // Khởi tạo giá trị mặc định của form
        name: userName,
        email: userEmail,
        password: userPassword,
    });
    // form data dang nhap
    const [formDataLogin, setFormDataLogin] = useState({
        username: userName,
        password: userPassword,
    });
    // console.log(formData);

    const handleLogin = () => {
        setShowModal(true);
        setShowRegister(false);
    };
    useEffect(() => {
        if (showRegister) {
            setFormData({
                name: userName,
                email: userEmail,
                password: userPassword,
            });
        } else
            setFormDataLogin({
                username: userName,
                password: userPassword,
            });
    }, [userName, userEmail, userPassword]);

    useEffect(() => {
        let prevConfirmEmail = confirmEmail;
        if (confirmEmail === true && prevConfirmEmail === true) {
            console.log('setup fetch');

            const timer = setInterval(() => {
                fetch('http://127.0.0.1:5000/users/confirm-status/', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    credentials: 'include',
                })
                    .then((response) => response.json())
                    .then((data) => {
                        if (data.status === 200) {
                            clearInterval(timer);
                            setConfirmEmail(false);
                            setShowLoading(false);
                            setShowAlertConfirmEmail(true);
                            console.log(' xac thuc email thanh cong');
                        } else if (data.status === 404) {
                            console.log('That bai');
                        } else console.log('12123');
                    });
            }, 3000);
            setTimeout(() => {
                clearInterval(timer); // Dừng hàm setInterval sau 30 giây
            }, 5000);
        }
    }, [confirmEmail]);
    //dang ki
    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(showLoading);
        if (userPassword === confirmPassword) {
            setShowLoading(true);
            setErrorMessage(false);
            // setShowRegister(false)
            fetch('http://127.0.0.1:5000/users/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
                body: JSON.stringify(formData),
            })
                .then((response) => response.json())
                .then((data) => {
                    if (data.status === 200) {
                        setShowRegister(false);
                        console.log('dang ki thanh cong');

                        setConfirmEmail(true);
                    } else if (data.status === 404) {
                        console.log('dang ki That bai');
                        setShowLoading(false);
                        setErrorUserNameEmail(true);
                        setConfirmEmail(false);
                    }
                })
                .catch((error) => {});
        } else setErrorMessage(true);
    };
    //search

    // dang nhap
    const handleSubmitLogin = (e) => {
        console.log(formDataLogin);
        e.preventDefault();
        axios
            .post('http://127.0.0.1:5000/users/login', formDataLogin, { withCredentials: true })
            .then((response) => {
                setUser(true);
                // console.log(response.data);
                setInfoUser({
                    id: response.data.id,
                    username: response.data.username,
                    avatar: response.data.avatar,
                });
                setShowModal(false);
                setLoginFailed(false);
            })
            .catch((error) => {
                console.log(error.message);
                setLoginFailed(true);
                console.log('dang nhap k thanh cong');
            });
    };
    const handleRegister = () => {
        setErrorUserNameEmail(false);
        setUserPassword('');
        setUserEmail('');
        setUserName('');
        setConfirmPassword('');
        setShowLoading(false);
        setShowModal(false);
        setShowRegister(true);
    };
    const handleCancel = () => {
        setUserName('');
        setShowRegister(false);
        setShowModal(false);
    };

    const handleAlertClose = () => {
        // setShowAlertConfirmEmail(false);
        setShowLoading(false);
    };
    const handleLogout = () => {
        axios
            .post('http://127.0.0.1:5000/users/logout', infoUser.id, { withCredentials: true })
            .then((response) => {})
            .catch((error) => {});
        setUser(false);
    };

    return (
        <>
            {showAlertConfirmEmail && <AlertConfirmEmailSucess onClose={handleAlertClose} />}

            <ModalWrapper show={showModal}>
                <div className={cx('modal-inner')}>
                    <h2>Đăng nhập bằng </h2>
                    {loginFailed && <h2 style={{ fontSize: '16px', color: 'red' }}>Tài khoản hoặc mật khẩu sai !</h2>}
                    <span className={cx('cancel', 'material-icons')} onClick={handleCancel}>
                        cancel
                    </span>
                    <div className="d-flex g-2 justify-content-center">
                        <div id="signInGoogle">
                            <>
                                {/* <GoogleLogin /> */}
                                <GoogleButton
                                    type="dark"
                                    label="Đăng nhập với Google "
                                    size="small"
                                    onClick={() => login()}
                                />
                                {/* <button onClick={() => login()}>Sign in with Google 🚀 </button> */}
                            </>
                        </div>
                    </div>
                    <p className="mt-3">hoặc</p>

                    <form onSubmit={handleSubmitLogin}>
                        <div className="mb-3 text-start">
                            <label for="login-email" class="form-label">
                                Tên người dùng hoặc email
                            </label>
                            <input
                                onChange={(e) => setUserName(e.target.value)}
                                type="text"
                                class="form-control"
                                id="login-email"
                                placeholder="Tên tài khoản..."
                            />
                        </div>
                        <div className="text-start">
                            <label for="login-password" class="form-label">
                                Mật khẩu
                            </label>
                            <input
                                onChange={(e) => setUserPassword(e.target.value)}
                                type="password"
                                class="form-control"
                                id="login-password"
                                placeholder="Mật khẩu..."
                            />
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
                        đây là lần đầu tiên của bạn?{' '}
                        <b style={{ cursor: 'pointer' }} onClick={handleRegister}>
                            Đăng ký ngay
                        </b>
                    </p>
                </div>
            </ModalWrapper>

            <ModalWrapper show={showRegister}>
                <div className={cx('modal-inner')} style={{ height: '550px' }}>
                    <h2>Đăng ký</h2>
                    {errorMessage && (
                        <h2 style={{ fontSize: '18px', color: 'red', fontWeight: '600' }}>
                            Xác nhận mật khẩu không đúng !!
                        </h2>
                    )}
                    <span className={cx('cancel', 'material-icons')} onClick={handleCancel}>
                        cancel
                    </span>
                    {ErrorUserNameEmail && (
                        <h2 style={{ fontSize: '18px', color: 'red', fontWeight: '600' }}>
                            Tên người dùng hoặc email đã được sử dụng{' '}
                        </h2>
                    )}
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3 text-start">
                            <label for="login-email" class="form-label">
                                Tên người dùng của bạn
                            </label>
                            <input
                                value={userName}
                                type="text"
                                onChange={(e) => setUserName(e.target.value)}
                                class="form-control"
                                id="login-email"
                                placeholder="username"
                            />
                        </div>
                        <div className="mb-3 text-start">
                            <label for="login-email" class="form-label">
                                Email của bạn
                            </label>
                            <input
                                value={userEmail}
                                type="email"
                                onChange={(e) => setUserEmail(e.target.value)}
                                class="form-control"
                                id="login-email"
                                placeholder="name@example.com"
                            />
                        </div>
                        <div className="text-start">
                            <label for="login-password" class="form-label">
                                Mật khẩu
                            </label>
                            <input
                                value={userPassword}
                                onChange={(e) => setUserPassword(e.target.value)}
                                type="password"
                                class="form-control"
                                id="login-password"
                            />
                        </div>
                        <div className="text-start">
                            <label for="login-password" class="form-label">
                                Xác nhận mật khẩu
                            </label>
                            <input
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                type="password"
                                class="form-control"
                                id="login-ConfirmPassword"
                            />
                        </div>
                        <div className="d-flex justify-content-between mt-3">
                            <div>
                                <label htmlFor="login-remember" style={{ marginRight: '10px' }}>
                                    Bạn đã đọc và đồng ý <Link to="/">điều khoản</Link> của Ba Tô Phở{' '}
                                </label>
                                <input
                                    onChange={() => setCheckbutton(!checkButton)}
                                    type="checkbox"
                                    id="login-remember"
                                    name="login-remember"
                                />
                            </div>
                        </div>

                        <Button type="submit" className="w-100 mt-3" disabled={!isFormValid} onClick={handleSubmit}>
                            {' '}
                            <h1 className={cx('register')}>
                                ĐĂNG KÝ{' '}
                                {showLoading && <span className={cx('loading', 'material-icons')}>refresh</span>}
                            </h1>
                        </Button>
                    </form>
                    <p className="text-center mt-3" style={{ paddingBottom: '20px' }}>
                        Bạn đã có tài khoản?
                        <b style={{ cursor: 'pointer' }} onClick={handleLogin}>
                            Đăng nhập
                        </b>
                    </p>
                </div>
            </ModalWrapper>

            {/* {<ModalWrapper show={true}>
                <div className={cx('modal-inner')}>
                    <h1>Kiểm tra email của bạn để xác nhận tài khoản {countdown}</h1>
                    <AlertConfirmEmail/>
                    <span className={cx('cancel', 'material-icons')} onClick={handleCancel}>
                        cancel
                    </span>
                </div>
            </ModalWrapper>} */}
            {confirmEmail && <AlertConfirmEmail />}

            <header className={cx('wrapper')}>
                <div className={cx('logo')}>
                    <Link to="/">
                        <img src="/src/assets/logo.png" alt="Logo" className="w-100 h-100" />
                    </Link>
                </div>
                <div className={cx('input', 'd-flex align-items-center')} style={{ height: '40%' }}>
                    <select className="form-select">
                        <option value="1">Các tài liệu</option>
                        <option value="2">Câu hỏi</option>
                        <option value="3">Giáo sư</option>
                    </select>
                    <div className={cx('search')}>
                        <Input placeholder="12123123" />
                        <span className="material-icons" onClick={() => setShowAlertConfirmEmail(true)}>
                            search
                        </span>
                    </div>

                    <button className="btn"></button>
                </div>
                <div className={cx('actions')}>
                    <Link to="/upload">
                        <Button className="me-5 btn btn-warning border">Tải lên</Button>
                    </Link>
                    {user ? (
                        <>
                            <Tooltip title={<Link to={`/profile/${infoUser.id}`}>Profile</Link>}>
                                <img
                                    onClick={handleLogout}
                                    className={cx('user_avatar')}
                                    src={infoUser.avatar}
                                    alt=""
                                />
                            </Tooltip>
                        </>
                    ) : (
                        <>
                            <Btn
                                variant="contained"
                                className="me-2"
                                color="info"
                                onClick={() => {
                                    setShowModal(true);
                                }}
                            >
                                Đăng nhập
                            </Btn>

                            <Btn variant="contained" color="inherit" className="me" onClick={handleRegister}>
                                Đăng ký
                            </Btn>
                        </>
                    )}
                    <FontAwesomeIcon icon={faBacon} />
             
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
