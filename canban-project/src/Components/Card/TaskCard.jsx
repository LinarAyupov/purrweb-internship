import React from "react"

const TaskCard = (props) => {
	return (
		<div className="task-card">
			{
			props.isEditActive === true?	
			<input type="text"onChange = {props.editTitleText} defaultValue ={props.taskTitle}/>:
			<h2 className="task-card__title" >{props.taskTitle}</h2>
			}
			<button onClick ={props.editTitile} className="task-card__edit-btn">e</button>
		</div>
		)
}

export default TaskCard