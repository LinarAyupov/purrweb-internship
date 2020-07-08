import React from "react"

const TodoCard = (props) => {
	const rendCard = () => {
		if(props.isCardActive) {
			return <div className ="todo-card__title"
						onClick = {props.showCardInfo}
					>
						{props.cardTitle}
					<div className="todo-card__icon-wrap">
						{props.haveDescr ?
						<span className="todo-card__icon"></span>
						:
						<></>}
					</div>
				</div>
		} else {

			if(props.isShowInfo!==true) {
				return <input type = "text"
						className = "todo-card__input"
						defaultValue = {props.cardTitle}
						onChange = {props.editCardTitle}
						onBlur = {()=>setTimeout(props.insertCardTitle,200)}
						placeholder = "Enter a title for this card..."
						autoFocus = {true}
						onKeyPress= {
							(e) => {
  								if(e.key === 'Enter'){
    								props.insertCardTitle()
  								}	
							}
						}
					/>
			} else {
				return <div className ="todo-card__title"
						onClick = {props.showCardInfo}
					>
						{props.cardTitle}
					<div className="todo-card__icon-wrap">
						{props.haveDescr ?
						<span className="todo-card__icon"></span>
						:
						<></>}
					</div>
				</div>
			}
		}
	}
	return (
		<div className="todo-card">
			{rendCard()}
		</div>
		)
}

export default TodoCard