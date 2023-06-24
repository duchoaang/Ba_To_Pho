import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Detail.module.scss';

import Btn from '@mui/material/Button';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import CommentIcon from '@mui/icons-material/Comment';

import Button from '@/Button';
import request from '~/utils/request';

const cx = classNames.bind(styles);

const Nav = () => (
    <nav
        style={{
            '--bs-breadcrumb-divider': '">"',
        }}
        aria-label="breadcrumb"
        className={cx('breadcrumb')}
    >
        <ol className="breadcrumb">
            <li className="breadcrumb-item">
                <Link to="/">Trang chủ</Link>
            </li>
            <li className="breadcrumb-item">
                <Link to="/documents">Tài liệu</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
                Visual C#
            </li>
        </ol>
    </nav>
);

const SuggestItem = () => {
    return (
        <div className={cx('suggest-item')}>
            <div className={cx('suggest-item-img')}>
                <img src="/src/assets/sgtImg.jpg" alt="" />
            </div>
            <div className={cx('suggest-item-preview')}>
                <div className={'view-count'}>
                    <span className="material-icons">visibility</span>
                    <b>488</b>
                </div>
                <div className={'download-count'}>
                    <span className="material-icons">download</span>
                    <b>12</b>
                </div>
            </div>
            <div className={cx('suggest-item-category')}>
                <span className="material-icons">bookmark</span>
                <span>HTML, CSS</span>
            </div>
            <div className={cx('suggest-item-title')}>
                <b>Full code Đồ án quản lí nhà hàng</b>
            </div>
            <div className={cx('suggest-item-star')}>
                <span className="material-icons">star_rate</span>
                <span className="material-icons">star_rate</span>
                <span className="material-icons">star_rate</span>
                <span className="material-icons">star_rate</span>
                <span className="material-icons">star_outline</span>
            </div>
        </div>
    );
};

const Suggestion = () => {
    return (
        <div className={cx('suggest', 'mt-3')}>
            <h5>
                <b>GỢI Ý CHO BẠN</b>
            </h5>
            <div className="d-flex flex-wrap" style={{ gap: '15px' }}>
                <SuggestItem />
                <SuggestItem />
                <SuggestItem />
                <SuggestItem />
            </div>
        </div>
    );
};

const Comment = () => {
    return (
        <div className="d-flex p-2 mt-2 border rounded">
            <span className="material-icons fs-1">portrait</span>
            <div className="flex-fill">
                <div className="d-flex justify-content-between">
                    <span className="user-name">Quang Huy</span>
                    <div className="d-flex g-2">
                        <span>22:06 - 28/10/2022</span>
                        <span>Trả lời</span>
                        <span>Thích</span>
                    </div>
                </div>
                <div className="cmt">visual studio 2012 sql server 2014 có chạy đc ko ạ</div>
            </div>
        </div>
    );
};

const CommentHeader = () => {
    return (
        <div className={cx('comment', 'mt-3')}>
            <h5>
                <b>BÌNH LUẬN</b>
            </h5>
            <form>
                <div className="d-flex">
                    <span className="material-icons fs-1">portrait</span>
                    <textarea className="w-100" />
                </div>
                <div className="text-end mt-3">
                    <Btn variant="contained" startIcon={<CommentIcon />}>
                        BÌNH LUẬN
                    </Btn>
                </div>
            </form>
            <div>
                <Comment />
                <Comment />
                <Comment />
                <Comment />
            </div>
        </div>
    );
};

const Detail = () => {
    const [data, setData] = useState({
        title: '',
        imgUrl: '/src/assets/docImg.jpg',
        gemCost: 0,
        categories: [],
        description: '',
    });
    const location = useLocation();
    useEffect(() => {
        let id = location.pathname.split('/')[2];
        request.get(`api/documents/${id}`).then((rawData) =>
            setData({
                title: rawData.title,
                imgUrl: rawData.cloudinary_image_secure_url,
                // imgUrl: 'https://www.dropbox.com/s/zbb2popr17yjlxd/heheheheheheheh_2023-06-24%2022%3A19%3A22.129924.png?dl=1',
                gemCost: rawData.gem_cost,
                categories: rawData.categories,
                description: rawData.content,
            }),
        );
    }, [location]);

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-8">
                    <Nav />
                    <div className="info">
                        <div className={cx('doc-info', 'row')}>
                            <div className="col-md-4 border rounded p-2">
                                <img src={data.imgUrl} className="w-100" alt="" />
                            </div>
                            <div className={cx('doc-details', 'col-md-8')}>
                                <div className="doc-details-title">
                                    <h4>
                                        <b>{data.title}</b>
                                    </h4>
                                    <div className="d-flex justify-content-between">
                                        <div></div>
                                        <div></div>
                                    </div>
                                    <hr />
                                    <div className="d-flex justify-content-between">
                                        <div>
                                            <span>Phí tải:</span>
                                            <span className="ms-2">{data.gemCost} CodeGem</span>
                                        </div>
                                        <Btn variant="outlined" color="error" startIcon={<FavoriteBorderIcon />}>
                                            YÊU THÍCH
                                        </Btn>
                                    </div>
                                    <hr />
                                    <div className="d-flex justify-content-between">
                                        <div>
                                            <div className="d-flex g-2">
                                                <span>Danh mục</span>
                                                <span>{data.categories.map((c) => c.name).join(', ')}</span>
                                            </div>
                                            <div className="d-flex g-2">
                                                <span>Nhóm code</span>
                                                <span>Code tham khảo</span>
                                            </div>
                                            <div className="d-flex g-2">
                                                <span>Ngày đăng</span>
                                                <span>29-12-2016</span>
                                            </div>
                                            <div className="d-flex g-2">
                                                <span>Loại file</span>
                                                <span>Full code</span>
                                            </div>
                                            <div className="d-flex g-2">
                                                <span>Dung lượng</span>
                                                <span>26.7 MB</span>
                                            </div>
                                        </div>
                                        <Btn variant="contained" startIcon={<FileDownloadIcon />}>
                                            DOWNLOAD
                                        </Btn>
                                    </div>
                                    <hr />
                                </div>
                            </div>
                        </div>
                        <div className={cx('other-info', 'row')}>
                            <div className="col-md-4">
                                <span>Xem thêm</span>
                            </div>
                            <div className="col-md-8"></div>
                        </div>
                    </div>
                    <div className={cx('description')}>
                        <p className={cx('description-text')}>{data.description}</p>
                    </div>
                    <Suggestion />
                    <CommentHeader />
                </div>
                <div className="col-md-4">
                    <section className="border border-warning"></section>
                </div>
            </div>
        </div>
    );
};

export default Detail;
