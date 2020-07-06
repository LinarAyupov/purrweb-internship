import React from "react"
import Todo from "./Todo"
import { connect } from "react-redux"
import {setColumnTitle,insertNewColumnTitle} from "../../Redux/board-reducer.js"
import {setNewTodoCard} from "../../Redux/todo-reducer.js"
import TodoCardContainer from "../Card/TodoCardContainer"


class TodoContainer extends React.Component {
	constructor(props) {
		super(props)
		this.column = {}
		this.props.todoColumnList.forEach( col=> {
			if(col.id === this.props.columnId) {
				this.column = col
			}
		})
	}
	onChangeColumTitle(element) {
		let newTitle = element.target.value
		this.props.setColumnTitle(newTitle,this.props.columnId)
	}
	insertNewColumnTitle() {
		if(this.column.title === "") {
			this.column.title = "Todo list"
			this.props.insertNewColumnTitle(this.props.columnId)
		} else {
			this.props.insertNewColumnTitle(this.props.columnId)
			// this.props.delateToDoColumn(this.props.columnId)
		}		
	}
	addNewToDoCard () {
		let newId = 0
		this.props.todoCards.forEach( item => {
			let itemId = Number(item.cardId)
			if(itemId >= newId) {
				newId = itemId+1
			}			
		})
		let cardItem = {
			colId:this.props.columnId,
			cardId: newId,	
			isCardActive: false,
			isShowInfo:false,
			title:"",
			haveDescr: false,
			description:""
		}
		let lastItem = this.props.todoCards[this.props.todoCards.length - 1]
		if( lastItem === undefined || lastItem.title !== ""){
			this.props.setNewTodoCard(cardItem)
		}
		
	}
	showTodoCardList () {
		return this.props.todoCards.map((card, index) => {
			if(card.colId === this.props.columnId) {
				return  <TodoCardContainer	
					columnId = {this.props.columnId}
					key = {index}
				/>
			}
		}	
		)
	}
	render() {
		return  (
			<>
				<Todo  
					isEditColumnTitle = {this.column.isEditColumnTitle}
					columnTitle = {this.column.title}
					onChangeColumTitle = {this.onChangeColumTitle.bind(this)}
					columnId = {this.column.id}
					insertNewColumnTitle = {this.insertNewColumnTitle.bind(this)}
					isColumnActive = {this.column.isColumnActive}
					addNewToDoCard = {this.addNewToDoCard.bind(this)}
					showTodoCardList = {this.showTodoCardList.bind(this)}
					todoCardsCount = {this.props.todoCards.length}
				/>
				
			</>
		)
	}
}


const mapStateToProps = (state) => {
	return {
		todoColumnList: state.boardData.todoColumnList,
		todoCards: state.todoData.cards
	}
}
const mapDispatchToProps = {
	setColumnTitle,
	insertNewColumnTitle,
	setNewTodoCard
	// delateToDoColumn
}
export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer)