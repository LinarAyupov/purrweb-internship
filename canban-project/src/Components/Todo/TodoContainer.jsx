import React from "react"
import Todo from "./Todo"
import {connect} from "react-redux"
import {setTaskCard, setChangedInputText} from "../../Redux/todo-reducer"

class TodoContainer extends React.Component {
	
	render() {
		return  <Todo setChangedInputText = {this.props.setChangedInputText} 
					  inputText = {this.props.inputText}
					  addTask = {this.props.setTaskCard}
					  taskCards = {this.props.taskCards}
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