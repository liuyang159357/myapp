/*
 * @Description: 
 * @Author: liu
 * @Date: 2023-03-26 17:24:46
 * @LastEditors: liu
 * @LastEditTime: 2023-05-06 22:13:18
 */
import React from 'react'
import { observable, autorun } from 'mobx'

const observableNumber = observable({
    name: 'Liuyang',
    age: '24'
})
autorun(() => {
    console.log(observableNumber.age);
})
setTimeout(() => {
    observableNumber.age = 20
}, 1000)
export default function App() {
    return (
        <div>App</div>
    )
}
