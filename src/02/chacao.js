import React, { Component } from 'react'


class Child extends Component{
    render(){
        console.log(this.props.children);
        return <div>
            child
            {this.props.children}
        </div>
    }
}
export default class chacao extends Component {
  render() {
    return (
      <div> 
        <Child>
            <h2>
                123
            </h2>
            <h3>231</h3>
        </Child>
      </div>
    )
  }
}
