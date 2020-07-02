import React from "react"

const TaskCard = (props) => {
	return (
		<div className="task-card">
		<h1>{props.taskTitle}</h1>
		</div>
		)
}

export default TaskCard