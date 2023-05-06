import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import { connect } from 'react-redux'
import { addPersonActopn } from '../../redux/action/person'
const Preson = (props) => {
    const { person,count, addPersonActopn } = props
    console.log(person);
    const input1 = React.createRef()
    const input2 = React.createRef()
    const addPreson = () => {
        const name = input1.current.value
        const age = input2.current.value*1
        const personObj = { id: uuidv4(), name, age }
        addPersonActopn(personObj)
    }
    return (
        <div>
            <br />
            <h2>我是Preson组件</h2>
            <input ref={input1} type="text" placeholder='请输入名字' />
            <input ref={input2} type="number" placeholder='请输入年龄' />
            <button onClick={addPreson}>添加</button>
            <ul>
                {person?.map((i)=>{
                    return <li key={i.id}>名字：{i.name} -- 年龄：{i.age}</li>
                })}
            </ul>
            <h3>{count}</h3>
        </div>
    )
}
export default connect(
    ({ person ,count}) => ({ person: person ,count}),
    { addPersonActopn }
)(Preson)
