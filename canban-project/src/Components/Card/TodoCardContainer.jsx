import React from "react"
import TodoCard from "./TodoCard"
import { connect } from "react-redux"
import {setNewCardTitle, insertCardTitle,showCardInfo} from "../../Redux/todo-reducer.js"
import CardInfoContainer from "../Card/CardInfo/CardInfoContainer"



class TodoCardContainer extends React.Component {
    constructor(props){
        super(props)
        this.card = {}
        this.props.todoCards.forEach(card => {
            if(card.colId === this.props.columnId) {
                this.card = card
            }
        })
    }
    editCardTitle(e) {
        const cardId = this.card.cardId
        let newTitle =  e.target.value
        this.props.setNewCardTitle(cardId,newTitle)
    }
    insertCardTitle () {
        if(this.card.title === "") {
			return null
		} else {
			this.props.insertCardTitle(this.card.cardId)
		}	
    }
    showCardInfo (e) {
        this.props.showCardInfo(this.card.cardId, this.card.colId)
    }

    render() {
        return (
            <>
            <TodoCard 
                cardTitle = {this.card.title}
                isCardActive = {this.card.isCardActive}
                editCardTitle = {this.editCardTitle.bind(this)}
                insertCardTitle = {this.insertCardTitle.bind(this)}
                showCardInfo = {this.showCardInfo.bind(this)}
            />
            {
					this.card.isShowInfo ?
					<CardInfoContainer 
                        cardTitle = {this.card.title}
                        showCardInfo = {this.showCardInfo.bind(this)}
                        cardId = {this.card.cardId}
                        colId = {this.card.colId}
                        cardDescr = {this.card.description}
                    /> :
					<div></div>
				}
            </>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        todoCards: state.todoData.cards
    }
}
const mapDispatchToProps = {
    setNewCardTitle,
    insertCardTitle,
    showCardInfo,
}
export default connect(mapStateToProps,mapDispatchToProps)(TodoCardContainer)