
export const SET_TODO_CARD = "SET-TODO-CARD"
export const SET_NEW_CARD_TITLE = "SET-NEW-CARD-TITLE"
export const INSERT_CARD_TITLE = "INSERT-CARD-TITLE"
export const SHOW_CARD_INFO = "SHOW-CARD-INFO"
export const SET_CARD_DESCR = "SET-CARD-DESCR"
export const EDIT_CARD_DESCR = "EDIT-CARD-DESCR"
export const SET_CARD_COMMENT = "SET-CARD-COMMENT"
export const SET_CARD_COMMENT_TEXT = "SET-CARD-COMMENT-TEXT"
export const DELETE_CARD = "DELETE-CARD"
export const SET_LOCAL_CARD_DATA = "SET-LOCAL-CARD-DATA"
export const DELETE_CARD_WITH_COL_ID = "DELETE-CARD-WITH-COL-ID"
export const DELETE_CARD_DESCR = "DELETE-CARD-DESCR"
export const EDIT_CARD_COMMENT = "EDIT-CARD-COMMENT"
export const DELETE_CARD_COMMENT = "DELETE_CARD_COMMENT"

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
	[SET_CARD_COMMENT]: (state, action) => {
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
	[SET_CARD_COMMENT]: (state, action) => {
		return {
			...state,
			...state.cards.forEach(card => {
				if (card.colId === action.colId && card.cardId === action.cardId) {
					card.comments.push(action.commentItem)
					card.haveComments = true
				}
			}),
			cards: [...state.cards]
		}
	},
	[SET_CARD_COMMENT_TEXT]: (state, action) => {
		return {
			...state,
			...state.cards.forEach(card => {
				if (card.colId === action.colId && card.cardId === action.cardId) {
					card.comments.forEach(comment => {
						if (comment.comId === action.commentId) {
							comment.text = action.commentText
							comment.isCommentActive = true
						}
					})
				}
			}),
			cards: [...state.cards]
		}
	},
	[EDIT_CARD_COMMENT]: (state, action) => {
		return {
			...state,
			...state.cards.forEach(card => {
				if (card.colId === action.colId && card.cardId === action.cardId) {
					card.comments.forEach(comment => {
						if (comment.comId === action.commentId) {
							comment.isCommentActive = false
						}
					})
				}
			}),
			cards: [...state.cards]
		}
	},
	[DELETE_CARD_COMMENT]: (state, action) => {
		return {
			...state,
			...state.cards.forEach(card => {
				if (card.colId === action.colId && card.cardId === action.cardId) {
					card.comments = card.comments.filter(comment => {
						if (comment.comId !== action.commentId) return comment
					})
					if (card.comments.length === 0) {
						card.haveComments = false
					}
				}
			}),
			cards: [...state.cards]
		}
	},
	[SET_LOCAL_CARD_DATA]: (state, action) => {
		return {
			...state,
			cards: action.data
		}
	},
}

export default function todoColumnReducer(state = initialState, action) {
	const reduceFn = actionMap[action.type];
	return reduceFn ? reduceFn(state, action) : state;
}

