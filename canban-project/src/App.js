import React from 'react';
import BoardContainer from "./Components/Board/BoardContainer"
import { connect } from 'react-redux';
import AuthContainer from './Components/Auth/AuthContainer';

function App(props) {
  return (
    <div className="App">
      {
        props.isAuth ?
          <BoardContainer /> :
          <AuthContainer />
      }
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    isAuth: state.boardData.isAuth
  }
}

export default connect(mapStateToProps)(App);
