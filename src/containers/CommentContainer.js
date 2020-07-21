import React from 'react';
import CardComment from '../components/CardComment/CardComment';
import { editComment, deleteComment, setCardCommentText } from '../actions/commentActions';
import { connect } from 'react-redux';
class CommentContainer extends React.Component {
  addCommentText = (comText) => {
    let commentText = comText;
    const { colId, cardId, commentId } = this.props;
    this.props.setCardCommentText({ colId, cardId, commentId, commentText });
  };

  editComment = () => {
    const { colId, cardId, commentId } = this.props;
    this.props.editComment({ colId, cardId, commentId });
  };

  deleteComment = () => {
    const { colId, cardId, commentId } = this.props;
    this.props.deleteComment({ colId, cardId, commentId });
  };

  render() {
    return (
      <CardComment
        commentText={this.props.commentText}
        isCommentActive={this.props.isCommentActive}
        authorName={this.props.authorName}
        addCommentText={this.addCommentText}
        deleteComment={this.deleteComment}
        editComment={this.editComment}
      />
    );
  }
}

const mapDispatchToProps = {
  setCardCommentText,
  editComment,
  deleteComment,
};

export default connect(null, mapDispatchToProps)(CommentContainer);
