import React from "react"
import TaskCard from "../Card/TaskCard"


const Todo = (props) => {

	let setNewInputText = (elem) =>{
		let inputText = elem.target.value
		props.setChangedInputText(inputText)
	}

 	const showCards = () => {
		return props.taskCards.map((card, id) => {
			return <TaskCard taskTitle = {card.title} key = {id}/>
		})
	}
	
	const addNewTaskCard = () => {
		const taskOptions = {
			title: props.inputText
		}
		props.addTask(taskOptions)
	}
	return (
			<div className="canban-column todo">
				<header className="canban-column__header">
					<h1 className="canban-column__title">
						To Do
					</h1>
					<div className="canban-column_nav">
						<span className="canban-column_nav-dot"></span>
						<span className="canban-column_nav-dot"></span>
						<span className="canban-column_nav-dot"></span>
					</div>
				</header>

				<input type="text" onChange = {setNewInputText} value = {props.inputText}/>
				{showCards()}
				<footer className = "canban-column__footer">
					<button className="canban-column__footer-btn"
						onClick = {addNewTaskCard}
					>Add another card</button>
				</footer>
			</div>
		)
}

export default Todo