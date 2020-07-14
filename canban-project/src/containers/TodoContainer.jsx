import React from "react"
import Todo from "../components/Todo/Todo"
import { connect } from "react-redux"
import {
	setColumnTitle,
	insertNewColumnTitle,
	openListMenu,
	deleteToDoColumn
} from "../actions/boardActions"
import { setNewTodoCard, deleteCardsWithColID } from "../actions/columnActions"
import { deleteAllCommentsInsideCollumn } from "../actions/commentActions"
import TodoCardContainer from "../containers/TodoCardContainer"


class TodoContainer extends React.Component {
	constructor(props) {
		super(props)
		this.column = {}
		this.props.todoColumnList.forEach(col => {
			if (col.id === this.props.columnId) {
				this.column = col
			}
		})
	}
	getCardActiveStatus = () => {
		let cardActiveState = true
		if (this.props.todoCards.length !== 0) {
			cardActiveState = this.props.todoCards[this.props.todoCards.length - 1].isCardActive
		}
		return cardActiveState
	}
	onChangeColumTitle = (element) => {
		let newTitle = element.target.value
		this.props.setColumnTitle(newTitle, this.props.columnId)
	}
	insertNewColumnTitle = () => {
		if (this.column.title === "") {
			this.column.title = "Todo list"
			this.props.insertNewColumnTitle(this.props.columnId)
		} else {
			this.props.insertNewColumnTitle(this.props.columnId)
		}
	}
	addNewToDoCard = () => {
		let newId = 0
		this.props.todoCards.forEach(item => {
			let itemId = Number(item.cardId)
			if (itemId >= newId) {
				newId = itemId + 1
			}
		})
		const newKey = Math.floor(Math.random() * 10000)
		let cardItem = {
			colId: this.props.columnId,
			cardId: newId,
			key: newKey,
			isShowInfo: false,
			title: "",
			haveDescr: false,
			description: "",
		}
		this.props.setNewTodoCard(cardItem)
	}
	deleteTodoList() {
		this.props.deleteToDoColumn(this.props.columnId)
		this.props.deleteCardsWithColID(this.props.columnId)
		this.props.deleteAllCommentsInsideCollumn(this.props.columnId)
	}
	renderTodoCardList = () => {
		return this.props.todoCards.map((card) => {
			if (card.colId === this.props.columnId) {
				return <TodoCardContainer
					columnId={this.props.columnId}
					cardId={card.cardId}
					key={card.key}
					colTitle={this.column.title}
				/>
			}
		}
		)
	}
	openMenu = () => {
		this.props.openListMenu(this.column.id)
	}
	render() {
		return (
			<>
				<Todo
					authorName={this.props.authorName}
					isEditColumnTitle={this.column.isEditColumnTitle}
					columnTitle={this.column.title}
					onChangeColumTitle={this.onChangeColumTitle}
					columnId={this.column.id}
					insertNewColumnTitle={this.insertNewColumnTitle}
					isColumnActive={this.column.isColumnActive}
					addNewToDoCard={this.addNewToDoCard}
					renderTodoCardList={this.renderTodoCardList}
					todoCardsCount={this.props.todoCards.length}
					isCardActive={this.getCardActiveStatus()}
					openMenu={this.openMenu}
					isMenuActive={this.column.isMenuActive}
					deleteTodoList={this.deleteTodoList.bind(this)}
				/>

			</>
		)
	}
}


const mapStateToProps = (state) => {
	return {
		todoColumnList: state.boardData.todoColumnList,
		todoCards: state.todoData.cards,
		authorName: state.boardData.authorName
	}
}
const mapDispatchToProps = {
	setColumnTitle,
	insertNewColumnTitle,
	setNewTodoCard,
	openListMenu,
	deleteToDoColumn,
	deleteCardsWithColID,
	deleteAllCommentsInsideCollumn
}
export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer)