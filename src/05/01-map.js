/*
 * @Description: 
 * @Author: liu
 * @Date: 2023-03-24 00:13:19
 * @LastEditors: liu
 * @LastEditTime: 2023-05-06 21:57:08
 */
import React, { useState } from 'react'
import { Map } from 'immutable'
export default function App() {
  const [obj, setObj] = useState(Map({ name: 'liuyang', age: '24' }))

  return (
    <div>
      <button onClick={() => {
        let newObj = obj.set('name', 'li')
        setObj(newObj)
      }}>点击</button>
      <div>
        {obj.get('name')}
      </div>
    </div>
  )
}
