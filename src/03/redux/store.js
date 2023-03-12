import { createStore,combineReducers, applyMiddleware ,compose} from 'redux'
import reduxThunk from 'redux-thunk'

import TarbbarReducer from './reducers/TabbarReducer'
import ListReducer from './reducers/ListReducer'
const reducer=combineReducers({TarbbarReducer,ListReducer})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer,composeEnhancers(applyMiddleware(reduxThunk)))
export default store



//实现redux
function redux(reducer) {
    let state=reducer()
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