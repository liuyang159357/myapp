import React from 'react'
import Item from '../Item'
export default function List(props) {
    const{list,deleteTodo,checked}=props
    return (
        <ul className="todo-main">
            {list?.map((i)=>{
               return <Item key={i.id} data={i} deleteTodo={deleteTodo} checked={checked}></Item>
            })}
        </ul>
    )
}
