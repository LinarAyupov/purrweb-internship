import React from 'react';
import TodoCardContainer from '../../containers/TodoCardContainer';

const Todo = (props) => {
  const renderCardList = () => {
    return props.columnCards.map((card) => (
      <TodoCardContainer
        columnId={props.columnId}
        key={card.key}
        colTitle={props.columnTitle}
        card={card}
        cardId={card.cardId}
      />
    ));
  };
  let renderButtons = () => {
    if (props.isColumnActive) {
      if (props.isCardActive) {
        return (
          <button className="add-btn" onClick={props.addCard}>
            Add another card
          </button>
        );
      } else {
        return <button className="add-btn">Add another card</button>;
      }
    } else {
      return (
        <button className="add-btn" onClick={props.insertColumnTitle}>
          Add another list
        </button>
      );
    }
  };
  return (
    <div className="todo-wrapper">
      {props.isEditColumnTitle ? (
        <input
          type="text"
          className="todo-title__input"
          onChange={props.onChangeColumTitle}
          defaultValue={props.columnTitle}
          placeholder="Enter list title..."
          onBlur={props.insertColumnTitle}
          autoFocus={true}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              props.insertColumnTitle();
            }
          }}
        />
      ) : (
        <header className="todo__header">
          <h1 className="todo-title" onClick={props.insertColumnTitle}>
            {props.columnTitle}
          </h1>
          <div
            className="todo-menu"
            onClick={props.toggleMenu}
            tabIndex={0}
            onBlur={() => setTimeout(props.toggleMenu, 200)}
          >
            <div className="todo-menu__icon">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          {props.isMenuActive ? (
            <div className="todo-menu__list">
              <h3 className="todo-menu__list-title">
                List actions
                <span className="todo-menu__close" onClick={props.toggleMenu}>
                  &times;
                </span>
              </h3>
              <button className="todo-menu__list-btn" onClick={props.insertColumnTitle}>
                Edit list title
              </button>
              <button className="todo-menu__list-btn" onClick={props.deleteColumn}>
                Delete list
              </button>
            </div>
          ) : (
            <div></div>
          )}
        </header>
      )}
      <div>{renderCardList()}</div>
      {renderButtons()}
    </div>
  );
};

export default Todo;
