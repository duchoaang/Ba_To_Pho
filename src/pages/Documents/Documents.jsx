import styles from './Documents.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
import { useState, useEffect } from 'react';
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>;

const lists = [
    {
        id: 1,
        context: 'Khoa hoc',
    },
    {
        id: 2,
        context: 'Ngoai ngu',
    },
    {
        id: 3,
        context: 'Lich su',
    },
];
const types = [
    {
        id: 1,
        context: 'Excel',
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
        typeID: 2,
    },
];

const Documents = () => {
    const [listID, setListID] = useState(1);
    const [typeID, setTypeID] = useState(3);
    useEffect(() => {}, []);
    return (
        <>
            <div className={cx('main')}>
                <div className={cx('main__left')}>
                    <div className={cx('title__left')}>
                        <span class="material-icons">bookmarks</span> <h1> Bộ lọc tìm kiếm</h1>
                    </div>
                    <div className={cx('list__left')}>
                        <h1>Theo danh mục</h1>
                        <div className={cx('check__list')}>
                            <ul>
                                {lists.map((list) => (
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
                        </div>
                        <h1>Loại tài liệu</h1>
                        <div className={cx('check__type')}>
                            <ul>
                                {types.map((type) => (
                                    <li key={type.id}>
                                        <input
                                            type="checkbox"
                                            checked={typeID === type.id}
                                            onClick={() => setTypeID(type.id)}
                                        />{' '}
                                        {type.context}{' '}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={cx('main__mid')}>
                    {documents.map(
                        (document) =>
                            listID === document.listID &&
                            typeID === document.typeID && (
                                <>
                                    <div className={cx('item')} key={document.id}>
                                        <div className={cx('content__left')}>
                                            <img src={document.image} alt="preview" width={170} />
                                        </div>
                                        <div className={cx('content__right')}>
                                            <div className={cx('content__right--title')}>
                                                <h1>Tieu luan</h1>
                                            </div>
                                            <div className={cx('content__right--main')}>
                                                <h1> {document.context}</h1>
                                            </div>
                                            <div className={cx('content__right--option')}>
                                                <button>Docs</button>
                                                <button>Download</button>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            ),
                    )}
                </div>
                <div className={cx('main__right')}>789</div>
            </div>
        </>
    );
};
export default Documents;
