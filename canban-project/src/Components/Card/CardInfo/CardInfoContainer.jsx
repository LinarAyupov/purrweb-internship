import React from "react"
import CardInfo from "./CardInfo"
import { connect } from "react-redux"
import {setCardDescr} from "../../../Redux/todo-reducer"


class CardInfoContainer extends React.Component {
    constructor(props) {
        super(props)
        this.descrInputRef = React.createRef()
    }
    addNewDescription () {
        let descrText = this.descrInputRef.current.value
        this.props.setCardDescr(descrText,this.props.cardId,this.props.colId)
    }
    render() {
        return <CardInfo
                cardTitle = {this.props.cardTitle}
                showCardInfo = {this.props.showCardInfo}
                descrInputRef = {this.descrInputRef}
                addNewDescription = {this.addNewDescription.bind(this)}
                cardDescr = {this.props.cardDescr}
            />
    }
}





const mapStateToProps = (state) => {
    return {

    }
}
const mapDispatchToProps = {
    setCardDescr,
}


export default connect(mapStateToProps,mapDispatchToProps)(CardInfoContainer)