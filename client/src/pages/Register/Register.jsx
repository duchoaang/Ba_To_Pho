import styles from './Register.module.scss';
import classNames from 'classnames/bind';
import 'bootstrap/dist/css/bootstrap.min.css';
const cx = classNames.bind(styles);
import { useState } from 'react';
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>;
import { Link } from 'react-router-dom';

const database = [
    {
        username: 'user1',
        password: 'pass1',
    },
    {
        username: 'user2',
        password: 'pass2',
    },
];

const errors = {
    uname: 'invalid username',
    pass: 'invalid password',
};
const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [confirmPassword, setConfirmPassWord] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);
    const handleName = (e) => {
        setName(e);
        console.log(e);
    };
    const handleEmail = (e) => {
        setEmail(e);
        console.log(e);
    };
    const handlePassword = (e) => {
        setPassword(e);
        console.log(e);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (name === '' || email === '' || password === '') {
            setError(true);
            setSubmitted(false);
        } else {
            setName('');
            setEmail('');
            setPassword('');
            setSubmitted(true);
            setError(false);
        }
    };
    const successMessage = () => {
        return (
            <div
                className="success"
                style={{
                    display: submitted ? '' : 'none',
                }}
            >
                <h1> Đăng kí tài khoản thành công !</h1>
            </div>
        );
    };

    // Showing error message if error is true
    const errorMessage = () => {
        return (
            <div
                className="error"
                style={{
                    display: error ? '' : 'none',
                }}
            >
                <h1>Vui lòng điền đủ thông tin</h1>
            </div>
        );
    };
    return (
        <>
            {' '}
            <div className={cx('register')}>
                <div className="form">
                    <div>
                        <h1>User Registration</h1>
                    </div>

                    {/* Calling to the methods */}
                    <div className="messages">
                        {errorMessage()}
                        {successMessage()}
                    </div>

                    <form>
                        {/* Labels and inputs for form data */}
                        <label className="label">Name</label>
                        <input
                            onChange={(e) => handleName(e.target.value)}
                            className="input"
                            value={name}
                            type="text"
                        />

                        <label className="label">Email</label>
                        <input
                            onChange={(e) => handleEmail(e.target.value)}
                            className="input"
                            value={email}
                            type="email"
                        />

                        <label className="label">Password</label>
                        <input
                            onChange={(e) => handlePassword(e.target.value)}
                            className="input"
                            value={password}
                            type="password"
                        />

                        <button onClick={handleSubmit} className="btn" type="submit">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};
export default Register;
