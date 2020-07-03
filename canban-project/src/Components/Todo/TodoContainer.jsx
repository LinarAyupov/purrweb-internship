import React from "react"
import Todo from "./Todo"
import {connect} from "react-redux"
import {setTaskCard, setChangedInputText, onEditTaskTitle} from "../../Redux/todo-reducer"
import TaskCardContainer from "../Card/TaskCardContainer"

class TodoContainer extends React.Component {
	setNewInputText (elem) {
		let inputText = elem.target.value
		this.props.setChangedInputText(inputText)
	}
	showCards () {
		return this.props.taskCards.map((card, index) => {
			return <TaskCardContainer 
						taskTitle = {card.title} 
						id = {card.id} 
						key={index} 
						isEditActive = {card.isEditActive}
						onEditTaskTitle = {this.props.onEditTaskTitle}
						/>
		})
	}
	addNewTaskCard () {
		let cardId = this.props.taskCards.length
		const taskOptions = {
			id: cardId,
			title: this.props.inputText,
			isEditActive: false
		}
		this.props.setTaskCard(taskOptions)
	}
	render() {
		return  <Todo 
					  inputText = {this.props.inputText}
					  addNewTaskCard = {this.addNewTaskCard.bind(this)}
					  showCards = {this.showCards.bind(this)}
					  setNewInputText = {this.setNewInputText.bind(this)}
					  />
	}
}
const mapStateToProps = (state) => {
	return {
		taskCards: state.todoData.taskCardsToDo,
		inputText: state.todoData.inputText
	}
}
const mapDispatchToProps = {
	setTaskCard,
	setChangedInputText,
	onEditTaskTitle
}
export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer)