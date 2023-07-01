import classNames from 'classnames/bind';
import styles from './InfoList.module.scss';

const cx = classNames.bind(styles);

const InfoList = ({ title, value }) => {
    return (
        <dl className={cx('wrapper')}>
            <dt className={cx('title')}>{title}:</dt>
            <dd className={cx('value')}>{value}</dd>
        </dl>
    );
};

export default InfoList;
