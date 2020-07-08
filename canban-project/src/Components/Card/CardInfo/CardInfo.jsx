import React from "react"


const CardInfo = (props) => {
    return (
       <>
        <div className="card-info" >
        <div className="test" onClick = {props.showCardInfo}/>
            <div className="card-info__wrap" id = "card-info__wrap" >
                <header className="card-info__header">
                    <span className="card-info__close" onClick = {props.showCardInfo}>&times;</span>
                    {!props.isCardActive ?
                        <input type = "text"
						className = "todo-card__input"
						defaultValue = {props.cardTitle}
						onChange = {props.editCardTitle}
						onBlur = {()=>setTimeout(props.insertCardTitle,200)}
						placeholder = "Enter a title for this card..."
						autoFocus = {true}
						onKeyPress= {
							(e) => {
  								if(e.key === 'Enter'){
    								props.insertCardTitle()
  								}	
							}
						}
                    /> :
                    
                    <div className="card-info__title">
                        <h3>{props.cardTitle} </h3>
                        <span className="edit-icon info" onClick={props.insertCardTitle}></span>
                    </div>}
                </header>
                <div className="card-info__descr">
                    <h3 className="card-info__descr-title">Description:</h3>
                    <p className="card-info__descr-text">
                    {props.cardDescr}
                    </p>
                    {   props.haveDescr ?
                        <div className="edit-icon descr" onClick={props.editCardDescription}></div> :
                         <div>
                              <textarea 
                                ref = {props.descrInputRef}
                                name="description"
                                rows = "3"
                                className ="card-info__input-text"></textarea>
                            <button className ="add-btn"
                                onClick = {props.addNewDescription}>
                                Add description
                             </button>
                         </div>
                    }
                </div>
                <div className="card-info__comments">
                    <div className="card-info__comments-container">
                        <h3 className ="card-info__comments-title">Comments:</h3>
                        {props.showCardComments()}
                    </div>
                    <div className="card-info__comments-items">
                        {props.isCommentAdded ?
                            <button className ="add-btn" onClick = {props.addCardComment}>Add comment</button>
                        :
                        <button className ="add-btn">Add comment</button>}
                    </div>
                </div>
                <button className ="delete-btn" onClick = {props.deleteCard}>Delete card...</button>
            </div>
        </div>
       </>
    )
}

export default CardInfo