import React, { useState } from 'react'

export default function Login(props) {
    const [state, setstate] = useState('')
    return (
        <div>
            <input type='text' value={state} onChange={(e)=>{
                setstate(e.target.value)
            }}/>
            <button type="" onClick={()=>{
            localStorage.setItem('token',state)
            props.history.push('/c')
            }}>登录</button>
        </div>
    )
}
