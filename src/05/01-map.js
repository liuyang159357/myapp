import React ,{useState}from 'react'
import {Map} from 'immutable'
export default function App() {
  const [obj,setObj]=useState(Map({name:'liuyang',age:'24'}))
 
  return (
    <div>
      <button onClick={()=>{
        let newObj=obj.set('name','li')
        setObj(newObj)
      }}>点击</button>
      <div>
        {obj.get('name')}
      </div>
    </div>
  )
}
