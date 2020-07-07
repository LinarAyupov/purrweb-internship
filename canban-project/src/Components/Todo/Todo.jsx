import React from "react"


const Todo = (props) => {
	let showAddBtn = () => {
		if(props.isColumnActive) {
			if(props.isCardActive) {
				return <button 
					className = "add-btn" 
					onClick = {props.addNewToDoCard}>
						Add another card
				</button>
			} else {
				return <button 
				className = "add-btn" 
				>
					Add another card
					</button>
			}

		} else {
			return <button 
			className = "add-btn" 
			onClick = {props.insertNewColumnTitle}>
				Add another list
			</button>
		}
	}
	return (
			<div className="todo-wrapper">
				{
					props.isEditColumnTitle?
					<input type="text" 
						className = "todo-title__input"
						onChange = {props.onChangeColumTitle} 
						defaultValue ={props.columnTitle}
						placeholder = "Enter list title..."
						onBlur = {()=>setTimeout(props.insertNewColumnTitle,300)}
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
					showAddBtn()
				}
			</div>
		)
}

export default Todo