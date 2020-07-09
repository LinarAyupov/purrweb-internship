import React from "react"
import Auth from "./Auth"
import { connect } from "react-redux"
import {setAuthorName} from "../../Redux/board-reducer"


class AuthContainer extends React.Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef()
    }
    addAuthor(){
        if(this.inputRef.current){
            let authorName = this.inputRef.current.value
            this.props.setAuthorName(authorName)
        } else {
            return null
        }
    }
    render(){
        return <Auth
            inputRef = {this.inputRef}
            addAuthor = {this.addAuthor.bind(this)}
             />
    }
}

export default connect(null,{setAuthorName})(AuthContainer)