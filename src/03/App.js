import React, { useEffect, useState } from 'react'
import Tabbar from './components/Tabbar'
import Router from './router'
import {store} from './redux/store' 
import {connect} from 'react-redux'
 function App(props) {
  
  const [isshow, setshow] = useState(store.getState().TarbbarReducer.show)
  useEffect(() => {
    store.subscribe(() => {
      console.log(store.getState().TarbbarReducer.show);

      setshow(store.getState().TarbbarReducer.show)
    })

  }, [])

  return (
    <div>
     
     
      <Router>

        {isshow && <Tabbar></Tabbar>}
      </Router>
    </div>
  )
}
export default connect(()=>{
  return {
    a:4,
    b:5
  }
})(App)
