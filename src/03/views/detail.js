import React, { useEffect } from 'react'
// import store from '../redux/store'
import {show,hide} from '../redux/actionCreater/handlerTabbar'
import {connect} from 'react-redux'
 function Detail(props) {
 const {hide,show}=props
  useEffect(() => {
    
    hide()
    return () => {
     
     show()
    }
  }, [hide,show])
  return (

    <div>
      {<button type="" onClick={() => {
        props.history.goBack()
      }}>你好</button>}detail</div>
  )
}
export default connect(null,{
  show,hide
})(Detail)
