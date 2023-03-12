import React, { useEffect } from 'react'
// import store from '../redux/store'
import { getList } from '../redux/actionCreater/getList'
import { connect } from 'react-redux'
function C(props) {
  console.log(props);
  const { list, getList } = props
  useEffect(() => {
    if (list.length === 0) {
      console.log(123);
      getList()
    }
    // props.getList(props.list)

  }, [getList, list])

  return (
    <div>
      {props.list.map((item) => {
        return <p key={item.cinemaId} onClick={() => {
          props.history.push({ pathname: '/detail', state: { id: item.cinemaId } })
        }}>{item.name}</p>
      })}

    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    list: state.ListReducer.list
  }
}
const mapDispatchToProps = {

  getList
}

export default connect(mapStateToProps, mapDispatchToProps)(C)
