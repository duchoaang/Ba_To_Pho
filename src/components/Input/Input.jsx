import { useState, useEffect } from 'react';
import classnames from 'classnames/bind';
import styles from './Input.module.scss';

const cx = classnames.bind(styles);
const Input = () => {
    const [inputValue, setInputValue] = useState('');
    const [resultsList, setResultsList] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:5000/api/documents')
            .then((response) => response.json())
            .then((json) => {
                const results = json.filter((docs) => {
                    return (
                        inputValue &&
                        docs &&
                        docs.content &&
                        docs.content.toLowerCase().includes(inputValue.toLowerCase())
                    );
                });
                setResultsList(results);
            });
    }, [inputValue]);
    const handleChangeInput = (value) => {
        setInputValue(value);
    };

    const handleClickResult = (value) => {
        alert('Click result ' + value.content);
    };
    return (
        <>
            <div className={cx('search')}>
                <input
                    type="text"
                    placeholder="Tìm kiếm...."
                    style={{ height: '100%' }}
                    value={inputValue}
                    onChange={(e) => handleChangeInput(e.target.value)}
                />
                <div className={cx('results_list')}>
                    {resultsList.map((result, id) => {
                        return (
                            <div key={id} onClick={() => handleClickResult(result)}>
                                {result.content}{' '}
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
};
export default Input;
