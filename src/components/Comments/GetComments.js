import { useDispatch, useSelector } from 'react-redux';
import { getCommentsFetch } from './commentsActions';

function GetComments() {
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.comments.comments);
  return (
    <div className="App">
      <button className="button" onClick={() => dispatch(getCommentsFetch())}>
        Get Comments:
      </button>
      <div>
        {comments.map((comment) => (
          <div key={comment.id}>
            {comment.email} : {comment.name}
          </div>
        ))}
      </div>
    </div>
  );
}

export default GetComments;
