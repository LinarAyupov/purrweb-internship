import React from "react"


const Todo = (props) => {

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

				<input type="text" onChange = {props.setNewInputText} value = {props.inputText}/>
				{props.showCards()}
				<footer className = "canban-column__footer">
					<button className="canban-column__footer-btn"
						onClick = {props.addNewTaskCard}
					>Add another card</button>
				</footer>
			</div>
		)
}

export default Todo