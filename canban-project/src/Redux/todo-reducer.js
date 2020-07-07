
const SET_TODO_CARD = "SET-TODO-CARD"
const SET_NEW_CARD_TITLE = "SET-NEW-CARD-TITLE"
const INSERT_CARD_TITLE = "INSERT-CARD-TITLE" 
const SHOW_CARD_INFO = "SHOW-CARD-INFO"
const SET_CARD_DESCR = "SET-CARD-DESCR"


let initialState = {
	cards:[
		{
			colId:0,
			cardId: 0,	
			isCardActive: false,
			isShowInfo:false,
			title:"",
			haveDescr: false,
			description:""
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
                        card.isCardActive = true
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




export default todoColumn