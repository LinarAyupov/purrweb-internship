import React from 'react';
import EditIcon from '../icons/EditIcon';
const CardComment = (props) => {
  const comInput = React.createRef();

  const addComment = () => {
    if (!comInput.current || comInput.current.value === '') {
      return props.deleteComment();
    } else {
      props.addCommentText(comInput.current.value);
    }
  };

  return (
    <div className="card-info__comment-wrap">
      {props.isCommentActive ? (
        <div className="card_info-comment-item">
          <div className="card-info__comment-body">
            <div className="card-info__comment-author">{props.authorName}</div>
            <div className="card-info__comment-text">{props.commentText}</div>
          </div>
          <div className="card-info_comment-icons">
            <span className="edit-icon comments" onClick={props.editComment}>
              <EditIcon />
            </span>
            <span className="delete-icon comments" onClick={props.deleteComment}>
              &times;
            </span>
          </div>
        </div>
      ) : (
        <input
          type="text"
          ref={comInput}
          defaultValue={props.commentText}
          onBlur={() => setTimeout(addComment, 200)}
          placeholder="Write a comments..."
          className="card-info__comment-input"
          autoFocus={true}
          onKeyDown={(e) => {
            if (e.keyCode === 13) addComment();
          }}
        />
      )}
    </div>
  );
};

export default CardComment;
