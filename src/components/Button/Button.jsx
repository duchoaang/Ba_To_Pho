import classnames from 'classnames/bind';
import styles from './Button.module.scss';

const cx = classnames.bind(styles);

const Button = ({ children, classNames, leftIcon, rightIcon }) => {
    return (
        <button className={cx('wrapper', classNames)}>
            {leftIcon ?? null}
            <span className={(leftIcon ? 'ms-2' : '') + (rightIcon ? 'me-2' : '')}>{children}</span>
            {rightIcon ?? null}
        </button>
    );
};

export default Button;
