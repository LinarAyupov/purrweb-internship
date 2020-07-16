import React from 'react';
import CardInfo from '../components/CardInfo';
import { connect } from 'react-redux';
import { setCardDescr, editCardDescr, deleteCardDescr } from '../actions/cardsActions';
import { setCardComments } from '../actions/commentActions';
import { getCommentsList, getCardCommentsList } from '../selectors/selectors';
import CommentContainer from './CommentContainer';

class CardInfoContainer extends React.Component {
  constructor(props) {
    super(props);
    this.descrInputRef = React.createRef();
  }

  addNewDescription = () => {
    let descrText = this.descrInputRef.current.value;
    this.props.setCardDescr(descrText, this.props.cardId, this.props.colId);
  };

  editCardDescription = () => {
    this.props.editCardDescr(this.props.cardId, this.props.colId);
  };

  deleteDescription = () => {
    this.props.deleteCardDescr(this.props.cardId, this.props.colId);
  };

  getCommentActiveState = () => {
    let commentActive = true;
    if (this.props.commentsList.length !== 0) {
      commentActive = this.props.commentsList[this.props.commentsList.length - 1].isCommentActive;
    }
    return commentActive;
  };

  addCardComment = () => {
    let newComId = 0;
    this.props.commentsList.forEach((comment) => {
      let commId = Number(comment.comId);
      if (commId >= newComId) {
        newComId = commId + 1;
      }
    });
    let newKey = Math.floor(Math.random() * 10000);
    const colId = this.props.colId;
    const cardId = this.props.cardId;
    const commentItem = {
      colId: colId,
      cardId: cardId,
      comId: newComId,
      key: newKey,
      isCommentActive: false,
      text: '',
    };
    this.props.setCardComments(commentItem);
  };

  showCardComments = () => {
    return this.props.cardComments.map((comment) => {
      return (
        <CommentContainer
          commentText={comment.text}
          isCommentActive={comment.isCommentActive}
          commentId={comment.comId}
          colId={this.props.colId}
          cardId={this.props.cardId}
          comId={comment.comId}
          key={comment.key}
          authorName={this.props.authorName}
        />
      );
    });
  };

  render() {
    return (
      <CardInfo
        authorName={this.props.authorName}
        colTitle={this.props.colTitle}
        cardTitle={this.props.cardTitle}
        toggleCardInfoWindow={this.props.toggleCardInfoWindow}
        descrInputRef={this.descrInputRef}
        addNewDescription={this.addNewDescription}
        cardDescr={this.props.cardDescr}
        addCardComment={this.addCardComment}
        showCardComments={this.showCardComments}
        isCommentAdded={this.getCommentActiveState()}
        haveDescr={this.props.haveDescr}
        editCardDescription={this.editCardDescription}
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
  setCardComments,
};

export default connect(mapStateToProps, mapDispatchToProps)(CardInfoContainer);
