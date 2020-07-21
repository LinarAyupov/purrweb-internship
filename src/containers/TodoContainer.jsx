import React from 'react';
import Todo from '../components/Todo';
import { connect } from 'react-redux';
import {
  setColumnTitle,
  insertColumnTitle,
  toggleColumnMenu,
  deleteColumn,
} from '../actions/columnsActions';
import { setColumnCard, deleteCardsWithColID } from '../actions/cardsActions';
import { deleteAllCommentsInsideColumn } from '../actions/commentActions';
import { getCardsList, getCommentsList, getColumnCardsList } from '../selectors/selectors';

class TodoContainer extends React.Component {
  getCardActiveStatus = () => {
    let cardActiveState = true;
    if (this.props.cardsList.length !== 0) {
      cardActiveState = this.props.cardsList[this.props.cardsList.length - 1].isCardActive;
    }
    return cardActiveState;
  };

  onChangeColumTitle = (element) => {
    let title = element.target.value;
    const { id: columnId } = this.props.column;
    this.props.setColumnTitle({ title, columnId });
  };

  insertColumnTitle = () => {
    let { title: columnTitle, id: columnId } = this.props.column;
    if (columnTitle === '') {
      this.props.column.title = 'Todo list';
      this.props.insertColumnTitle({ columnId });
    } else {
      this.props.insertColumnTitle({ columnId });
    }
  };

  addCard = () => {
    let newId = 0;
    this.props.cardsList.forEach((item) => {
      let itemId = Number(item.cardId);
      if (itemId >= newId) {
        newId = itemId + 1;
      }
    });
    const newKey = Math.floor(Math.random() * 10000);
    let cardItem = {
      colId: this.props.column.id,
      cardId: newId,
      key: newKey,
      isShowInfo: false,
      title: '',
      haveDescr: false,
      description: '',
    };
    this.props.setColumnCard({ cardItem });
  };

  deleteColumn = () => {
    const { id: colId } = this.props.column;
    this.props.deleteColumn({ colId });
    this.props.deleteCardsWithColID({ colId });
    this.props.deleteAllCommentsInsideColumn({ colId });
  };

  toggleMenu = () => {
    const { id: columnId } = this.props.column;
    this.props.toggleColumnMenu({ columnId });
  };

  render() {
    return (
      <>
        <Todo
          authorName={this.props.authorName}
          isEditColumnTitle={this.props.column.isEditColumnTitle}
          columnCards={this.props.columnCards}
          columnId={this.props.column.id}
          columnTitle={this.props.column.title}
          onChangeColumTitle={this.onChangeColumTitle}
          insertColumnTitle={this.insertColumnTitle}
          isColumnActive={this.props.column.isColumnActive}
          addCard={this.addCard}
          isCardActive={this.getCardActiveStatus()}
          toggleMenu={this.toggleMenu}
          isMenuActive={this.props.column.isMenuActive}
          deleteColumn={this.deleteColumn}
        />
      </>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    cardsList: getCardsList(state),
    authorName: getCommentsList(state),
    columnCards: getColumnCardsList(state, props),
  };
};

const mapDispatchToProps = {
  setColumnTitle,
  insertColumnTitle,
  setColumnCard,
  toggleColumnMenu,
  deleteColumn,
  deleteCardsWithColID,
  deleteAllCommentsInsideColumn,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer);
