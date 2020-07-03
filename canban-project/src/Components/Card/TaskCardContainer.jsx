import React from "react"
import TaskCard from "./TaskCard"


class TaskCardContainer extends React.Component {

    editTitile = () => {
        const taskId = this.props.id
        this.props.onEditTaskTitle(taskId)
    }
    editTitleText = (e) => {
        const taskId = this.props.id
        let newTitleText = e.target.value
        this.props.editTitleText(taskId,newTitleText)
    }
    render() {
        return <TaskCard 
                    taskTitle = {this.props.taskTitle} 
                    id = {this.props.id}
                    editTitile = {this.editTitile}
                    isEditActive = {this.props.isEditActive}
                    editTitleText = {this.editTitleText}
                    newTaskTitle = {this.newTaskTitle}
                    />
    }
}


export default TaskCardContainer