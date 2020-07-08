
const SET_TODO_CARD = "SET-TODO-CARD"
const SET_NEW_CARD_TITLE = "SET-NEW-CARD-TITLE"
const INSERT_CARD_TITLE = "INSERT-CARD-TITLE" 
const SHOW_CARD_INFO = "SHOW-CARD-INFO"
const SET_CARD_DESCR = "SET-CARD-DESCR"
const EDIT_CARD_DESCR = "EDIT-CARD-DESCR"
const SET_CARD_COMMENT = "SET-CARD-COMMENT"
const SET_CARD_COMMENT_TEXT = "SET-CARD-COMMENT-TEXT"
const DELETE_CARD = "DELETE-CARD"



let initialState = {
	cards:[
		{
			colId:0,
			cardId: 0,	
			key:0,
			isCardActive: false,
			isShowInfo:false,
			title:"",
			haveDescr: false,
			description:"",
			comments:[
				{
					comId:0,
					isCommentActive:false,
					text:'some comment',}
			]
		}
	]
}


const todoColumn = (state = initialState, action) => {
	switch (action.type) {
		case "SET-TODO-CARD":
			return {
				...state,
				cards:[...state.cards, action.cardItem]
			}
		case "DELETE-CARD":
			return {
				...state,
                cards:[...state.cards.filter( card => {
					if (card.cardId!==action.cardId) return card
				})]
			}
		case "SET-NEW-CARD-TITLE": 
			return {
				...state,
				...state.cards.forEach(card => {
                    if(card.cardId === action.cardId) {
                        card.title = action.newTitle
                    }
				}),
				cards:[...state.cards]
			}
		case "INSERT-CARD-TITLE":
			return {
				...state,
				...state.cards.forEach(card => {
                    if(card.cardId === action.cardId) {
						if(card.title === "") {
							card.title = "Some card title"
						}
                        card.isCardActive? card.isCardActive=false: card.isCardActive=true
                    }
				}),
				cards:[...state.cards]
			}
		case "SHOW-CARD-INFO":
			return {
				...state,
				...state.cards.forEach(card => {
                    if(card.cardId === action.cardId && card.colId === action.colId) {
                        card.isShowInfo ? card.isShowInfo = false : card.isShowInfo = true
                    }
				}),
				cards:[...state.cards]
			}
		case "SET-CARD-DESCR":
			return {
				...state,
				...state.cards.forEach(card => {
                    if(card.cardId === action.cardId && card.colId === action.colId) {
                        if(action.descrText !== "") {
							card.haveDescr = true
							card.description = action.descrText
						}
				}}),

				cards:[...state.cards]
			}
		case "EDIT-CARD-DESCR":
			return {
				...state,
				...state.cards.forEach(card => {
                    if(card.cardId === action.cardId && card.colId === action.colId) {
                        if(action.descrText !== "") {
							card.haveDescr = false
						}
				}}),

				cards:[...state.cards]
			} 
		case "SET-CARD-COMMENT":
			return {
				...state,
				...state.cards.forEach( card => {
					if(card.colId === action.colId && card.cardId === action.cardId) {
						card.comments.push(action.commentItem)
					}
				}),
				cards:[...state.cards]
			}
		case "SET-CARD-COMMENT-TEXT":
			return {
				...state,
				...state.cards.forEach( card => {
					if(card.colId === action.colId && card.cardId === action.cardId) {
						card.comments.forEach(comment => {
							if( comment.comId === action.commentId) {
								comment.text = action.commentText
								comment.isCommentActive = true
							}
						})
					}
				}),
				cards:[...state.cards]
			}
		default:
			return state;
	}
}

export const setNewTodoCard = (cardItem) => {
	return {
		type: SET_TODO_CARD,
		cardItem
	}
}
export const setNewCardTitle = (cardId,newTitle) => {
	return {
		type: SET_NEW_CARD_TITLE,
		cardId,
		newTitle
	}
}
export const insertCardTitle = (cardId) => {
	return {
		type:INSERT_CARD_TITLE,
		cardId
	}
}
export const showCardInfo = (cardId, colId) => {
	return {
		type: SHOW_CARD_INFO,
		cardId,
		colId
	}
}
export const setCardDescr = (descrText, cardId, colId ) => {
	return {
		type: SET_CARD_DESCR,
		descrText,
		cardId,
		colId
	}
}

export const setCardComments = (colId, cardId, commentItem) => {
	return {
		type: SET_CARD_COMMENT,
		colId,
		cardId,
		commentItem
	}
}

export const setCardCommentText = (colId,cardId,commentId,commentText) => {
	return {
		type: SET_CARD_COMMENT_TEXT,
		colId,
		cardId,
		commentId,
		commentText
	}
}
export const editCardDescr = (cardId,colId) => {
	return {
		type: EDIT_CARD_DESCR,
		cardId,
		colId
	}
}
export const deleteCard = (cardId) => {
	return {	
		type: DELETE_CARD,
		cardId
	}
	
}

export default todoColumn