import Button from '@mui/material/Button';
import Textarea from '@mui/joy/Textarea';
import CommentIcon from '@mui/icons-material/Comment';

import get from '~/utils/request/get';
import post from '~/utils/request/post';

const FormComment = ({ setReload, doc_id }) => {
    const SubmitComment = async (e) => {
        e.preventDefault();
        // if (localStorage.getItem('isAuthenticated') !== 'true') return;

        let userId = await get('/current-user', { withCredentials: true }).then((data) =>
            data.is_active ? data.id : '',
        );

        if (userId === '') {
            console.log('Chua dang nhap');
            return;
        }

        if (e.target['comment'].value.trim() === '') {
            alert('Bình luận không được để trống!');
            return;
        }

        post('comments/add', {
            content: e.target['comment'].value,
            user_id: userId,
            document_id: doc_id,
        }).then(() => {
            e.target.reset();
            setReload((prev) => !prev);
        });
    };

    return (
        <form id="form-comment" name="form-comment" onSubmit={SubmitComment}>
            <div className="d-flex">
                <span className="material-icons fs-1">portrait</span>
                <Textarea
                    name="comment"
                    required
                    placeholder="Viết bình luận…"
                    minRows={3}
                    sx={{
                        width: '100%',
                        flex: '1',
                    }}
                    endDecorator={
                        <Button
                            type="submit"
                            form="form-comment"
                            sx={{ marginLeft: 'auto' }}
                            variant="contained"
                            startIcon={<CommentIcon />}
                        >
                            BÌNH LUẬN
                        </Button>
                    }
                />
            </div>
        </form>
    );
};

export default FormComment;
