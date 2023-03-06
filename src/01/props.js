import React, { Component } from 'react'
// import Navbar from './Navbar/index'
import Siderbar from './Navbar/Sidebar'
export default class props extends Component {
   
  render() {
  let  info={
        name:'liuyang',
        age:24
    }
    return (
      <div>
        {/* <Navbar title='刘阳'></Navbar> */}
        <Siderbar info={info} ></Siderbar>
      </div>
    )
  }
}
