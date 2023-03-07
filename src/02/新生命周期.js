import React, { Component } from 'react'

export default class App extends Component {
    state={
        age:23,
       
    }
    static getDerivedStateFromProps(props, state) {
        console.log(state);
        return {
            name:'liu'
        }
    }

 
    
  render() {
    return (
      <div>
        <button onClick={()=>{
            this.setState({
                age:24
            })
        }}>点击</button>
        {this.state.name +this.state.age}
      </div>
    )
  }
 
  
}
