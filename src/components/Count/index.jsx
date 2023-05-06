import React, { useState } from 'react'
import { connect } from 'react-redux'

import { incrementAction, decrementAction, incrementAsyncAction } from '../../redux/action/count'
function Count(props) {
    const { incrementAction, decrementAction, incrementAsyncAction, count,person } = props
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
            <h2>我是Count组件</h2>
            <h3>当前求和为：{count}</h3>
            <select ref={selectNumber}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>&nbsp;
            <button onClick={increment}>+</button>&nbsp;
            <button onClick={decrement}>-</button>&nbsp;
            <button onClick={incrementIfOdd}>当前为奇数再加</button>&nbsp;
            <button onClick={incrementAsync}>异步加</button>
            <br />
            <ul>
             {person?.map((i)=>{
                return <li key={i.id}>{i.name}--{i.age}</li>
             })}
            </ul>
        </div>
    )
}
export default connect(
    ({count,person}) => ({ count: count,person }),
    {
        incrementAction,
        decrementAction,
        incrementAsyncAction
    }
)(Count)
