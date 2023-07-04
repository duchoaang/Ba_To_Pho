import { Link } from 'react-router-dom';

import { post } from '~/utils/request';

const Comment = ({ userName, content, created_date, userId, cmtId, setReload }) => {
    return (
        <div className="p-2 mt-2 border rounded">
            <span className="material-icons fs-1">portrait</span>
            <div className="flex-fill d-inline-block">
                <div className="d-flex justify-content-between">
                    <Link to={`/profile/${userId}`}>
                        <span className="name">{userName}</span>
                    </Link>
                    <div className="d-flex g-2 float-end">
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
                        <span>Trả lời</span>
                        <span>Thích</span>
                        <span
                            onClick={() => {
                                post('comments/remove', {
                                    comment_id: cmtId,
                                }).then(() => {
                                    setReload((prev) => !prev);
                                });
                            }}
                        >
                            Xoa
                        </span>
                    </div>
                </div>
                <div>{content}</div>
            </div>
        </div>
    );
};

export default Comment;
