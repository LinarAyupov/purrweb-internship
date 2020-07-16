import React from 'react';
import DescriptionIcon from '../icons/DescriptionIcon';
import CommentIcon from '../icons/CommentIcon';

const TodoCard = (props) => {
  const rendCard = () => {
    if (props.isCardActive) {
      return (
        <div className="todo-card__title" onClick={props.toggleCardInfoWindow}>
          {props.cardTitle}
          <div className="todo-card__icons-wrap">
            {props.haveDescr ? (
              <span className=" todo-card__icon">
                <DescriptionIcon width={14} height={15} className="" />
              </span>
            ) : (
              <></>
            )}
            {props.haveComment ? (
              <>
                <CommentIcon width={15} height={17} /> <span>{props.commentsCount}</span>
              </>
            ) : (
              <></>
            )}
          </div>
        </div>
      );
    } else {
      if (props.isShowInfo !== true) {
        return (
          <input
            type="text"
            className="todo-card__input"
            defaultValue={props.cardTitle}
            onChange={props.editCardTitle}
            onBlur={(e) => setTimeout(props.insertCardTitle, 200)}
            placeholder="Enter a title for this card..."
            autoFocus={true}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                props.insertCardTitle();
              }
            }}
          />
        );
      } else {
        return (
          <div className="todo-card__title" onClick={props.renderCardInfoWindow}>
            {props.cardTitle}
            <div className="todo-card__icon-wrap">
              {props.haveDescr ? <span className="todo-card__icon"></span> : <></>}
            </div>
          </div>
        );
      }
    }
  };
  return <div className="todo-card">{rendCard()}</div>;
};

export default TodoCard;
