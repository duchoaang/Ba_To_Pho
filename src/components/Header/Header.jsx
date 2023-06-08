import { useState } from 'react';
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
                {data.icon ? <span className="material-icons">{data.icon}</span> : null}
                <span className="ms-1">{data.title}</span>
                {data.subItem ? <span class="material-icons">arrow_drop_down</span> : null}
            </div>
            <ul>
                {data.subItem.map((title, index) => (
                    <li key={index} className="p-1 ps-3">
                        {title}
                    </li>
                ))}
            </ul>
        </li>
    );
};

const Header = () => {
    const [user, setUser] = useState(false);
    return (
        <>
            <header class={cx('wrapper')}>
                <div className={cx('logo')}>
                    <img src="src/assets/logo.png" alt="Logo" className="w-100 h-100" />
                </div>
                <div className={cx('input', 'd-flex align-items-center')}>
                    <select className="form-select">
                        <option value="1">Các tài liệu</option>
                        <option value="2">Câu hỏi</option>
                        <option value="3">Giáo sư</option>
                    </select>
                    <input type="text" placeholder="Tim kiem tren tai lieu" className="form-control" />
                    <button className="btn">
                        <span className="material-icons">search</span>
                    </button>
                </div>
                <div className={cx('actions')}>
                    <Button className="me-5">Tải lên</Button>
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
                            <Button
                                className="me-2"
                                onClick={() => {
                                    setUser(true);
                                }}
                            >
                                Đăng nhập
                            </Button>
                            <Button>Đăng ký</Button>
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
