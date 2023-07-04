import styles from './Home.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
import { useState, useEffect } from 'react';
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>;
import { Link } from 'react-router-dom';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
// import Box from '@mui/material/Box';

import request from '~/utils/request';

const newDocs = [
    {
        id: 1,
        context: 'Tai lieu 4',
    },
    {
        id: 2,
        context: 'Tai lieu 5',
    },
    {
        id: 3,
        context: 'Tai lieu 6',
    },
];

const moreDocs = [
    {
        id: 7,
        context: 'Tai lieu 7',
    },
    {
        id: 8,
        context: 'Tai lieu 8',
    },
    {
        id: 9,
        context: 'Tai lieu 9',
    },
];

const Home = () => {
    const [showCourse, setCourse] = useState(false);
    const [popularCousre, setPopularCourse] = useState(true);
    const [newCourse, setNewCourse] = useState(false);

    const [popularDocs, setPopularDocs] = useState([]);
    useEffect(() => {
        request.get('api/documents').then((res) => {
            setPopularDocs(res);
        });
    }, []);
    const handleSetPopularCourse = () => {
        setPopularCourse(!popularCousre);
        setNewCourse(popularCousre);
    };
    const handleSetNewCourse = () => {
        setNewCourse(!newCourse);
        console.log(123);
        setPopularCourse(newCourse);
    };

    const [value, setValue] = useState('one');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={cx('mainHome')}>
            <div className={cx('banner')}>
                <img src="src/assets/banner.png" alt="w-100" width={'75%'} />
            </div>
            <div className={cx('subHome')}>
                <div
                    className={cx('subHome_left')}
                    style={{
                        borderBottom: 'solid 2px ',
                        backgroundColor: popularCousre ? '#f5f5f5' : '',
                        transition: '1s',
                        borderBottomColor: popularCousre ? '#0477d2' : '',
                        // width: popularCousre ? '0' : '10px',
                    }}
                >
                    <h1 onClick={handleSetPopularCourse}>Tài liệu phổ biến</h1>
                </div>
                <div
                    className={cx('subHome_right')}
                    style={{
                        borderBottom: 'solid 2px ',
                        backgroundColor: newCourse ? '#f5f5f5' : '',
                        transition: 'border-bottom 0.5s',
                        borderBottomColor: newCourse ? '#0477d2' : '',
                    }}
                >
                    <h1 onClick={handleSetNewCourse}>Tài liệu mới nhất</h1>
                </div>
            </div>
            <ul className={cx('listItem')}>
                <div className={cx('content')}>
                    <div className={cx('content_left')}>
                        {popularCousre &&
                            popularDocs.map((doc, index) => (
                                <div
                                    className={cx('subItem')}
                                    style={{ marginBottom: '20px', paddingLeft: '10px' }}
                                    key={index}
                                >
                                    <span style={{ color: '#99a8ba' }} className="material-icons">
                                        description
                                    </span>
                                    <h1>
                                        <Link style={{ textDecoration: 'none', color: 'black' }} to="/Documents">
                                            {doc.title}
                                        </Link>
                                    </h1>
                                </div>
                            ))}
                        {newCourse &&
                            newDocs.map((doc, index) => (
                                <div
                                    className={cx('subItem')}
                                    style={{ marginBottom: '20px', paddingLeft: '10px' }}
                                    key={index}
                                >
                                    <span style={{ color: '#99a8ba' }} className="material-icons">
                                        description
                                    </span>
                                    <h1>
                                        {' '}
                                        <Link style={{ textDecoration: 'none', color: 'black' }} to="/Documents">
                                            {doc.context}
                                        </Link>
                                    </h1>
                                </div>
                            ))}
                    </div>
                </div>
                <div className={cx('moreOption')}>
                    <h2 onClick={() => setCourse(!showCourse)} style={{ marginBottom: '20px' }}>
                        <span className="material-icons">arrow_drop_down</span> Cho xem nhiều hơn
                    </h2>
                    {showCourse && (
                        <div className={cx('moreDocs')}>
                            <div className={cx('content')}>
                                <div className={cx('content_left')}>
                                    {moreDocs.map((doc, index) => (
                                        <div
                                            className={cx('subItem')}
                                            style={{ marginBottom: '20px', paddingLeft: '10px' }}
                                            key={index}
                                        >
                                            <span style={{ color: '#99a8ba' }} className="material-icons">
                                                description
                                            </span>
                                            <h1>
                                                {' '}
                                                <Link
                                                    style={{ textDecoration: 'none', color: 'black' }}
                                                    to="/Documents"
                                                >
                                                    {doc.context}
                                                </Link>
                                            </h1>
                                        </div>

                                        //             {/* <div className={cx('content')} key={doc.id}>
                                        //     <div className={cx('content_left')}></div>
                                        // </div> */}
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </ul>
            {/* <Box sx={{ width: '100%' }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    textColor="secondary"
                    indicatorColor="secondary"
                    aria-label="secondary tabs example"
                >
                    <Tab value="one" label="Item One" />
                    <Tab value="two" label="Item Two" />
                    <Tab value="three" label="Item Three" />
                </Tabs>
            </Box> */}
        </div>
    );
};

export default Home;
