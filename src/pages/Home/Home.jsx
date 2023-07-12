import styles from './Home.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
import { useState, useEffect } from 'react';
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>;
import { Link } from 'react-router-dom';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
// import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import get from '~/utils/request/get';

const Home = () => {
    const [showCourse, setCourse] = useState(false);

    const [newDocs, setNewDocs] = useState([]);
    const [downDocs, setDownDocs] = useState(false);

    const [popularDocs, setPopularDocs] = useState([]);
    useEffect(() => {
        get('api/popular-new-documents').then((res) => {
            setNewDocs(res.new);
            setPopularDocs(res.popular);
        });
    }, []);

    return (
        <div className={cx('mainHome')}>
            <div className={cx('banner')}>
                <img src="src/assets/banner1.png" alt="w-100" />
            </div>

            <div className={cx('ScrollList_docs')}>
                <div className={cx('titleDocs')}>
                    <h1>Tài liệu phổ biến</h1>
                </div>
                <div className={cx('cardDocs')}>
                    {console.log(popularDocs)}
                    {true &&
                        popularDocs.slice(0, 4).map((docs, index) => (
                            <Card
                                key={index}
                                className={cx('subCard')}
                                sx={{ width: '20%', height: '350px', position: 'relative' }}
                            >
                                <Link to={`/Documents/${docs.id}`}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            alt="green iguana"
                                            height="100"
                                            image={docs.img_link_download}
                                        />
                                        <CardContent>
                                            <Typography
                                                style={{ height: '70px' }}
                                                gutterBottom
                                                variant="h5"
                                                component="div"
                                            >
                                                {docs.title}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {docs.description.slice(0, 100)}...
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Link>
                                <CardActions style={{ position: 'absolute', bottom: '0px' }}>
                                    {/* <Button size="small">Share</Button> */}
                                    <Button size="small">Xem chi tiết</Button>
                                </CardActions>
                            </Card>
                        ))}
                </div>
            </div>
            <div className={cx('ScrollList_docs')}>
                <div className={cx('titleDocs')}>
                    <h1>Tài liệu mới nhất</h1>
                </div>
                <div className={cx('cardDocs')}>
                    {console.log(popularDocs)}
                    {true &&
                        newDocs.slice(0, 4).map((docs, index) => (
                            <Card
                                className={cx('subCard')}
                                sx={{ width: '20%', height: '350px', position: 'relative' }}
                            >
                                <Link to={`/Documents/${docs.id}`}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            alt="green iguana"
                                            height="100"
                                            image={docs.img_link_download}
                                        />
                                        <CardContent>
                                            <Typography
                                                style={{ height: '70px' }}
                                                gutterBottom
                                                variant="h5"
                                                component="div"
                                            >
                                                {docs.title}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {docs.description.slice(0, 100)}...
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Link>
                                <CardActions style={{ position: 'absolute', bottom: '0px' }}>
                                    {/* <Button size="small">Share</Button> */}
                                    <Button size="small">Xem chi tiết</Button>
                                </CardActions>
                            </Card>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default Home;
