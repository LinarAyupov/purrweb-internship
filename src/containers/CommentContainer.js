import React from 'react';
import CardComment from '../components/CardComment/CardComment';
import { editCardComment, deleteComment, setCardCommentText } from '../actions/commentActions';
import { connect } from 'react-redux';
class CommentContainer extends React.Component {
  addCommentText = (comText) => {
    let commentText = comText;
    const colId = this.props.colId;
    const cardId = this.props.cardId;
    this.props.setCardCommentText(colId, cardId, this.props.comId, commentText);
  };

  editCardComment = () => {
    const colId = this.props.colId;
    const cardId = this.props.cardId;
    this.props.editCardComment(colId, cardId, this.props.comId);
  };

  deleteCardComment = () => {
    const colId = this.props.colId;
    const cardId = this.props.cardId;
    this.props.deleteComment(colId, cardId, this.props.comId);
  };

  render() {
    return (
      <CardComment
        commentText={this.props.commentText}
        isCommentActive={this.props.isCommentActive}
        authorName={this.props.authorName}
        addCommentText={this.addCommentText}
        deleteCardComment={this.deleteCardComment}
        editCardComment={this.editCardComment}
      />
    );
  }
}

const mapDispatchToProps = {
  setCardCommentText,
  editCardComment,
  deleteComment,
};

export default connect(null, mapDispatchToProps)(CommentContainer);
