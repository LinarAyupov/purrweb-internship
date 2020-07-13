import React from "react"
import Auth from "../components/Auth/Auth"
import { connect } from "react-redux"
import { setAuthorName } from "../actions/authActions"


class AuthContainer extends React.Component {
  constructor(props) {
    super(props)
    this.inputRef = React.createRef()
  }
  addAuthor = () => {
    if (this.inputRef.current) {
      let authorName = this.inputRef.current.value
      this.props.setAuthorName(authorName)
    } else {
      return null
    }
  }
  render() {
    return <Auth
      inputRef={this.inputRef}
      addAuthor={this.addAuthor}
    />
  }
}
const mapStateToProps = (state) => {
  return {
    authorName: state.authData.authorName
  }
}
export default connect(mapStateToProps, { setAuthorName })(AuthContainer)