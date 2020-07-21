import React from 'react';
import ReactDOM from 'react-dom';
import TodoCard from '../components/TodoCard';
import { connect } from 'react-redux';
import { setCardTitle, insertCardTitle, showCardInfo, deleteCard } from '../actions/cardsActions';
import { deleteAllCommentsInsideCard } from '../actions/commentActions';
import CardInfoContainer from '../containers/CardInfoContainer';
import { getAuthor, getCardCommentsList } from '../selectors/selectors';

class TodoCardContainer extends React.Component {
  editCardTitle = (e) => {
    let newTitle = e.target.value;
    this.props.setCardTitle({ cardId: this.props.card.cardId, newTitle });
  };

  insertCardTitle = () => {
    this.props.insertCardTitle({ cardId: this.props.card.cardId });
  };

  deleteCard = () => {
    const cardId = this.props.card.cardId;
    this.props.deleteCard({ cardId });
    this.props.deleteAllCommentsInsideCard({ cardId });
  };

  toggleCardInfoWindow = (e) => {
    const { cardId, colId } = this.props.card;
    this.props.showCardInfo({ cardId, colId });
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
    authorName: getAuthor(state),
    cardComments: getCardCommentsList(state, props),
  };
};

const mapDispatchToProps = {
  setCardTitle,
  insertCardTitle,
  showCardInfo,
  deleteCard,
  deleteAllCommentsInsideCard,
};
export default connect(mapStateToProps, mapDispatchToProps)(TodoCardContainer);
