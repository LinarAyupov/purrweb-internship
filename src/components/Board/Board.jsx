import React from 'react';
import TodoContainer from '../../containers/TodoContainer';

const Board = (props) => {
  const renderColumns = () => {
    const columnsListLength = props.columnsList.length;
    if (columnsListLength !== 0) {
      return props.columnsList.map((column) => <TodoContainer key={column.key} column={column} />);
    }
  };

  return (
    <div className="board-wrap">
      <div className="todo-list">
        {renderColumns()}
        <button className="board__btn" onClick={props.addColumn}>
          Add another list
        </button>
      </div>
    </div>
  );
};

export default Board;
