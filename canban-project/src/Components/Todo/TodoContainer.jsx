import React from "react"
import Todo from "./Todo"
import { connect } from "react-redux"
import {setColumnTitle,insertNewColumnTitle,openListMenu,deleteToDoColumn} from "../../Redux/board-reducer.js"
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

		this.isCardActive = this.props.todoCards[this.props.todoCards.length-1].isCardActive

		
	}
	getCardActiveState() {
		let cardActiveState = true
		if(this.props.todoCards.length !== 0) {
			cardActiveState = this.props.todoCards[this.props.todoCards.length-1].isCardActive
		}
		return cardActiveState
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
		const newKey = Math.floor(Math.random()*1000)
		let cardItem = {
			colId:this.props.columnId,
			cardId: newId,
			key: newKey,
			isCardActive: false,
			isShowInfo:false,
			title:"",
			haveDescr: false,
			description:"",
			comments:[{
				comId:0,
				isCommentActive:false,
				text:'some comment',}]
		}
			this.props.setNewTodoCard(cardItem)		
	}
	deleteTodoList() {
		this.props.deleteToDoColumn(this.props.columnId)
	}
	showTodoCardList () {

		return this.props.todoCards.map((card) => {
			if(card.colId === this.props.columnId) {
				return  <TodoCardContainer	
					columnId = {this.props.columnId}
					key = {card.key}
				/>
			}
		}	
		)
	}
	openMenu() {
		this.props.openListMenu(this.column.id)
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
					isCardActive = {this.getCardActiveState()}
					openMenu = {this.openMenu.bind(this)}
					isMenuActive = {this.column.isMenuActive}
					deleteTodoList = {this.deleteTodoList.bind(this)}
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
	setNewTodoCard,
	openListMenu,
	deleteToDoColumn
}
export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer)