import React from "react"


const Todo = (props) => {
	return (
			<div className="todo-wrapper">
				{
					props.isEditColumnTitle?
					<input type="text" 
						className = "todo-title__input"
						onChange = {props.onChangeColumTitle} 
						defaultValue ={props.columnTitle}
						placeholder = "Enter list title..."
						onBlur = {
							()=> setTimeout(props.insertNewColumnTitle,100)
						}
						autoFocus={true}
						onKeyPress ={
							(e) => {
  								if(e.key === 'Enter'){
    								props.insertNewColumnTitle()
  							}	
						}
						}
					/>:
					<h1 className = "todo-title">{props.columnTitle}</h1>
				}
				<div>
					{
						props.todoCardsCount === 0 && !props.isEditColumnTitle?
						props.addNewToDoCard():
						props.showTodoCardList()}
				</div>
				{
				props.isColumnActive?
					<button 
					className = "todo-add__btn" 
					onClick = {props.addNewToDoCard}>
						Add another card
					</button>
				:	
					<button 
					className = "todo-add__btn" 
					onClick = {props.insertNewColumnTitle}>
						Add another list
					</button>
				}
			</div>
		)
}

export default Todo