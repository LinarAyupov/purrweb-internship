import React from "react"
import TaskCard from "./TaskCard"


class TaskCardContainer extends React.Component {

    editTitile = () => {
        const taskId = this.props.id
        this.props.onEditTaskTitle(taskId)
        console.log(this.props.isEditActive)
    }

    render() {
        return <TaskCard 
                    taskTitle = {this.props.taskTitle} 
                    editTitile = {this.editTitile}
                    id = {this.props.id}
                    editTitile = {this.editTitile}
                    isEditActive = {this.props.isEditActive}
                    />
    }
}


export default TaskCardContainer