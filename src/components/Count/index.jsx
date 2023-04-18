import React, { useState } from 'react'
import store from '../../redux/store.js'
import { incrementAction, decrementAction, incrementAsyncAction } from '../../redux/action/count_action.js'
export default function Count() {
    const [count, setCount] = useState(store.getState())
    store.subscribe(() => {
        setCount(store.getState())
    })
    const selectNumber = React.createRef()
    const increment = () => {
        const { value } = selectNumber.current
        store.dispatch(incrementAction(Number(value)))
    }
    const decrement = () => {
        const { value } = selectNumber.current
        store.dispatch(decrementAction(Number(value)))

    }
    const incrementIfOdd = () => {
        const { value } = selectNumber.current
        store.getState() % 2 !== 0 && store.dispatch(incrementAction(Number(value)))

    }
    const incrementAsync = () => {
        const { value } = selectNumber.current
        store.dispatch(incrementAsyncAction(Number(value), 1000))


    }
    return (
        <div>
            <h1>当前求和为：{count}</h1>
            <select ref={selectNumber}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>&nbsp;
            <button onClick={increment}>+</button>&nbsp;
            <button onClick={decrement}>-</button>&nbsp;
            <button onClick={incrementIfOdd}>当前为奇数再加</button>&nbsp;
            <button onClick={incrementAsync}>异步加</button>
        </div>
    )
}
