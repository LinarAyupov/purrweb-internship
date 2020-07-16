import React from 'react';
import Board from '../components/Board';
import { setTodoColumn } from '../actions/columnsActions';
import { connect } from 'react-redux';
import TodoContainer from '../containers/TodoContainer';
import { getColumnsList, getCardsList } from '../selectors/selectors';
class BoardContainer extends React.Component {
  showTodoColumns = () => {
    let columnListLength = this.props.todoColumnList.length;
    if (columnListLength !== 0) {
      return this.props.todoColumnList.map((column) => (
        <TodoContainer key={column.key} column={column} />
      ));
    }
  };

  addNewTodoColumn = () => {
    let newId = 0;
    this.props.todoColumnList.forEach((item) => {
      let itemId = Number(item.id);
      if (itemId >= newId) {
        newId = itemId + 1;
      }
    });
    const newKey = Math.floor(Math.random() * 10000);
    let defaultColumnData = {
      id: newId,
      key: newKey,
      title: '',
      isColumnActive: false,
      isEditColumnTitle: true,
      isMenuActive: false,
    };
    this.props.setTodoColumn(defaultColumnData);
  };

  render() {
    return (
      <Board addNewTodoColumn={this.addNewTodoColumn} showTodoColumns={this.showTodoColumns} />
    );
  }
}
const mapStateToProps = (state) => {
  return {
    todoColumnList: getColumnsList(state),
    todoCards: getCardsList(state),
  };
};

const mapDispatchToProps = {
  setTodoColumn,
};

export default connect(mapStateToProps, mapDispatchToProps)(BoardContainer);
