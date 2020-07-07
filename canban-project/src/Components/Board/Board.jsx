import React from "react"
const Board = (props) => {
	return (
		<div className="board-wrap">			
			<div className = "todo-list">
			{props.showTodoColumns()}
			<button className="board__btn" onClick = {props.addNewTodoColumn}>
				Add another list
			</button>
			</div>
		</div>
		)
}

export default Board 