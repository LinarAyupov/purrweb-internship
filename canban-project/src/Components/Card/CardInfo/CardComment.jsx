import React from "react"


const CardComment = (props) => {
    const comInput = React.createRef()
    const addComment =() => {
        let comText = comInput.current.value
        let comId = props.commentId
        if(comText === ""){
            return null
        } else {
            props.addCommentText(comText,comId)
        }
        
}
    return (
       <div className ="card-info__comment-wrap">
       {props.isCommentActive ?
        <div className="card-info__comment-text">
            {props.commentText}
        </div> :
        <input type = "text"
            ref = {comInput}
            onBlur = {() => setTimeout(addComment,200)}
            placeholder = "Write a comments..."
            className ="card-info__comment-input"
        />}
       </div>
    )
}

export default CardComment