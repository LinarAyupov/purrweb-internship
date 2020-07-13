import React from "react"


const Auth = (props) => {

  return (
    <div className="auth-overlay">
      <div className="auth-container">
        <h1 className="auth__title">Hello! Please enter your name!</h1>
        <input ref={props.inputRef} type="text" className="auth__input" maxLength={25} onKeyDown={e => { if (e.keyCode === 13) props.addAuthor() }} />
        <button className="auth__submit" onClick={props.addAuthor} >Get start!</button>
      </div>
    </div>
  )
}
export default Auth