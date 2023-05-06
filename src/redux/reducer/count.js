//创建一个为Count服务的reducer
// reducer会接收俩个参数，分别为：之前的状态（preState),动作对象（action)
import {INCREMENT,DECREMENT} from '../constant.js'
function countReducer(preState=0, action) {
    const { type, data } = action
    switch (type) {
        case INCREMENT:
            return preState += data
        case DECREMENT:
            return preState -= data
        default:
           return preState

    }
}
export default countReducer