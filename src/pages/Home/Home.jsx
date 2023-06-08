import styles from './Home.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
import { useState } from 'react';
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>;

const popularDocs = [
    {
        id: 1,
        context: 'Tai lieu 1',
    },
    {
        id: 2,
        context: 'Tai lieu 2',
    },
    {
        id: 3,
        context: 'Tai lieu 3',
    },
];
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
    const [popularCousre, setPopularCourse] = useState(false);

    const [newCourse, setNewCourse] = useState(false);
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
        <>
            <div className={cx('banner')}>
                <img
                    src="https://thietkelogo.edu.vn/uploads/images/thiet-ke-do-hoa-khac/banner-sach/1.png"
                    alt=""
                    height={'400'}
                />
            </div>
            <div className={cx('subHome')}>
                <div className={cx('subHome_left')}>
                    <h1
                        onClick={handleSetPopularCourse}
                        style={{
                            borderBottom: 'solid 3px transparent',

                            transition: 'border-bottom 0.5s',
                            borderBottomColor: popularCousre ? '#0477d2' : 'transparent',
                            // width: popularCousre ? '0' : '10px',
                        }}
                    >
                        Tài liệu phổ biến
                    </h1>
                </div>
                <div className={cx('subHome_right')}>
                    <h1
                        onClick={handleSetNewCourse}
                        style={{
                            borderBottom: 'solid 3px transparent',

                            transition: 'border-bottom 0.5s',
                            borderBottomColor: newCourse ? '#0477d2' : 'transparent',
                        }}
                    >
                        Tài liệu mới nhất
                    </h1>
                </div>
            </div>
            <ul>
                {popularCousre &&
                    popularDocs.map((doc) => (
                        <>
                            <div className={cx('content')} key={doc.id}>
                                <div className={cx('content_left')}>
                                    <span class="material-icons">description</span>
                                    <h1>{doc.context}</h1>
                                </div>
                            </div>
                        </>
                    ))}
                {newCourse &&
                    newDocs.map((doc) => (
                        <>
                            <div className={cx('content')} key={doc.id}>
                                <div className={cx('content_left')}>
                                    <span class="material-icons">description</span>
                                    <h1>{doc.context}</h1>
                                </div>
                            </div>
                        </>
                    ))}
            </ul>

            <div className={cx('moreOption')}>
                <h2 onClick={() => setCourse(!showCourse)}>
                    <span class="material-icons">arrow_drop_down</span> Cho xem nhiều hơn
                </h2>
                {showCourse && (
                    <div className={cx('moreDocs')}>
                        {moreDocs.map((doc) => (
                            <>
                                <div className={cx('content')} key={doc.id}>
                                    <div className={cx('content_left')}>
                                        <span class="material-icons">description</span>
                                        <h1>{doc.context}</h1>
                                    </div>
                                </div>
                            </>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
};

export default Home;
