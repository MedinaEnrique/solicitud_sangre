import { createStore } from 'redux'
const initialState = { token: null, user: null } //estado inicial 

//reducer
const rootReducer = (state = initialState, action) => {
    if (action.type === "setToken") {
        return {
            ...state,
            token: action.payload
        }
    }
    if (action.type === "nullToken") {
        return {
            ...state,
            token: null
        }
    }
    if (action.type === "setUser") {
        return {
            ...state,
            user: action.payload
        }
    }
    if (action.type === "nullUser") {
        return {
            ...state,
            user: null
        }
    }
    return state
}
//store
const store = createStore(rootReducer)

export default store
