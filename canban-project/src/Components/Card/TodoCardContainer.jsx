import React from "react"
import TodoCard from "./TodoCard"
import { connect } from "react-redux"
import {setNewCardTitle, insertCardTitle,showCardInfo,setCardComments,setCardCommentText} from "../../Redux/todo-reducer.js"
import CardInfoContainer from "../Card/CardInfo/CardInfoContainer"
import CardComment from "./CardInfo/CardComment"



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
    addCardComment() {
        let newComId =  0
        this.card.comments.forEach( comment => {
			let commtId = Number(comment.comId)
			if(commtId >= newComId) {
				newComId = commtId+1
			}			
		})
        const colId = this.card.colId
        const cardId = this.card.cardId
        const commentItem = {
            comId:newComId,
            isCommentActive:false,
            text:'some comment',
        }
        this.props.setCardComments(colId,cardId,commentItem)
    }
    addCommentText(comText,comId) {
        let commentText = comText
        const colId = this.card.colId
        const cardId = this.card.cardId
        const commentId = comId

        this.props.setCardCommentText(colId,cardId,commentId,commentText)
    }
    showCardComments() {
        return this.card.comments.map((comment, index) => {
            return <CardComment
                        commentText = {comment.text}
                        isCommentActive = {comment.isCommentActive}
                        commentId = {comment.comId}
                        addCommentText = {this.addCommentText.bind(this)}
                        key = {index}
                />
        })
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
                        addCardComment = {this.addCardComment.bind(this)}
                        showCardComments = {this.showCardComments.bind(this)}
                        isCommentAdded = {this.card.comments[this.card.comments.length-1].isCommentActive}
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
    setCardComments,
    setCardCommentText
}
export default connect(mapStateToProps,mapDispatchToProps)(TodoCardContainer)