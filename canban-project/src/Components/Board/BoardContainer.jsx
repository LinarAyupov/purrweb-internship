import React from "react"
import Board from "./Board"
import {setTodoColumn} from "../../Redux/board-reducer.js"
import { connect } from "react-redux"
import TodoContainer from "../Todo/TodoContainer"


class BoardContainer extends React.Component {

	showTodoColumns(){
		if (this.props.todoColumnList.length!== 0) {
			return this.props.todoColumnList.map (
				(column)=> <TodoContainer
					columnId = {column.id}
					key = {column.key}
				/>
			)
		}
	}
	addNewTodoColumn () {
		let newId = 0
		this.props.todoColumnList.forEach( item => {
			let itemId = Number(item.id)
			if(itemId >= newId) {
				newId = itemId+1
			}
			
		})
		let newKey = Math.floor(Math.random()*1000)
		let defaultColumnData = {
			id:newId,
			key:newKey,
			title:"",
			isColumnActive:false,
			isEditColumnTitle: true,
			isMenuActive: false
		}
		this.props.setTodoColumn(defaultColumnData)	
	}
	
	render() {
		return (
			<Board
				addNewTodoColumn = {this.addNewTodoColumn.bind(this)}
				showTodoColumns = {this.showTodoColumns.bind(this)}
			/>
		);
	}
}
const mapStateToProps = (state) => {
	return {
		todoColumnList: state.boardData.todoColumnList,
		todoCards: state.todoData.cards
	}
}

const mapDispatchToProps = {
	setTodoColumn,
}

export default connect(mapStateToProps,mapDispatchToProps)(BoardContainer)