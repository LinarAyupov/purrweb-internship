import React from 'react';
import Auth from '../components/Auth';
import { connect } from 'react-redux';
import { setAuthorName } from '../actions/authActions';
import { getAuthor } from '../selectors/selectors';

class AuthContainer extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }
  addAuthor = () => {
    if (this.inputRef.current) {
      let authorName = this.inputRef.current.value;
      this.props.setAuthorName({ authorName });
    } else {
      return null;
    }
  };
  render() {
    return <Auth inputRef={this.inputRef} addAuthor={this.addAuthor} />;
  }
}
const mapStateToProps = (state) => {
  return {
    authorName: getAuthor(state),
  };
};
export default connect(mapStateToProps, { setAuthorName })(AuthContainer);
