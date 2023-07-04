import Button from '@mui/material/Button';
import Textarea from '@mui/joy/Textarea';
import CommentIcon from '@mui/icons-material/Comment';

import { get, post } from '~/utils/request';

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
                    pattern="\S(.*\S)?"
                    placeholder="Type something here…"
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
