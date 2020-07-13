import React from "react"
import Board from "../components/Board/Board"
import { setTodoColumn, setColFromLocalStorage } from "../actions/boardActions"
import { setCardFromLocalStorage } from "../actions/columnActions"
import { connect } from "react-redux"
import TodoContainer from "../containers/TodoContainer"


class BoardContainer extends React.Component {
	showTodoColumns = () => {
		if (this.props.todoColumnList.length !== 0) {
			return this.props.todoColumnList.map(
				(column) => <TodoContainer
					columnId={column.id}
					key={column.key}
				/>
			)
		}
	}
	addNewTodoColumn = () => {
		let newId = 0
		this.props.todoColumnList.forEach(item => {
			let itemId = Number(item.id)
			if (itemId >= newId) {
				newId = itemId + 1
			}

		})
		const newKey = Math.floor(Math.random() * 10000)
		let defaultColumnData = {
			id: newId,
			key: newKey,
			title: "",
			isColumnActive: false,
			isEditColumnTitle: true,
			isMenuActive: false
		}
		this.props.setTodoColumn(defaultColumnData)
	}

	render() {
		return (
			<Board
				addNewTodoColumn={this.addNewTodoColumn}
				showTodoColumns={this.showTodoColumns}
			/>
		);
	}
}
const mapStateToProps = (state) => {
	return {
		todoColumnList: state.boardData.todoColumnList,
		todoCards: state.todoData.cards,
		mainData: state.boardData
	}
}

const mapDispatchToProps = {
	setTodoColumn,
}

export default connect(mapStateToProps, mapDispatchToProps)(BoardContainer)