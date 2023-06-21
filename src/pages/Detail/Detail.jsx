import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Detail.module.scss';

import Button from '@/Button';
import { useEffect, useState } from 'react';

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
                    <Button leftIcon={<span className="material-icons">comment</span>}>BÌNH LUẬN</Button>
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
    const [data, setData] = useState(null);
    const location = useLocation();
    useEffect(() => {
        console.log(location.pathname.split('/')[2]);
    }, [location]);
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-8">
                    <Nav />
                    <div className="info">
                        <div className={cx('doc-info', 'row')}>
                            <div className="col-md-4 border rounded p-2">
                                <img src="/src/assets/docImg.jpg" className="w-100" alt="" />
                            </div>
                            <div className={cx('doc-details', 'col-md-8')}>
                                <div className="doc-details-title">
                                    <h4>
                                        <b>Quản lý khách sạn giao diện đẹp full code C# Winform + Csdl Sqlserver</b>
                                    </h4>
                                    <div className="d-flex justify-content-between">
                                        <div></div>
                                        <div></div>
                                    </div>
                                    <hr />
                                    <div className="d-flex justify-content-between">
                                        <div>
                                            <span>Phí tải:</span>
                                            <span className="ms-2">30 Xu</span>
                                            <span className="ms-2">(1 Xu = 1.000đ)</span>
                                        </div>
                                        <Button leftIcon={<span className="material-icons">favorite</span>}>
                                            YÊU THÍCH
                                        </Button>
                                    </div>
                                    <hr />
                                    <div className="d-flex justify-content-between">
                                        <div>
                                            <div className="d-flex g-2">
                                                <span>Danh mục</span>
                                                <span>Visual C#</span>
                                            </div>
                                            <div className="d-flex g-2">
                                                <span>Thể loại</span>
                                                <span>Phần mềm - Ứng dụng</span>
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
                                        <Button leftIcon={<span className="material-icons">download</span>}>
                                            DOWNLOAD
                                        </Button>
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
                        <p className={cx('description-text')}>
                            Source code quản lý khách sạn đầy đủ các nghiệp vụ được viết bằng ngôn ngữ C# WinForm,code
                            lập trình dễ hiểu, thích hợp với những bạn muốn tìm hiểu, tham khảo mã nguồn để lập trình về
                            C#,làm đồ án,làm bài tập lớn,làm luận văn tốt nghiệp,làm dự án cho cá nhân,công ty,khách sạn
                            v.v...
                        </p>
                        <div>
                            <h5>
                                <b>HÌNH ẢNH DEMO</b>
                            </h5>
                            <div className="text-center">
                                <img className={cx('description-img')} src="/src/assets/detImg-1.jpg" alt="" />
                                <img className={cx('description-img')} src="/src/assets/detImg-2.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className={cx('action', 'rounded border-warning mt-3')}>
                        <div className="col-md-9">
                            <div>
                                <h5>LINK DOWNLOAD</h5>
                            </div>
                            <div></div>
                        </div>
                        <div className="col-md-3 d-flex flex-column align-items-center" style={{ gap: '5px' }}>
                            <Button leftIcon={<span className="material-icons">download</span>}>
                                <b>DOWNLOAD</b>
                                <br />
                                <span>(30 Xu)</span>
                            </Button>
                            <Button>
                                <span>Bạn có code hay</span>
                                <br />
                                <b className="d-flex align-items-center">
                                    <span className="material-icons me-2">cloud_upload</span>ĐĂNG BÁN NGAY
                                </b>
                            </Button>
                        </div>
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
