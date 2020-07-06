import React from "react"

const TodoCard = (props) => {
	return (
		<div className="todo-card">
			{
				props.isCardActive ?
					<div className ="todo-card__title">{props.cardTitle}</div>
				:
					<input type = "text"
						className = "todo-card__input"
						defaultValue = {props.cardTitle}
						onChange = {props.editCardTitle}
						onBlur = {props.insertCardTitle}
						placeholder = "Enter a title for this card..."
						autoFocus = {true}
						onKeyPress= {
							(e) => {
  								if(e.key === 'Enter'){
    								props.insertCardTitle()
  								}	
							}
						}
					/>
			}
		</div>
		)
}

export default TodoCard