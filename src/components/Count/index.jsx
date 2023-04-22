import React, { useState } from 'react'
import { connect } from 'react-redux'

import { incrementAction, decrementAction, incrementAsyncAction } from '../../redux/action/count'
function Count(props) {
    console.log(props);
    const { incrementAction, decrementAction, incrementAsyncAction, count } = props
    const selectNumber = React.createRef()
    const increment = () => {
        const { value } = selectNumber.current
        incrementAction((Number(value)))
    }
    const decrement = () => {
        const { value } = selectNumber.current
        decrementAction((Number(value)))
    }
    const incrementIfOdd = () => {
        const { value } = selectNumber.current
        count % 2 !== 0 && incrementAction((Number(value)))

    }
    const incrementAsync = () => {
        const { value } = selectNumber.current
        console.log(value);
        incrementAsyncAction(Number(value), 2000)

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
export default connect(
    (state) => ({ count: state }),
    {
        incrementAction,
        decrementAction,
        incrementAsyncAction
    }
)(Count)
