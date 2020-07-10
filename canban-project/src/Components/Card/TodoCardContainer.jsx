import React from "react"
import ReactDOM from "react-dom"
import TodoCard from "./TodoCard"
import { connect } from "react-redux"
import {
    setNewCardTitle,
    insertCardTitle,
    showCardInfo,
    setCardComments,
    setCardCommentText,
    deleteCard,
    editCardComment,
    deleteComment
} from "../../Redux/todo-reducer.js"
import CardInfoContainer from "../Card/CardInfo/CardInfoContainer"
import CardComment from "./CardInfo/CardComment"



class TodoCardContainer extends React.Component {
    constructor(props) {
        super(props)
        this.card = {}
        this.props.todoCards.forEach((card) => {
            if (card.colId === this.props.columnId && card.cardId === this.props.cardId) {
                this.card = card

            }
        })

    }
    getCommentActiveState() {
        let commentActive = true
        if (this.card.comments.length !== 0) {
            commentActive = this.card.comments[this.card.comments.length - 1].isCommentActive
        }
        return commentActive
    }
    editCardTitle(e) {
        const cardId = this.card.cardId
        let newTitle = e.target.value
        this.props.setNewCardTitle(cardId, newTitle)
    }
    insertCardTitle() {
        this.props.insertCardTitle(this.card.cardId)
    }
    deleteCard() {
        this.props.deleteCard(this.card.cardId)
    }
    renderCardInfoWindow(e) {
        this.props.showCardInfo(this.card.cardId, this.card.colId)
    }
    addCardComment() {
        let newComId = 0
        this.card.comments.forEach(comment => {
            let commId = Number(comment.comId)
            if (commId >= newComId) {
                newComId = commId + 1
            }
        })
        let newKey = Math.floor(Math.random() * 10000)
        const colId = this.card.colId
        const cardId = this.card.cardId
        const commentItem = {
            comId: newComId,
            key: newKey,
            isCommentActive: false,
            text: '',
        }
        this.props.setCardComments(colId, cardId, commentItem)
    }
    addCommentText(comText, comId) {
        let commentText = comText
        const colId = this.card.colId
        const cardId = this.card.cardId
        const commentId = comId

        this.props.setCardCommentText(colId, cardId, commentId, commentText)
    }
    editCardComment(comId) {
        const colId = this.card.colId
        const cardId = this.card.cardId
        this.props.editCardComment(colId, cardId, comId)
    }
    deleteCardComment(comId) {
        const colId = this.card.colId
        const cardId = this.card.cardId
        this.props.deleteComment(colId, cardId, comId)
    }
    showCardComments() {
        return this.card.comments.map((comment) => {
            return <CardComment
                commentText={comment.text}
                isCommentActive={comment.isCommentActive}
                commentId={comment.comId}
                addCommentText={this.addCommentText.bind(this)}
                editCardComment={this.editCardComment.bind(this)}
                deleteCardComment={this.deleteCardComment.bind(this)}
                key={comment.key}
                authorName={this.props.authorName}

            />
        })
    }

    render() {
        return (
            <>
                <TodoCard
                    cardTitle={this.card.title}
                    isCardActive={this.card.isCardActive}
                    editCardTitle={this.editCardTitle.bind(this)}
                    insertCardTitle={this.insertCardTitle.bind(this)}
                    renderCardInfoWindow={this.renderCardInfoWindow.bind(this)}
                    haveDescr={this.card.haveDescr}
                    isShowInfo={this.card.isShowInfo}
                    haveComment={this.card.haveComments}
                    commentsCount={this.card.comments.length}
                />
                {
                    this.card.isShowInfo ?
                        ReactDOM.createPortal(<CardInfoContainer
                            colTitle={this.props.colTitle}
                            cardTitle={this.card.title}
                            authorName={this.props.authorName}
                            renderCardInfoWindow={this.renderCardInfoWindow.bind(this)}
                            cardId={this.card.cardId}
                            colId={this.card.colId}
                            cardDescr={this.card.description}
                            addCardComment={this.addCardComment.bind(this)}
                            showCardComments={this.showCardComments.bind(this)}
                            isCommentAdded={this.getCommentActiveState()}
                            haveDescr={this.card.haveDescr}
                            insertCardTitle={this.insertCardTitle.bind(this)}
                            editCardTitle={this.editCardTitle.bind(this)}
                            isCardActive={this.card.isCardActive}
                            deleteCard={this.deleteCard.bind(this)}
                            key={this.props.key}
                        />,
                            document.getElementById('card-info__modal')) :
                        <div></div>
                }
            </>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        todoCards: state.todoData.cards,
        authorName: state.boardData.authorName
    }
}
const mapDispatchToProps = {
    setNewCardTitle,
    insertCardTitle,
    showCardInfo,
    setCardComments,
    setCardCommentText,
    editCardComment,
    deleteComment,
    deleteCard
}
export default connect(mapStateToProps, mapDispatchToProps)(TodoCardContainer)