import React from "react"
import Todo from "./Todo"
import {connect} from "react-redux"
import {setTaskCard, setChangedInputText} from "../../Redux/todo-reducer"
import TaskCard from "../Card/TaskCard"

class TodoContainer extends React.Component {
	setNewInputText (elem) {
		let inputText = elem.target.value
		this.props.setChangedInputText(inputText)
	}
	showCards () {
		return this.props.taskCards.map((card, id) => {
			return <TaskCard taskTitle = {card.title} key = {id}/>
		})
	}
	addNewTaskCard () {
		const taskOptions = {
			title: this.props.inputText
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
}
export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer)