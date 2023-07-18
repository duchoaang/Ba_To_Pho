import styles from './Documents.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
import { useState, useEffect } from 'react';
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>;

import 'bootstrap/dist/css/bootstrap.min.css';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import axios from 'axios';
import { Link } from 'react-router-dom';
import SearchEngine from '@/SearchEngine';
const PAGE_SIZE = 7;

const handlePageClick = () => {};
const Documents = () => {
    const [listID, setListID] = useState('');
    const [typeID, setTypeID] = useState('');
    const [showList, setShowList] = useState(false);
    const [listDocs, setListDocs] = useState([]);
    const [listCategories, setListCategories] = useState([]);
    const [listTypes, setListTypes] = useState([]);
    const [userChoice, setUserChoice] = useState([]);
    const [numberPage, setNumberPage] = useState(1);
    const [start, setStart] = useState('');

    useEffect(() => {
        setStart((numberPage - 1) * PAGE_SIZE);
    }, [numberPage]);

    const handleChecklist = (checked, id) => {
        if (checked) {
            setUserChoice([...userChoice, id]);
        } else {
            setUserChoice(userChoice.filter((item) => item !== id));
        }
    };

    useEffect(() => {
        axios
            .get('http://127.0.0.1:5000/api/categories')
            .then((response) => {
                setListCategories(response.data);
            })
            .catch((error) => {});
        axios
            .get('http://127.0.0.1:5000/api/types')
            .then((response) => {
                setListTypes(response.data);
                setTypeID(response.data[0].id);
            })
            .catch((error) => {
                console.log('that bai');
            });
        axios
            .get('http://127.0.0.1:5000/api/documents')
            .then((response) => {
                setListDocs(response.data);
            })
            .catch((error) => {
                console.log('that bai');
            });
    }, []);

    const handleShowList = () => {
        setShowList(!showList);
    };
    return (
        <>
            <div className={cx('main')}>
                <div className={cx('main__left')}>
                    <div className={cx('title__left')}>
                        <span style={{ fontSize: '15px' }} className="material-icons">
                            bookmarks
                        </span>{' '}
                        <h1> Bộ lọc tìm kiếm</h1>
                    </div>
                    <div className={cx('list__left')}>
                        <h1>Theo danh mục</h1>
                        <div className={cx('check__list', { active: showList })}>
                            <ul>
                                {listCategories.slice(1, 4).map((list) => (
                                    <li key={list.id}>
                                        <input
                                            type="checkbox"
                                            // checked={listID === list.id}
                                            onClick={(e) => handleChecklist(e.target.checked, list.id)}
                                        />{' '}
                                        {list.name}{' '}
                                    </li>
                                ))}
                                {showList &&
                                    listCategories.slice(4, listCategories.length - 1).map((list) => (
                                        <li key={list.id} className={cx('show__list')}>
                                            <input
                                                type="checkbox"
                                                // checked={listID === list.id}
                                                onClick={() => setListID(list.id)}
                                            />{' '}
                                            {list.name}{' '}
                                        </li>
                                    ))}
                            </ul>
                            <h2 onClick={handleShowList} className={cx('showMore')} style={{ marginBottom: '20px' }}>
                                <span className="material-icons">arrow_drop_down</span>
                                Thêm
                            </h2>
                        </div>
                        <h1>Loại tài liệu</h1>
                        <div className={cx('check__type')}>
                            <ul>
                                {listTypes.map((type) => (
                                    <li key={type.id}>
                                        <input
                                            type="checkbox"
                                            checked={typeID === type.id}
                                            onChange={() => setTypeID(type.id)}
                                        />{' '}
                                        {type.name}{' '}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className={cx('rate')}>
                        <h1>Đánh giá</h1>
                        <span className="material-icons" style={{ color: 'orange', fontSize: '16px' }}>
                            star
                        </span>
                        <span className="material-icons" style={{ color: 'orange', fontSize: '16px' }}>
                            star
                        </span>
                        <span className="material-icons" style={{ color: 'orange', fontSize: '16px' }}>
                            star
                        </span>
                        <span className="material-icons" style={{ color: 'orange', fontSize: '16px' }}>
                            star
                        </span>
                        <span className="material-icons" style={{ color: 'orange', fontSize: '16px' }}>
                            star
                        </span>
                    </div>
                </div>
                <div className={cx('main__mid')}>
                    <div className={cx('content__mid')}>
                        {listDocs.slice(start, start + PAGE_SIZE).map(
                            (document, index) =>
                                userChoice.every((v) => document.categories.map((cate) => cate.id).includes(v)) &&
                                typeID === document.document_type_id && (
                                    <div className={cx('item')} key={index}>
                                        <div className={cx('content__left')}>
                                            {console.log(document)}
                                            <img src={document.img_link_download} alt="preview" />
                                        </div>
                                        <div className={cx('content__right')}>
                                            <div className={cx('content__right--title')}>
                                                <Link to={`/Documents/${document.id}`}>
                                                    <h1 style={{ color: '#3379b5' }}>{document.title}</h1>
                                                </Link>
                                            </div>

                                            <div className={cx('content__right--main')}>
                                                <h1> {document.description}</h1>
                                            </div>
                                            <div className={cx('content__right--option')}>
                                                <button>
                                                    <span style={{ fontSize: '20px' }} className="material-icons">
                                                        file_download
                                                    </span>
                                                    <h1>366</h1>
                                                </button>

                                                <button>
                                                    <span
                                                        style={{ fontSize: '20px', marginRight: '5px' }}
                                                        className="material-icons"
                                                    >
                                                        visibility
                                                    </span>
                                                    <h1>3062</h1>
                                                </button>
                                                <div className={cx('buttonDown')}>
                                                    <Link to={`/Documents/${document.id}`}>
                                                        <h1 style={{ color: '#3379b5' }}>{document.title}</h1>
                                                    </Link>
                                                </div>

                                                <div className={cx('content__right--main')}>
                                                    <h1> {document.description}</h1>
                                                </div>
                                                <div className={cx('content__right--option')}>
                                                    <button>
                                                        <span style={{ fontSize: '20px' }} class="material-icons">
                                                            file_download
                                                        </span>
                                                        <h1>366</h1>
                                                    </button>

                                                    <button>
                                                        <span
                                                            style={{ fontSize: '20px', marginRight: '5px' }}
                                                            class="material-icons"
                                                        >
                                                            visibility
                                                        </span>
                                                        <h1>3062</h1>
                                                    </button>
                                                    <div className={cx('buttonDown')}>
                                                        <Link to={`/Documents/${document.id}`}>
                                                            <button type="button">
                                                                <span
                                                                    style={{ color: '#99a8ba', fontSize: '15px' }}
                                                                    class="material-icons"
                                                                >
                                                                    description
                                                                </span>
                                                                Docs
                                                            </button>
                                                        </Link>
                                                    </div>
                                                    <button type="button" class="btn btn-danger">
                                                        <span class="material-icons" style={{ fontSize: '15px' }}>
                                                            save_alt
                                                        </span>{' '}
                                                        Download
                                                    </button>
                                                </div>
                                                <button type="button" className="btn btn-danger">
                                                    <span className="material-icons" style={{ fontSize: '15px' }}>
                                                        save_alt
                                                    </span>{' '}
                                                    Download
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ),
                        )}
                    </div>
                    <div className={cx('paginate')}>
                        <Stack spacing={2}>
                            <Pagination
                                count={Math.ceil(listDocs.length / PAGE_SIZE)}
                                showFirstButton
                                showLastButton
                                onChange={(e, p) => setNumberPage(p)}
                            />
                        </Stack>
                    </div>
                </div>

                <div className={cx('main__right')}>
                    <i>Tìm kiếm tài liệu mới nhất</i>
                    <SearchEngine style={{ marginRight: '10px' }} />
                </div>
            </div>
        </>
    );
};
export default Documents;
