import React from 'react'

export default function fn() {
    let a=1
    function dianji(){
        console.log(a);
    }
  return (
    <div onClick={dianji}>fn</div>
  )
}

