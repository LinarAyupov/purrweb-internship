import React from "react"
import Board from "./Board"
import {setTodoColumn,setColFromLocalStorage} from "../../Redux/board-reducer.js"
import {setCardFromLocalStorage} from "../../Redux/todo-reducer"
import { connect } from "react-redux"
import TodoContainer from "../Todo/TodoContainer"


class BoardContainer extends React.Component {
	constructor(props) {
		super(props)
		this.LocStorColList = JSON.parse(localStorage.getItem('columnList'))
		this.LocStorCardList = JSON.parse(localStorage.getItem('cardList'))
	}
	componentDidMount() {
		if(this.LocStorColList) {
			this.props.setColFromLocalStorage(this.LocStorColList)
		}
		if(this.LocStorCardList) {
			this.props.setCardFromLocalStorage(this.LocStorCardList)
		}
	}
	componentDidUpdate() {
		let columnList = this.props.todoColumnList
		let cardList = this.props.todoCards

		localStorage.setItem('columnList', JSON.stringify(columnList))
		localStorage.setItem('cardList',JSON.stringify(cardList))
	}
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
		const newKey = Math.floor(Math.random()*10000)
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
	setColFromLocalStorage,
	setCardFromLocalStorage
}

export default connect(mapStateToProps,mapDispatchToProps)(BoardContainer)