//创建一个为Count服务的action对象
import { INCREMENT, DECREMENT } from '../constant'

export const incrementAction = (data) => {
    return { type: INCREMENT, data }
}
export const decrementAction = (data) => {
    return { type: DECREMENT, data }
}
export const incrementAsyncAction = (data, time) => {
    return (dispatch) => {
        setTimeout(() => {
          dispatch(incrementAction(data))
        }, time)
    }

}