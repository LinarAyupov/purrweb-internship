import React from "react"
import CardInfo from "../components/CardInfo/CardInfo"
import { connect } from "react-redux"
import { setCardDescr, editCardDescr, deleteCardDescr } from "../actions/columnActions"

class CardInfoContainer extends React.Component {
  constructor(props) {
    super(props)
    this.descrInputRef = React.createRef()
  }
  addNewDescription = () => {
    let descrText = this.descrInputRef.current.value
    this.props.setCardDescr(descrText, this.props.cardId, this.props.colId)
  }
  editCardDescription = () => {
    this.props.editCardDescr(this.props.cardId, this.props.colId)
  }
  deleteDescription = () => {
    this.props.deleteCardDescr(this.props.cardId, this.props.colId)
  }
  render() {
    return <CardInfo
      authorName={this.props.authorName}
      colTitle={this.props.colTitle}
      cardTitle={this.props.cardTitle}
      renderCardInfoWindow={this.props.renderCardInfoWindow}
      descrInputRef={this.descrInputRef}
      addNewDescription={this.addNewDescription}
      cardDescr={this.props.cardDescr}
      addCardComment={this.props.addCardComment}
      showCardComments={this.props.showCardComments}
      isCommentAdded={this.props.isCommentAdded}
      haveDescr={this.props.haveDescr}
      editCardDescription={this.editCardDescription}
      insertCardTitle={this.props.insertCardTitle}
      editCardTitle={this.props.editCardTitle}
      isCardActive={this.props.isCardActive}
      deleteCard={this.props.deleteCard}
      deleteDescription={this.deleteDescription}
    />
  }
}





const mapStateToProps = (state) => {
  return {

  }
}
const mapDispatchToProps = {
  setCardDescr,
  editCardDescr,
  deleteCardDescr
}


export default connect(mapStateToProps, mapDispatchToProps)(CardInfoContainer)