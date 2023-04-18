import React,{useState} from 'react'
import {List} from 'immutable'
export default function App() {
    const [arr,setArr]=useState(List([1,2,3]))
    const arr2=arr.push(4)
    console.log(arr2,arr);
  return (
    <div>
        {arr2.map((item)=>{
          return  <div key={item}>
                {item}
            </div>
        })}
    </div>
  )
}
