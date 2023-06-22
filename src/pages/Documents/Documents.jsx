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



const PAGE_SIZE = 1;

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
    console.log((numberPage-1) * PAGE_SIZE)
    // console.log(start);
    // // console.log(listID);
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
                // console.log(response.data)
            })
            .catch((error) => {
                console.log(123);
            });
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
    
    console.log(typeID)

    const handleShowList = () => {
        setShowList(!showList);
    };
    return (
        <>
            <div className={cx('main')}>
                <div className={cx('main__left')}>
                    <div className={cx('title__left')}>
                        <span style={{ fontSize: '15px' }} class="material-icons">
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
                                <span class="material-icons">arrow_drop_down</span>
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
                        <span class="material-icons" style={{ color: 'orange', fontSize: '16px' }}>
                            star
                        </span>
                        <span class="material-icons" style={{ color: 'orange', fontSize: '16px' }}>
                            star
                        </span>
                        <span class="material-icons" style={{ color: 'orange', fontSize: '16px' }}>
                            star
                        </span>
                        <span class="material-icons" style={{ color: 'orange', fontSize: '16px' }}>
                            star
                        </span>
                        <span class="material-icons" style={{ color: 'orange', fontSize: '16px' }}>
                            star
                        </span>
                    </div>
                </div>
                <div className={cx('main__mid')}>
                    <div className={cx('content__mid')}>
                        {listDocs.slice(start, (start + PAGE_SIZE)).map(
                            (document, index) =>
                                userChoice.every((v) => document.categories.map((cate) => cate.id).includes(v)) &&
                                typeID === document.document_type_id &&
                                 (
                                    
                                    <>
                                    {
                                        console.log(document.document_type_id)
                                    }
                                        <div className={cx('item')} key={index}>
                                            <div className={cx('content__left')}>
                                                <img src={document.img} alt="preview" width={170} />
                                            </div>
                                            <div className={cx('content__right')}>
                                                <div className={cx('content__right--title')}>
                                                    <Link to="/Documents/1"><h1 style={{ color: '#3379b5' }}>{document.content}</h1></Link>
                                                </div>
                                                <div className={cx('content__right--main')}>
                                                    <h1> {document.title}</h1>
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
                                                    <button type="button" class="btn btn-success">
                                                        <span
                                                            style={{ color: '#99a8ba', fontSize: '15px' }}
                                                            class="material-icons"
                                                        >
                                                            description
                                                        </span>
                                                        Docs
                                                    </button>
                                                    <button type="button" class="btn btn-danger">
                                                        <span class="material-icons" style={{ fontSize: '15px' }}>
                                                            save_alt
                                                        </span>{' '}
                                                        Download
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </>
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
                    <i>Tài liệu nhiều người ưa chuộng nhất gần đây</i>
                </div>
            </div>
        </>
    );
};
export default Documents;
