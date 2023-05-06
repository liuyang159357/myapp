import {createStore,applyMiddleware,combineReducers} from 'redux'
import reduxThunk from 'redux-thunk'

import count from './reducer/count'
import person from './reducer/person'
const reducer=combineReducers({count,person})//合并reducer

export default createStore(reducer,applyMiddleware(reduxThunk))