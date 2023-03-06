import React, { Component } from 'react'

export default class App extends Component {
    myesername = React.createRef()
    state={
        name:'liu'
    }
    render() {
        return (
            <div>
                <h1>登录页</h1>
                <input type="text" name="username" value={this.state.name} 
                onChange={(e)=>{
                   this.setState({
                    name:e.target.value
                   })
                }}/>
                <button onClick={() => {
                   console.log(this.state.name);
                }}>登录</button>
                <button onClick={()=>{
                   this.setState({
                    name:''
                   })
                }}>重置</button>
            </div>
        )
    }
}
