import React from "react"
import Auth from "./Auth"
import { connect } from "react-redux"
import { setAuthorName } from "../../Redux/board-reducer"


class AuthContainer extends React.Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef()
        this.authorData = localStorage.getItem("authorName")
    }
    componentDidMount() {
        if (this.authorData) {
            this.props.setAuthorName(this.authorData)
        }
    }
    addAuthor() {
        if (this.inputRef.current) {
            let authorName = this.inputRef.current.value
            this.props.setAuthorName(authorName)
            localStorage.setItem("authorName", authorName)
        } else {
            return null
        }
    }
    render() {
        return <Auth
            inputRef={this.inputRef}
            addAuthor={this.addAuthor.bind(this)}
        />
    }
}
const mapStateToProps = (state) => {
    return {
        authorName: state.boardData.authorName
    }
}
export default connect(mapStateToProps, { setAuthorName })(AuthContainer)