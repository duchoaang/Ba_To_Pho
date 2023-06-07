import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';

import Button from '@/Button';

const cx = classNames.bind(styles);

const Header = () => {
    const [user, setUser] = useState(false);
    return (
        <>
            <header class={cx('wrapper')}>
                <div className={cx('logo')}>
                    <img src="src/assets/logo.png" alt="Logo" className="w-100 h-100" />
                </div>
                <div className={cx('input', 'd-flex align-items-center')}>
                    <input type="text" placeholder="Tim kiem tren tai lieu" />
                    <span className="material-icons">search</span>
                </div>
                <div className={cx('actions')}>
                    <Button className="me-5">Tai len</Button>
                    {user ? (
                        <button
                            onClick={() => {
                                setUser(false);
                            }}
                        >
                            User
                        </button>
                    ) : (
                        <>
                            <button
                                className="me-2"
                                onClick={() => {
                                    setUser(true);
                                }}
                            >
                                Dang nhap
                            </button>
                            <button>Dang ky</button>
                        </>
                    )}
                </div>
            </header>
            <ul className={cx('menu')}>
                <li>
                    Tat ca mon hoc
                    <ul>
                        <li></li>
                        <li></li>
                    </ul>
                </li>
                <li>
                    Viec kinh doanh
                    <ul>
                        <li></li>
                        <li></li>
                    </ul>
                </li>
                <li>
                    Nhan van
                    <ul>
                        <li></li>
                        <li></li>
                    </ul>
                </li>
                <li>
                    Toan hoc
                    <ul>
                        <li></li>
                        <li></li>
                    </ul>
                </li>
                <li>
                    Lap trinh
                    <ul>
                        <li></li>
                        <li></li>
                    </ul>
                </li>
                <li>
                    Khoa hoc
                    <ul>
                        <li></li>
                        <li></li>
                    </ul>
                </li>
                <li>
                    Viet
                    <ul>
                        <li></li>
                        <li></li>
                    </ul>
                </li>
            </ul>
        </>
    );
};

export default Header;
