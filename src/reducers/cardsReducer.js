
export const SET_TODO_CARD = "SET-TODO-CARD"
export const SET_NEW_CARD_TITLE = "SET-NEW-CARD-TITLE"
export const INSERT_CARD_TITLE = "INSERT-CARD-TITLE"
export const SHOW_CARD_INFO = "SHOW-CARD-INFO"
export const SET_CARD_DESCR = "SET-CARD-DESCR"
export const EDIT_CARD_DESCR = "EDIT-CARD-DESCR"
export const DELETE_CARD = "DELETE-CARD"
export const DELETE_CARD_WITH_COL_ID = "DELETE-CARD-WITH-COL-ID"
export const DELETE_CARD_DESCR = "DELETE-CARD-DESCR"

let initialState = {
	cards: [
	]
}
const actionMap = {
	[SET_TODO_CARD]: (state, action) => {
		return {
			...state,
			cards: [...state.cards, action.cardItem]
		}
	},
	[DELETE_CARD]: (state, action) => {
		return {
			...state,
			cards: [...state.cards.filter(card => {
				if (card.cardId !== action.cardId) return card
			})]
		}
	},
	[DELETE_CARD_WITH_COL_ID]: (state, action) => {
		return {
			...state,
			cards: [...state.cards.filter(card => {
				if (card.colId !== action.colId) return card
			})]
		}
	},
	[SET_NEW_CARD_TITLE]: (state, action) => {
		return {
			...state,
			...state.cards.forEach(card => {
				if (card.cardId === action.cardId) {
					card.title = action.newTitle
				}
			}),
			cards: [...state.cards]
		}
	},
	[INSERT_CARD_TITLE]: (state, action) => {
		return {
			...state,
			...state.cards.forEach(card => {
				if (card.cardId === action.cardId) {
					if (card.title === "") {
						card.title = "Some card title"
					}
					card.isCardActive ? card.isCardActive = false : card.isCardActive = true
				}
			}),
			cards: [...state.cards]
		}
	},
	[SHOW_CARD_INFO]: (state, action) => {
		return {
			...state,
			...state.cards.forEach(card => {
				if (card.cardId === action.cardId && card.colId === action.colId) {
					card.isShowInfo ? card.isShowInfo = false : card.isShowInfo = true
				}
			}),
			cards: [...state.cards]
		}
	},
	[SET_CARD_DESCR]: (state, action) => {
		return {
			...state,
			...state.cards.forEach(card => {
				if (card.cardId === action.cardId && card.colId === action.colId) {
					if (action.descrText !== "") {
						card.haveDescr = true
						card.description = action.descrText
					}
				}
			}),
			cards: [...state.cards]
		}
	},
	[EDIT_CARD_DESCR]: (state, action) => {
		return {
			...state,
			...state.cards.forEach(card => {
				if (card.cardId === action.cardId && card.colId === action.colId) {
					if (action.descrText !== "") {
						card.haveDescr = false
					}
				}
			}),

			cards: [...state.cards]
		}
	},
	[DELETE_CARD_DESCR]: (state, action) => {
		return {
			...state,
			...state.cards.forEach(card => {
				if (card.cardId === action.cardId && card.colId === action.colId) {
					card.description = ""
					card.haveDescr = false
				}
			}),

			cards: [...state.cards]
		}
	},

}

export default function columnReducer(state = initialState, action) {
	const reduceFn = actionMap[action.type];
	return reduceFn ? reduceFn(state, action) : state;
}

