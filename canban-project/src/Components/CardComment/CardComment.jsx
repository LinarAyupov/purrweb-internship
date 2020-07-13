import React from "react"

const CardComment = (props) => {
  const comInput = React.createRef()
  const addComment = () => {
    let comId = props.commentId
    if (!comInput.current || comInput.current.value === "") {
      return props.deleteCardComment(props.commentId)

    } else {
      props.addCommentText(comInput.current.value, comId)
    }
  }
  const editComment = () => {
    props.editCardComment(props.commentId)
  }
  const deleteComment = () => {
    props.deleteCardComment(props.commentId)
  }
  return (
    <div className="card-info__comment-wrap">
      {props.isCommentActive ?
        <div className="card_info-comment-item">
          <div className="card-info__comment-body">
            <div className="card-info__comment-author">{props.authorName}</div>
            <div className="card-info__comment-text">{props.commentText}</div>
          </div>
          <div className="card-info_comment-icons">
            <span className="edit-icon comments" onClick={editComment}></span>
            <span className="delete-icon comments" onClick={deleteComment}>&times;</span>
          </div>
        </div> :
        <input type="text"
          ref={comInput}
          defaultValue={props.commentText}
          onBlur={() => setTimeout(addComment, 200)}
          placeholder="Write a comments..."
          className="card-info__comment-input"
          autoFocus={true}
          onKeyDown={e => { if (e.keyCode === 13) addComment() }}
        />}
    </div>
  )
}

export default CardComment