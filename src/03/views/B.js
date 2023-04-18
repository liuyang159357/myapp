import React, { Component } from 'react'
import axios from 'axios'
import style from './css/b.module.css'
class B extends Component {
  componentDidMount() {
    axios.get('/ajax/comingList?ci=91&limit=10&movieIds=&token=&optimus_uuid=6C6528C0ACF411EDB49ABD4E372DB459DCB9247004284647AD0C52A8C7B3D743&optimus_risk_level=71&optimus_code=10').then((res) => {

    })
  }
  render() {
    console.log(this.props);
    return (
      <div className={style.liuyang}>B</div>
    )
  }
}
export default liuyang(() => {
  return {
    a: 1,
    b: 2
  }
}, { aa() { }, bb() { } })(B)

function liuyang(cb,obj) {
  var value = cb()
  return (MyComponent) => {
    return (props) => {
      return <div style={{ backgroundColor: 'blue' }}>
        <MyComponent {...value}{...props}{...obj}></MyComponent>
      </div>
    }
  }
}
