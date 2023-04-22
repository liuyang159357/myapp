import {createStore,applyMiddleware} from 'redux'
import count from './reducer/count'
import reduxThunk from 'redux-thunk'
export default createStore(count,applyMiddleware(reduxThunk))