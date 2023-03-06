import React, { Component } from 'react'
import BetterScroll from 'better-scroll'
export default class betterScroll extends Component {
    state={
        list:[]
    }
  render() {
    return (
      <div>
        <button onClick={()=>this.getData()}>点击</button>
        <div className='wrapper' style={{height:'200px',backgroundColor:'#666',overflow:'hidden'}}>
            <div className='content'>
                {
                this.state.list.map((item,index)=>{
                  return <h3 key={index}>{item}</h3> 
                })
                }
            </div>
        </div>
      </div>
    )
  }
  getData(){
    let list=[1,2,3,4,6,7]
    this.setState({
        list:list
    },()=>{
    new BetterScroll('.wrapper')
        
    })
  }
}
