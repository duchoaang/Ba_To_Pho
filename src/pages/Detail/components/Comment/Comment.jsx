import { lazy, useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Comment.module.scss';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import post from '~/utils/request/post';

const IconButton = lazy(() => import('@mui/material/IconButton'));
const DeleteForeverIcon = lazy(() => import('@mui/icons-material/DeleteForever'));

const cx = classNames.bind(styles);
const Comment = ({ userName, content, created_date, userId, cmtId, setReload }) => {
    const [open, setOpen] = useState(false);

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
                    marginTop: '6px',
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
                                setOpen(true);
                            }}
                        >
                            <DeleteForeverIcon fontSize="inherit" />
                        </IconButton>
                    </div>
                </div>
                <div className="text-break">{content}</div>
            </div>
            <Dialog
                open={open}
                onClose={() => {
                    setOpen(false);
                }}
            >
                <DialogTitle id="alert-dialog-title">{'Cảnh báo!!!!'}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Bạn có chắc chắn muốn xóa bình luận này?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button
                        onClick={() => {
                            setOpen(false);
                        }}
                        autoFocus
                    >
                        Hủy
                    </Button>
                    <Button
                        onClick={() => {
                            post('comments/remove', {
                                comment_id: cmtId,
                            }).then(() => {
                                setReload((prev) => !prev);
                            });
                        }}
                    >
                        Xóa
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default Comment;
