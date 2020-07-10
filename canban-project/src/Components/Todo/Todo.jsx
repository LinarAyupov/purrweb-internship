import React from "react"

const Todo = (props) => {
	let renderButtons = () => {
		if (props.isColumnActive) {
			if (props.isCardActive) {
				return <button
					className="add-btn"
					onClick={props.addNewToDoCard}>
					Add another card
				</button>
			} else {
				return <button
					className="add-btn"
				>
					Add another card
					</button>
			}

		} else {
			return <button
				className="add-btn"
				onClick={props.insertNewColumnTitle}>
				Add another list
			</button>
		}
	}
	return (
		<div className="todo-wrapper">
			{
				props.isEditColumnTitle ?
					<input type="text"
						className="todo-title__input"
						onChange={props.onChangeColumTitle}
						defaultValue={props.columnTitle}
						placeholder="Enter list title..."
						onBlur={props.insertNewColumnTitle}
						autoFocus={true}
						onKeyPress={
							(e) => {
								if (e.key === 'Enter') {
									props.insertNewColumnTitle()
								}
							}
						}
					/> :
					<header className="todo__header">
						<h1 className="todo-title">{props.columnTitle}</h1>
						<div className="todo-menu" onClick={props.openMenu}>
							<div className="todo-menu__icon">
								<span></span>
								<span></span>
								<span></span>
							</div>

						</div>
						{
							props.isMenuActive ?
								<div className="todo-menu__list">
									<h3 className="todo-menu__list-title">List actions
									<span className="todo-menu__close" onClick={props.openMenu}>&times;</span>
									</h3>
									<button className="todo-menu__list-btn" onClick={props.insertNewColumnTitle}>Edit list title...</button>
									<button className="todo-menu__list-btn" onClick={props.deleteTodoList}>Delate list...</button>
								</div>
								:
								<div></div>
						}
					</header>

			}
			<div>
				{props.renderTodoCardList()}
			</div>
			{
				renderButtons()
			}
		</div>
	)
}

export default Todo