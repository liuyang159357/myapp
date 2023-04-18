import React from 'react'
import { observable, autorun } from 'mobx'

const observableNumber=observable({
  name:'Liuyang',
  age:'24'
})
autorun(()=>{
  console.log(observableNumber.age);
})
setTimeout(()=>{
  observableNumber.age=20
},1000)
export default function App() {
  return (
    <div>App</div>
  )
}
