import { lazy } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Comment.module.scss';

import Avatar from '@mui/material/Avatar';

import post from '~/utils/request/post';

const IconButton = lazy(() => import('@mui/material/IconButton'));
const DeleteForeverIcon = lazy(() => import('@mui/icons-material/DeleteForever'));

const cx = classNames.bind(styles);
const Comment = ({ userName, content, created_date, userId, cmtId, setReload }) => {
    const stringToColor = (string) => {
        let hash = 0;
        let i;

        for (i = 0; i < string.length; i += 1) {
            hash = string.charCodeAt(i) + ((hash << 5) - hash);
        }

        let color = '#';

        for (i = 0; i < 3; i += 1) {
            const value = (hash >> (i * 8)) & 0xff;
            color += `00${value.toString(16)}`.slice(-2);
        }

        return color;
    };

    return (
        <div className={cx('wrapper')}>
            <Avatar
                sx={{
                    bgcolor: stringToColor(userName),
                    display: 'inline-flex',
                }}
            >
                {userName[0].toUpperCase()}
            </Avatar>
            <div className={cx('inner')}>
                <div className={cx('info')}>
                    <Link to={`/profile/${userId}`}>
                        <b className="name">{userName}</b>
                    </Link>
                    <div className="d-flex align-items-center g-2 float-end">
                        <span>
                            {(() => {
                                let d = new Date(created_date);
                                return (
                                    ('0' + d.getHours()).slice(-2) +
                                    ':' +
                                    ('0' + d.getMinutes()).slice(-2) +
                                    ' - ' +
                                    ('0' + d.getDate()).slice(-2) +
                                    '/' +
                                    ('0' + (d.getMonth() + 1)).slice(-2) +
                                    '/' +
                                    d.getFullYear()
                                );
                            })()}
                        </span>
                        <IconButton
                            size="small"
                            onClick={() => {
                                post('comments/remove', {
                                    comment_id: cmtId,
                                }).then(() => {
                                    setReload((prev) => !prev);
                                });
                            }}
                        >
                            <DeleteForeverIcon fontSize="inherit" />
                        </IconButton>
                    </div>
                </div>
                <div>{content}</div>
            </div>
        </div>
    );
};

export default Comment;
