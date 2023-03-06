import React, { Component } from 'react'
import Type from 'prop-types'
console.log(Type);
export default class Index extends Component {
    static propTypes = {
        title: Type.string
    }
    static defaultProps={
        title:'liu'
    }
    render() {
        console.log(this.props);
        return (
            <div>
                {this.props.title&&<button type="">返回</button>}
                {this.props.title}
            </div>
        )
    }
}


