import { useForm } from 'react-hook-form';
import { Button, TextField } from '@mui/material';
import { addComment } from 'app/services/CommentService';
import './styles.css';
export default function AddComment(props) {
  const { register, handleSubmit } = useForm();

  const onSubmit = data => {
    const comment = data.comment;
    const postId = props.postId;
    const userId = 1;
    console.log(comment + 'komentari');
    console.log(postId + 'id posta');
    if (comment !== '') {
      addComments(comment, userId, postId);
    } else {
      return console.log('nema nista');
    }
  };
  const addComments = async (content, userId, postId) => {
    const addedComm = await addComment(content, userId, postId);
    return addedComm;
  };
  return (
    <div>
      <nav aria-label="secondary mailbox folders">
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            className="width-input"
            {...register('comment')}
            label="comment"
          />
          <div>
            <Button type="submit" variant="contained" color="primary">
              add comment
            </Button>
          </div>
        </form>
      </nav>
    </div>
  );
}
