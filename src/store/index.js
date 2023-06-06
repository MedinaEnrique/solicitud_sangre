import { createStore } from 'redux'
import persistReducer from 'redux-persist/es/persistReducer'
import persistStore from 'redux-persist/es/persistStore'
import storage from 'redux-persist/lib/storage';

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

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

//store
const store = createStore(persistedReducer)
const persistor = persistStore(store)

export { store, persistor }
