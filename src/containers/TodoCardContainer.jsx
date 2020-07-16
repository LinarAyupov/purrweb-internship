import React from 'react';
import ReactDOM from 'react-dom';
import TodoCard from '../components/TodoCard';
import { connect } from 'react-redux';
import {
  setNewCardTitle,
  insertCardTitle,
  showCardInfo,
  deleteCard,
} from '../actions/cardsActions';
import { deleteAllCommentsInsideCard } from '../actions/commentActions';
import CardInfoContainer from '../containers/CardInfoContainer';
import {
  getAuthor,
  getCardsList,
  getCommentsList,
  getCardCommentsList,
} from '../selectors/selectors';

class TodoCardContainer extends React.Component {
  editCardTitle = (e) => {
    const cardId = this.props.card.cardId;
    let newTitle = e.target.value;
    this.props.setNewCardTitle(cardId, newTitle);
  };

  insertCardTitle = () => {
    this.props.insertCardTitle(this.props.card.cardId);
  };

  deleteCard = () => {
    this.props.deleteCard(this.props.card.cardId);
    this.props.deleteAllCommentsInsideCard(this.props.card.cardId);
  };

  toggleCardInfoWindow = (e) => {
    this.props.showCardInfo(this.props.card.cardId, this.props.card.colId);
  };

  render() {
    return (
      <>
        <TodoCard
          cardTitle={this.props.card.title}
          isCardActive={this.props.card.isCardActive}
          editCardTitle={this.editCardTitle}
          insertCardTitle={this.insertCardTitle}
          toggleCardInfoWindow={this.toggleCardInfoWindow}
          haveDescr={this.props.card.haveDescr}
          isShowInfo={this.props.card.isShowInfo}
          haveComment={this.props.cardComments.length !== 0 ? true : false}
          commentsCount={this.props.cardComments.length}
        />
        {this.props.card.isShowInfo ? (
          ReactDOM.createPortal(
            <CardInfoContainer
              colTitle={this.props.colTitle}
              cardTitle={this.props.card.title}
              authorName={this.props.authorName}
              toggleCardInfoWindow={this.toggleCardInfoWindow}
              cardId={this.props.card.cardId}
              colId={this.props.card.colId}
              cardDescr={this.props.card.description}
              haveDescr={this.props.card.haveDescr}
              insertCardTitle={this.insertCardTitle}
              editCardTitle={this.editCardTitle}
              isCardActive={this.props.card.isCardActive}
              deleteCard={this.deleteCard}
              key={this.props.key}
            />,
            document.getElementById('card-info__modal')
          )
        ) : (
          <div></div>
        )}
      </>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    todoCards: getCardsList(state),
    authorName: getAuthor(state),
    cardComments: getCardCommentsList(state, props),
  };
};

const mapDispatchToProps = {
  setNewCardTitle,
  insertCardTitle,
  showCardInfo,
  deleteCard,
  deleteAllCommentsInsideCard,
};
export default connect(mapStateToProps, mapDispatchToProps)(TodoCardContainer);
