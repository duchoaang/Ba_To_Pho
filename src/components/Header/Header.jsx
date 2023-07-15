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
import { faL, faUser } from '@fortawesome/free-solid-svg-icons';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import get from '~/utils/request/get';
import post from '~/utils/request/post';

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

const UserController = ({ show, children }) => {
    return <div className={cx('user-controller', { show })}>{children}</div>;
};

const Header = () => {
    const [user, setUser] = useState(false);
    const [userGoogle, setUserGoogle] = useState([]);
    // const [profile, setProfile] = useState([]);
    const [anchorEl, setAnchorEl] = useState(null);
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
    const [showUserControll, setUserControll] = useState(false);
    const [showAlertConfirmEmail, setShowAlertConfirmEmail] = useState(false);
    const [showLoading, setShowLoading] = useState(false);
    const [ErrorUserNameEmail, setErrorUserNameEmail] = useState(false);
    const [results, setResults] = useState([]);
    const [loginFailed, setLoginFailed] = useState(false);
    const [loginByGG, setLoginByGG] = useState(false);

   
    // const logOut = () => {
    //     googleLogout();
    //     setProfile(null);
        
    // };
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
        setUser(false);
    };

    // lay thong tin user google
   useEffect(() => {
       if(loginByGG) {
        if (userGoogle != null) {
            
            axios
            .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${userGoogle.access_token}`, {
                    headers: {
                        Authorization: `Bearer ${user.access_token}`,
                        Accept: 'application/json',
                    },
                })
                .then((res) => {
                    setFormDataLoginGoogle(res.data);
                    loginByGG(false)
                    // setProfile(res.data);
                })
                .catch((err) => {});
        }
        else{
            console.log("loi dang nhap gg")
        }
       }
    },[loginByGG])
    const login = useGoogleLogin({
        onSuccess: (codeResponse) =>{
            setUserGoogle(codeResponse);
            setLoginByGG(true);
            // loginByGG();
        } ,

        onError: (error) => console.log('Login Failed:', error),
    });
    // gui thong tin user google len server
    useEffect(() => {
        if (formDataLoginGoogle) {
            post('users/loginGoogle', formDataLoginGoogle, { withCredentials: true })
                .then((response) => {
                    setUser(true);
                    setInfoUserGoogle({
                        id: response.id,
                        name: response.name,
                        avatar: response.avatar,
                    });
                    setShowModal(false);
                    setLoginFailed(false);
                })
                .catch((error) => {
                    // setLoginFailed(true);
                    console.log('dang nhap k thanh cong');
                });
        }
    }, [formDataLoginGoogle]);

    useEffect(() => {
        get('current-user', { withCredentials: true }).then((response) => {
            if (response.is_active === true) {
                setUser(true);

                setInfoUser({
                    id: response.id,
                    username: response.username,
                    avatar: response.avatar,
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
            const timer = setInterval(() => {
                get('users/confirm-status/', {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    credentials: 'include',
                })
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

        if (userPassword === confirmPassword) {
            setShowLoading(true);
            setErrorMessage(false);
            // setShowRegister(false)
           post('users/register', formData, {
             
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
                
            })
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
        e.preventDefault();
        post('users/login', formDataLogin, { withCredentials: true })
            .then((response) => {
                setUser(true);
                // console.log(response.data);
                setInfoUser({
                    id: response.id,
                    username: response.username,
                    avatar: response.avatar,
                });
                setShowModal(false);
                setLoginFailed(false);
            })
            .catch((error) => {
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
        post('users/logout', infoUser.id, { withCredentials: true })
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
                            <label htmlFor="login-email" className="form-label">
                                Tên người dùng hoặc email
                            </label>
                            <input
                                onChange={(e) => setUserName(e.target.value)}
                                type="text"
                                className="form-control"
                                id="login-email"
                                placeholder="Tên tài khoản..."
                            />
                        </div>
                        <div className="text-start">
                            <label htmlFor="login-password" className="form-label">
                                Mật khẩu
                            </label>
                            <input
                                onChange={(e) => setUserPassword(e.target.value)}
                                type="password"
                                className="form-control"
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
                        Đây là lần đầu tiên của bạn?&nbsp;
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
                            <label htmlFor="register-username" className="form-label">
                                Tên người dùng của bạn
                            </label>
                            <input
                                value={userName}
                                type="text"
                                onChange={(e) => setUserName(e.target.value)}
                                className="form-control"
                                id="register-username"
                                placeholder="username"
                            />
                        </div>
                        <div className="mb-3 text-start">
                            <label htmlFor="register-email" className="form-label">
                                Email của bạn
                            </label>
                            <input
                                value={userEmail}
                                type="email"
                                onChange={(e) => setUserEmail(e.target.value)}
                                className="form-control"
                                id="register-email"
                                placeholder="name@example.com"
                            />
                        </div>
                        <div className="text-start">
                            <label htmlFor="register-password" className="form-label">
                                Mật khẩu
                            </label>
                            <input
                                value={userPassword}
                                onChange={(e) => setUserPassword(e.target.value)}
                                type="password"
                                className="form-control"
                                id="register-password"
                            />
                        </div>
                        <div className="text-start">
                            <label htmlFor="register-confirm-password" className="form-label">
                                Xác nhận mật khẩu
                            </label>
                            <input
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                type="password"
                                className="form-control"
                                id="register-confirm-password"
                            />
                        </div>
                        <div className="d-flex justify-content-between mt-3">
                            <div>
                                <label htmlFor="acp-policy" style={{ marginRight: '10px' }}>
                                    Bạn đã đọc và đồng ý <Link to="/">điều khoản</Link> của Ba Tô Phở{' '}
                                </label>
                                <input
                                    onChange={() => setCheckbutton(!checkButton)}
                                    type="checkbox"
                                    id="acp-policy"
                                    name="acp-policy"
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
                        Bạn đã có tài khoản?&nbsp;
                        <b style={{ cursor: 'pointer' }} onClick={handleLogin}>
                            Đăng nhập
                        </b>
                    </p>
                </div>
            </ModalWrapper>

            {confirmEmail && <AlertConfirmEmail />}

            <header className={cx('wrapper')}>
                <div className={cx('logo')}>
                    <Link to="/">
                        <img src="/src/assets/logo.png" alt="Logo" className="w-100 h-100" />
                    </Link>
                </div>
                <div className={cx('input', 'd-flex align-items-center')} style={{ height: '40%' }}>
                   
                    <div className={cx('search')}>
                        <Input placeholder="12123123" />
                        
                      
                    </div>

                    <button className="btn"></button>
                </div>

                <div className={cx('actions')}>
                    {user ? (
                        <>
                            <Link to="/upload">
                                <Button className="me-5 btn btn-warning border">Tải lên</Button>
                            </Link>
                           
                            <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                                <Tooltip title="Account settings">
                                    <IconButton
                                        onClick={handleClick}
                                        size="small"
                                        sx={{ ml: 2 }}
                                        aria-controls={open ? 'account-menu' : undefined}
                                        aria-haspopup="true"
                                        aria-expanded={open ? 'true' : undefined}
                                    >
                                        <Avatar sx={{ width: 32, height: 32 }}>
                                            <img className={cx('user_avatar')} src={infoUser.avatar} alt="" />
                                        </Avatar>
                                    </IconButton>
                                </Tooltip>
                            </Box>
                            <Menu
                                anchorEl={anchorEl}
                                id="account-menu"
                                open={open}
                                onClose={handleClose}
                                onClick={handleClose}
                                PaperProps={{
                                    elevation: 0,
                                    sx: {
                                        overflow: 'visible',
                                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                        mt: 1.5,
                                        '& .MuiAvatar-root': {
                                            width: 32,
                                            height: 32,
                                            ml: -0.5,
                                            mr: 1,
                                        },
                                        '&:before': {
                                            content: '""',
                                            display: 'block',
                                            position: 'absolute',
                                            top: 0,
                                            right: 14,
                                            width: 10,
                                            height: 10,
                                            bgcolor: 'background.paper',
                                            transform: 'translateY(-50%) rotate(45deg)',
                                            zIndex: 0,
                                        },
                                    },
                                }}
                                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                            >
                                <Link style={{ color: 'black' }} to={`/profile/${infoUser.id}`}>
                                    <MenuItem onClick={handleClose}>
                                        <Avatar /> Profile
                                    </MenuItem>
                                </Link>
                                <MenuItem onClick={handleClose}>
                                    <Avatar /> My account
                                </MenuItem>
                                <Divider />
                                <MenuItem onClick={handleClose}>
                                    <ListItemIcon>
                                        <PersonAdd fontSize="small" />
                                    </ListItemIcon>
                                    Add another account
                                </MenuItem>
                                <MenuItem onClick={handleClose}>
                                    <ListItemIcon>
                                        <Settings fontSize="small" />
                                    </ListItemIcon>
                                    Settings
                                </MenuItem>
                                <MenuItem onClick={handleLogout}>
                                    <ListItemIcon>
                                        <Logout fontSize="small" />
                                    </ListItemIcon>
                                    Logout
                                </MenuItem>
                            </Menu>

                            {/* <Tippy content="Tooltip">
      <ThisWillWork />
    </Tippy> */}
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
