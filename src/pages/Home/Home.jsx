import styles from './Home.module.scss';
import classNames from 'classnames';
const cx = classNames.bind(styles);

const Home = () => {
    return (
        <>
            <img
                src="https://thietkelogo.edu.vn/uploads/images/thiet-ke-do-hoa-khac/banner-sach/1.png"
                alt=""
                height={'400'}
            />
            <div className={cx('subHome')}>
                <div className={cx('subHome_top')}>
                    <h1>Tài liệu phổ biến </h1>
                    <h1>Tài liệu mới nhất </h1>
                </div>
                <div className={cx('subHome_bot')}>
                    <div className={cx('bot_left')}>Electron</div>
                    <div className={cx('bot_right')}></div>
                </div>
            </div>
        </>
    );
};

export default Home;
