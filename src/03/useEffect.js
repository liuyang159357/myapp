import React,{useEffect,useState} from 'react'

export default function App() {
    const [name,setname]=useState('liu')
    useEffect(()=>{
        setname(name.substring(0,1).toUpperCase()+name.substring(1))
    },[name])
  return (
    <div>
        <button type="" onClick={()=>{
            setname('yang')
        }}>点击</button>
        app-{name}
    </div>
  )
}
