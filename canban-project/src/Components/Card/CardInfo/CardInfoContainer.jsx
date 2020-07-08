import React from "react"
import CardInfo from "./CardInfo"
import { connect } from "react-redux"
import {setCardDescr,editCardDescr} from "../../../Redux/todo-reducer"


class CardInfoContainer extends React.Component {
    constructor(props) {
        super(props)
        this.descrInputRef = React.createRef()
    }
    addNewDescription() {
        let descrText = this.descrInputRef.current.value
        this.props.setCardDescr(descrText,this.props.cardId,this.props.colId)
    }
    editCardDescription() {
        this.props.editCardDescr(this.props.cardId,this.props.colId)
    }
    render() {
        return <CardInfo
                cardTitle = {this.props.cardTitle}
                showCardInfo = {this.props.showCardInfo}
                descrInputRef = {this.descrInputRef}
                addNewDescription = {this.addNewDescription.bind(this)}
                cardDescr = {this.props.cardDescr}
                addCardComment = {this.props.addCardComment}
                showCardComments = {this.props.showCardComments}
                isCommentAdded = {this.props.isCommentAdded}
                haveDescr = {this.props.haveDescr}
                editCardDescription = {this.editCardDescription.bind(this)}
                insertCardTitle = {this.props.insertCardTitle}
                editCardTitle = {this.props.editCardTitle}
                isCardActive = {this.props.isCardActive}
                deleteCard = {this.props.deleteCard}
            />
    }
}





const mapStateToProps = (state) => {
    return {

    }
}
const mapDispatchToProps = {
    setCardDescr,
    editCardDescr
}


export default connect(mapStateToProps,mapDispatchToProps)(CardInfoContainer)