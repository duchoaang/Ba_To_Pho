import classNames from 'classnames/bind';
import styles from './SuggestSection.module.scss';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import Rating from '@mui/material/Rating';
import Chip from '@mui/material/Chip';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DownloadIcon from '@mui/icons-material/Download';
import BookmarkIcon from '@mui/icons-material/Bookmark';

const cx = classNames.bind(styles);

const SuggestItem = () => {
    return (
        <Card className={cx('card')}>
            <CardActionArea>
                <img className={cx('card-img')} src="/src/assets/sgtImg.jpg" alt="" />
                <CardContent sx={{ padding: 0 }}>
                    <div className={cx('card-info')}>
                        <Chip
                            sx={{ width: '49%' }}
                            icon={<VisibilityIcon />}
                            size="small"
                            color="success"
                            label="488"
                        />
                        <Chip sx={{ width: '49%' }} icon={<DownloadIcon />} size="small" color="success" label="12" />
                    </div>
                    <div className={cx('card-category')}>
                        <BookmarkIcon />
                        <span>HTML, CSS</span>
                    </div>
                    <b className="d-block px-1">Full code Đồ án quản lí nhà hàng</b>
                    <Rating value={Math.round(Math.random() * 50) / 10} precision={0.1} readOnly />
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default SuggestItem;
