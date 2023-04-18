import React, { useState } from 'react'

export default function Item(props) {
  const { data,deleteTodo,checked } = props
  const [mouse, setMouse] = useState(false)
  const myRef2 = React.createRef()
  return (
    <li onMouseLeave={() => setMouse(false)} onMouseEnter={() => setMouse(true)}>
      <label>
        <input ref={myRef2} type="checkbox" checked={data.done} onChange={() => {
          checked(data.id)
        }} />
        <span>{data.name}</span>
      </label>
      <button className="btn btn-danger" style={{ display: mouse ? '' : 'none' }} onClick={()=>{
        deleteTodo(data.id)
      }}>删除</button>
    </li>
  )
}
