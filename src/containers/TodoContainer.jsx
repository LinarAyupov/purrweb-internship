import React from 'react';
import Todo from '../components/Todo';
import { connect } from 'react-redux';
import {
  setColumnTitle,
  insertNewColumnTitle,
  openListMenu,
  deleteToDoColumn,
} from '../actions/columnsActions';
import { setNewTodoCard, deleteCardsWithColID } from '../actions/cardsActions';
import { deleteAllCommentsInsideColumn } from '../actions/commentActions';
import TodoCardContainer from '../containers/TodoCardContainer';
import { getColumnsList, getCardsList, getCommentsList } from '../selectors/selectors';

class TodoContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  getCardActiveStatus = () => {
    let cardActiveState = true;
    if (this.props.todoCards.length !== 0) {
      cardActiveState = this.props.todoCards[this.props.todoCards.length - 1].isCardActive;
    }
    return cardActiveState;
  };

  onChangeColumTitle = (element) => {
    let newTitle = element.target.value;
    this.props.setColumnTitle(newTitle, this.props.column.id);
  };

  insertNewColumnTitle = () => {
    if (this.props.column.title === '') {
      this.props.column.title = 'Todo list';
      this.props.insertNewColumnTitle(this.props.column.id);
    } else {
      this.props.insertNewColumnTitle(this.props.column.id);
    }
  };

  addNewToDoCard = () => {
    let newId = 0;
    this.props.todoCards.forEach((item) => {
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
    this.props.setNewTodoCard(cardItem);
  };

  deleteTodoList = () => {
    this.props.deleteToDoColumn(this.props.column.id);
    this.props.deleteCardsWithColID(this.props.column.id);
    this.props.deleteAllCommentsInsideColumn(this.props.column.id);
  };

  renderTodoCardList = () => {
    return this.props.todoCards.map((card) => {
      if (card.colId === this.props.column.id) {
        return (
          <TodoCardContainer
            columnId={this.props.column.id}
            key={card.key}
            colTitle={this.props.column.title}
            card={card}
          />
        );
      }
    });
  };

  openMenu = () => {
    this.props.openListMenu(this.props.column.id);
  };

  render() {
    return (
      <>
        <Todo
          authorName={this.props.authorName}
          isEditColumnTitle={this.props.column.isEditColumnTitle}
          columnTitle={this.props.column.title}
          onChangeColumTitle={this.onChangeColumTitle}
          columnId={this.props.column.id}
          insertNewColumnTitle={this.insertNewColumnTitle}
          isColumnActive={this.props.column.isColumnActive}
          addNewToDoCard={this.addNewToDoCard}
          renderTodoCardList={this.renderTodoCardList}
          todoCardsCount={this.props.todoCards.length}
          isCardActive={this.getCardActiveStatus()}
          openMenu={this.openMenu}
          isMenuActive={this.props.column.isMenuActive}
          deleteTodoList={this.deleteTodoList}
        />
      </>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    todoColumnList: getColumnsList(state),
    todoCards: getCardsList(state),
    authorName: getCommentsList(state),
  };
};

const mapDispatchToProps = {
  setColumnTitle,
  insertNewColumnTitle,
  setNewTodoCard,
  openListMenu,
  deleteToDoColumn,
  deleteCardsWithColID,
  deleteAllCommentsInsideColumn,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer);
