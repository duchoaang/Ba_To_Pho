import styles from './Documents.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
import { useState, useEffect } from 'react';
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>;
import ReactPaginate from 'react-paginate';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const lists = [
    {
        id: 1,
        context: 'Khoa học',
    },
    {
        id: 2,
        context: 'Ngoại ngữ',
    },
    {
        id: 3,
        context: 'Lịch sử',
    },
];
const moreList = [
    {
        id: 4,
        context: 'Hóa học',
    },
    {
        id: 5,
        context: 'Vật lý',
    },
    {
        id: 6,
        context: 'Tin học',
    },
];
const types = [
    {
        id: 1,
        context: 'PPT',
    },
    {
        id: 2,
        context: 'PDF',
    },
    {
        id: 3,
        context: 'Word',
    },
];
const documents = [
    {
        id: 1,
        image: 'https://gcs.vn/wp-content/uploads/2021/02/img_601d3e4f4f863.png',
        context:
            'Khoa hoc Khoa hoc Khoa hoc Khoa hoc Khoa hoc Khoa hoc Khoa hoc Khoa hoc Khoa hoc Khoa hoc Khoa hoc Khoa hoc Khoa hoc Khoa hoc Khoa hoc Khoa hoc Khoa hoc Khoa hoc Khoa hoc Khoa hoc Khoa hoc Khoa hoc Khoa hoc Khoa hoc Khoa hoc Khoa hoc ',
        listID: 1,
        typeID: 1,
    },
    {
        id: 2,
        image: 'https://gcs.vn/wp-content/uploads/2021/02/img_601d3e4f4f863.png',
        context:
            'Ngoai ngu Ngoai ngu Ngoai ngu Ngoai ngu Ngoai ngu Ngoai ngu Ngoai ngu Ngoai ngu Ngoai ngu Ngoai ngu Ngoai ngu Ngoai ngu Ngoai ngu Ngoai ngu Ngoai ngu Ngoai ngu Ngoai ngu Ngoai ngu Ngoai ngu Ngoai ngu Ngoai ngu Ngoai ngu Ngoai ngu Ngoai ngu Ngoai ngu Ngoai ngu Ngoai ngu Ngoai ngu Ngoai ngu ',
        listID: 2,
        typeID: 2,
    },
    {
        id: 3,
        image: 'https://gcs.vn/wp-content/uploads/2021/02/img_601d3e4f4f863.png',
        context:
            'Lich su Lich su Lich su Lich su Lich su Lich su Lich su Lich su Lich su Lich su Lich su Lich su Lich su Lich su Lich su Lich su Lich su Lich su Lich su Lich su Lich su Lich su Lich su Lich su Lich su Lich su Lich su Lich su Lich su Lich su Lich su Lich su Lich su Lich su Lich su Lich su Lich su Lich su Lich su Lich su Lich su Lich su Lich su Lich su Lich su Lich su ',
        listID: 3,
        typeID: 3,
    },
    {
        id: 4,
        image: 'https://gcs.vn/wp-content/uploads/2021/02/img_601d3e4f4f863.png',
        context:
            'Lich su Lich su Lich su Lich su Lich su Lich su Lich su Lich su Lich su Lich su Lich su Lich su Lich su Lich su Lich su Lich su Lich su Lich su Lich su Lich su Lich su Lich su Lich su Lich su Lich su Lich su Lich su Lich su Lich su Lich su Lich su Lich su Lich su Lich su Lich su Lich su Lich su Lich su Lich su Lich su Lich su Lich su Lich su Lich su Lich su Lich su ',
        listID: 3,
        typeID: 3,
    },
    {
        id: 5,
        image: 'https://gcs.vn/wp-content/uploads/2021/02/img_601d3e4f4f863.png',
        context:
            'Lich su Lich su Lich su Lich su Lich su Lich su Lich su Lich su Lich su Lich su Lich su Lich su Lich su Lich su Lich su Lich su Lich su Lich su Lich su Lich su Lich su Lich su Lich su Lich su Lich su Lich su Lich su Lich su Lich su Lich su Lich su Lich su Lich su Lich su Lich su Lich su Lich su Lich su Lich su Lich su Lich su Lich su Lich su Lich su Lich su Lich su ',
        listID: 3,
        typeID: 3,
    },
    {
        id: 6,
        image: 'https://gcs.vn/wp-content/uploads/2021/02/img_601d3e4f4f863.png',
        context:
            'Lich su Lich su Lich su Lich su Lich su Lich su Lich su Lich su Lich su Lich su Lich su Lich su Lich su Lich su Lich su Lich su Lich su Lich su Lich su Lich su Lich su Lich su Lich su Lich su Lich su Lich su Lich su Lich su Lich su Lich su Lich su Lich su Lich su Lich su Lich su Lich su Lich su Lich su Lich su Lich su Lich su Lich su Lich su Lich su Lich su Lich su ',
        listID: 3,
        typeID: 3,
    },
];
const rates = [];

const Documents = () => {
    const [listID, setListID] = useState('');
    const [typeID, setTypeID] = useState('');
    const [showList, setList] = useState(false);
    const [listDocs, setListDocs] = useState([]);
    const [listCategories, setListCategories] = useState([]);
    const [listTypes, setListTypes] = useState([]);
    const [userChoice, setUserChoice] = useState([]);
    console.log(listID)
    useEffect(() => {
        setUserChoice(...userChoice, listID);
    }, [listID]);
    console.log(userChoice.length);

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
                // console.log(response.data);
            })
            .catch((error) => {
                console.log('that bai');
            });
    }, []);
    useEffect(() => {
        axios
            .get('http://127.0.0.1:5000/api/documents')
            .then((response) => {
                setListDocs(response.data);
                // console.log(response.data);
            })
            .catch((error) => {
                console.log('that bai');
            });
    }, []);

    // const showDocss = () => {
    //     listDocs.map((doc, index) => console.log(doc.id))
    // }
    const handlePageClick = () => {};
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
                        <div className={cx('check__list')}>
                            <ul>
                                {listCategories.map((list) => (
                                    <li key={list.id}>
                                        <input
                                            type="checkbox"
                                            // checked={listID === list.id}
                                            onClick={() => setListID(list.id)}
                                        />{' '}
                                        {list.name}{' '}
                                    </li>
                                ))}
                                {showList &&
                                    moreList.map((list) => (
                                        <li key={list.id}>
                                            <input
                                                type="checkbox"
                                                checked={listID === list.id}
                                                onClick={() => setListID(list.id)}
                                            />{' '}
                                            {list.context}{' '}
                                        </li>
                                    ))}
                            </ul>
                            <h2
                                onClick={() => setList(!showList)}
                                className={cx('showMore')}
                                style={{ marginBottom: '20px' }}
                            >
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
                        {listDocs.map(
                            (document, index) =>
                                document.categories[0].id === listID &&
                                typeID === document.document_type_id && (
                                    <>
                                        <div className={cx('item')} key={index}>
                                            <div className={cx('content__left')}>
                                                <img src={document.img} alt="preview" width={170} />
                                            </div>
                                            <div className={cx('content__right')}>
                                                <div className={cx('content__right--title')}>
                                                    <h1 style={{ color: '#3379b5' }}>{document.content}</h1>
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
                        <ReactPaginate
                            nextLabel="Sau >"
                            onPageChange={handlePageClick}
                            pageRangeDisplayed={3}
                            marginPagesDisplayed={2}
                            pageCount={7}
                            previousLabel="< Trước"
                            pageClassName="page-item"
                            pageLinkClassName="page-link"
                            previousClassName="page-item"
                            previousLinkClassName="page-link"
                            nextClassName="page-item"
                            nextLinkClassName="page-link"
                            breakLabel="..."
                            breakClassName="page-item"
                            breakLinkClassName="page-link"
                            containerClassName="pagination"
                            activeClassName="active"
                            renderOnZeroPageCount={null}
                        />
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
