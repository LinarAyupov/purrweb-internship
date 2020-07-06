
const SET_TODO_CARD = "SET-TODO-CARD"
const SET_NEW_CARD_TITLE = "SET-NEW-CARD-TITLE"
const INSERT_CARD_TITLE = "INSERT-CARD-TITLE"

let initialState = {
	cards:[]
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

export default todoColumn