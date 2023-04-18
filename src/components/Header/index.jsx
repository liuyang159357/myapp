import React from 'react'
import { v4 as uuidv4 } from 'uuid'

export default function Header(props) {
  const { addTodo } = props
  const myRef = React.createRef()
  const handleEnter = (e) => {
    if (e.keyCode === 13) {
      myRef.current.value.trim() && addTodo({name:myRef.current.value,id:uuidv4(),done:false})
      myRef.current.value=''
    }
  }
  return (
    <div className="todo-header">
      <input type="text" ref={myRef} placeholder="请输入你的任务名称，按回车键确认" onKeyUp={(e) => handleEnter(e)} />
    </div>

  )
}
