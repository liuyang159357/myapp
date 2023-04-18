import {createStore} from 'redux'
import count_reducer from './reducer/count_reducer'
export default createStore(count_reducer)