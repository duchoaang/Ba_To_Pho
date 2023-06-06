import classNames from 'classnames/bind';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

const Header = () => {
    return (
        <header>
            <div className={cx('logo')}>
                <img src="" alt="" />
            </div>
            <div className={cx('input')}></div>
            <div className={cx('actions')}></div>
        </header>
    );
};

export default Header;
