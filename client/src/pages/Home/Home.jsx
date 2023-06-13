import styles from './Home.module.scss';
import classNames from 'classnames/bind';
import 'bootstrap/dist/css/bootstrap.min.css';
const cx = classNames.bind(styles);
import { useState, useEffect } from 'react';
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>;
import { Link } from 'react-router-dom';
import axios from 'axios';


// const popularDocs = [
//     {
//         id: 1,
//         context: 'Tai lieu 1',
//     },
//     {
//         id: 2,
//         context: 'Tai lieu 2',
//     },
//     {
//         id: 3,
//         context: 'Tai lieu 3',
//     },
// ];
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


    const [popularDocs, setPopularDocs] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/api/documents").then(
            res => {
                console.log(res)
                return res.json()
            }
        ).then(
            resData => {
                setPopularDocs(resData)
                console.log(resData)
            }
        ).catch(
            error => console.log(error)
        )
    }, [])

    const handleSetPopularCourse = () => {
        setPopularCourse(!popularCousre);
        setNewCourse(popularCousre);
    };
    const handleSetNewCourse = () => {
        setNewCourse(!newCourse);
        console.log(123);
        setPopularCourse(newCourse);
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
                            popularDocs.map((doc) => (
                                <>
                                    <div
                                        className={cx('subItem')}
                                        style={{ marginBottom: '20px', paddingLeft: '10px' }}
                                    >
                                        <span style={{ color: '#99a8ba' }} class="material-icons">
                                            description
                                        </span>
                                        <h1>
                                            <Link style={{ textDecoration: 'none', color: 'black' }} to="/Documents">
                                                {doc.title}
                                            </Link>
                                        </h1>
                                    </div>
                                </>
                            ))}
                        {newCourse &&
                            newDocs.map((doc) => (
                                <>
                                    <div
                                        className={cx('subItem')}
                                        style={{ marginBottom: '20px', paddingLeft: '10px' }}
                                    >
                                        <span style={{ color: '#99a8ba' }} class="material-icons">
                                            description
                                        </span>
                                        <h1>
                                            {' '}
                                            <Link style={{ textDecoration: 'none', color: 'black' }} to="/Documents">
                                                {doc.context}
                                            </Link>
                                        </h1>
                                    </div>
                                </>
                            ))}
                    </div>
                </div>
                <div className={cx('moreOption')}>
                    <h2 onClick={() => setCourse(!showCourse)} style={{ marginBottom: '20px' }}>
                        <span class="material-icons">arrow_drop_down</span> Cho xem nhiều hơn
                    </h2>
                    {showCourse && (
                        <div className={cx('moreDocs')}>
                            <div className={cx('content')}>
                                <div className={cx('content_left')}>
                                    {moreDocs.map((doc) => (
                                        <>
                                            <div
                                                className={cx('subItem')}
                                                style={{ marginBottom: '20px', paddingLeft: '10px' }}
                                            >
                                                <span style={{ color: '#99a8ba' }} class="material-icons">
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

                                            {/* <div className={cx('content')} key={doc.id}>
                                    <div className={cx('content_left')}></div>
                                </div> */}
                                        </>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </ul>
        </div>
    );
};

export default Home;
