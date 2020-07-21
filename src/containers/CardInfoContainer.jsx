import React from 'react';
import CardInfo from '../components/CardInfo';
import { connect } from 'react-redux';
import { setCardDescr, editCardDescr, deleteCardDescr } from '../actions/cardsActions';
import { setComment } from '../actions/commentActions';
import { getCommentsList, getCardCommentsList } from '../selectors/selectors';

class CardInfoContainer extends React.Component {
  constructor(props) {
    super(props);
    this.descrInputRef = React.createRef();
  }

  addDescription = () => {
    let descrText = this.descrInputRef.current.value;
    const { cardId, colId } = this.props;
    this.props.setCardDescr({ descrText, cardId, colId });
  };

  editDescription = () => {
    const { cardId, colId } = this.props;
    this.props.editCardDescr({ cardId, colId });
  };

  deleteDescription = () => {
    const { cardId, colId } = this.props;
    this.props.deleteCardDescr({ cardId, colId });
  };

  getCommentActiveState = () => {
    let commentActive = true;
    if (this.props.commentsList.length !== 0) {
      commentActive = this.props.commentsList[this.props.commentsList.length - 1].isCommentActive;
    }
    return commentActive;
  };

  addComment = () => {
    let newCommentId = 0;
    this.props.commentsList.forEach((comment) => {
      let commentId = Number(comment.commentId);
      if (commentId >= newCommentId) {
        newCommentId = commentId + 1;
      }
    });
    let newKey = Math.floor(Math.random() * 10000);
    const colId = this.props.colId;
    const cardId = this.props.cardId;
    const commentItem = {
      colId: colId,
      cardId: cardId,
      commentId: newCommentId,
      key: newKey,
      isCommentActive: false,
      text: '',
    };
    this.props.setComment({ commentItem });
  };

  render() {
    return (
      <CardInfo
        colId={this.props.colId}
        cardId={this.props.cardId}
        authorName={this.props.authorName}
        cardComments={this.props.cardComments}
        colTitle={this.props.colTitle}
        cardTitle={this.props.cardTitle}
        toggleCardInfoWindow={this.props.toggleCardInfoWindow}
        descrInputRef={this.descrInputRef}
        addDescription={this.addDescription}
        cardDescr={this.props.cardDescr}
        addComment={this.addComment}
        isCommentAdded={this.getCommentActiveState()}
        haveDescr={this.props.haveDescr}
        editDescription={this.editDescription}
        insertCardTitle={this.props.insertCardTitle}
        editCardTitle={this.props.editCardTitle}
        isCardActive={this.props.isCardActive}
        deleteCard={this.props.deleteCard}
        deleteDescription={this.deleteDescription}
      />
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    commentsList: getCommentsList(state),
    cardComments: getCardCommentsList(state, props),
  };
};
const mapDispatchToProps = {
  setCardDescr,
  editCardDescr,
  deleteCardDescr,
  setComment,
};

export default connect(mapStateToProps, mapDispatchToProps)(CardInfoContainer);
