import React from "react"
import ReactDOM from "react-dom"
import TodoCard from "../components/TodoCard/TodoCard"
import { connect } from "react-redux"
import {
  setNewCardTitle,
  insertCardTitle,
  showCardInfo,
  deleteCard,
} from "../actions/columnActions"
import { deleteAllCommentsInsideCard } from "../actions/commentActions"
import CardInfoContainer from "../containers/CardInfoContainer"



class TodoCardContainer extends React.Component {
  constructor(props) {
    super(props)
    this.card = {}
    this.props.todoCards.forEach((card) => {
      if (card.colId === this.props.columnId && card.cardId === this.props.cardId) {
        this.card = card
      }
    })
    this.commentsCount = 0
  }
  UNSAFE_componentWillMount() {
    this.props.commentsList.forEach(comment => {
      if (comment.colId === this.props.columnId && comment.cardId === this.props.cardId) {
        this.commentsCount++
      }
    })
  }
  componentDidUpdate() {
    this.commentsCount = 0
    this.props.commentsList.forEach(comment => {
      if (comment.colId === this.props.columnId && comment.cardId === this.props.cardId) {
        this.commentsCount++
      }
    })
  }
  editCardTitle = (e) => {
    const cardId = this.card.cardId
    let newTitle = e.target.value
    this.props.setNewCardTitle(cardId, newTitle)
  }
  insertCardTitle = () => {
    this.props.insertCardTitle(this.card.cardId)
  }
  deleteCard = () => {
    this.props.deleteCard(this.card.cardId)
    this.props.deleteAllCommentsInsideCard(this.card.cardId)
  }
  renderCardInfoWindow = (e) => {
    this.props.showCardInfo(this.card.cardId, this.card.colId)
  }

  render() {
    return (
      <>
        <TodoCard
          cardTitle={this.card.title}
          isCardActive={this.card.isCardActive}
          editCardTitle={this.editCardTitle}
          insertCardTitle={this.insertCardTitle}
          renderCardInfoWindow={this.renderCardInfoWindow}
          haveDescr={this.card.haveDescr}
          isShowInfo={this.card.isShowInfo}
          haveComment={this.commentsCount !== 0 ? true : false}
          commentsCount={this.commentsCount}
        />
        {
          this.card.isShowInfo ?
            ReactDOM.createPortal(<CardInfoContainer
              colTitle={this.props.colTitle}
              cardTitle={this.card.title}
              authorName={this.props.authorName}
              renderCardInfoWindow={this.renderCardInfoWindow}
              cardId={this.card.cardId}
              colId={this.card.colId}
              cardDescr={this.card.description}
              haveDescr={this.card.haveDescr}
              insertCardTitle={this.insertCardTitle}
              editCardTitle={this.editCardTitle}
              isCardActive={this.card.isCardActive}
              deleteCard={this.deleteCard}
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
    authorName: state.authData.authorName,
    commentsList: state.commentsData.comments
  }
}
const mapDispatchToProps = {
  setNewCardTitle,
  insertCardTitle,
  showCardInfo,
  deleteCard,
  deleteAllCommentsInsideCard
}
export default connect(mapStateToProps, mapDispatchToProps)(TodoCardContainer)