import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import TarbbarReducer from './reducers/TabbarReducer'
import ListReducer from './reducers/ListReducer'

import reduxThunk from 'redux-thunk' // 异步操作 

//redux持久化
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
const persistConfig = {
    key: 'liu',
    storage
}
const reducer = combineReducers({ TarbbarReducer, ListReducer })//合并reducer

const persistedReducer = persistReducer(persistConfig, reducer)


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(reduxThunk)))
let persistor = persistStore(store)
export{ store,persistor }

 
//实现redux
function redux(reducer) {
    let state = reducer()
    let list = []
    function subscribe(callback) {
        list.push(callback)
    }
    function dispatch(action) {
        state = reducer(state, action)
        for (let i in list) {
            list[i] && list[i]()
        }
    }
    function getState() {
        return state
    }
    return {
        subscribe,
        dispatch,
        getState
    }
}