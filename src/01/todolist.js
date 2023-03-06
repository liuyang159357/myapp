import React, { Component } from 'react'

export default class todolist extends Component {
    state = {
        value:'',
        list: [
            1, 2, 3
        ],
        isshow: false
    }
    myref = React.createRef()
    add = () => {
        this.state.list.push(this.state.value)
        this.setState({
            list: this.state.list
        })
    }
    delete(index) {
        let newlist = this.state.list.slice()
        newlist.splice(index, 1)
        this.setState({
            list: newlist,
        })
    }
    render() {
        return (
            <div>
                <input type="text" value={this.state.value} onChange={(e)=>{
                    this.setState({
                        value:e.target.value
                    })
                }}/>
                <button type="btn" onClick={this.add} >添加</button>
                <ul>
                
                    {
                        this.state.list.map((item, index) => 
                             <li key={index}>
                                <input type="checkbox" checked={item.isCheck}/>
                                {/* 富文本 */}
                                <span dangerouslySetInnerHTML={
                                    {__html:item}
                                }></span>
                                <button onClick={() => {
                                    this.delete(index)
                                }}>delete</button>

                            </li>
                        )
                    }
                    {this.state.list.length ? null:'空空如也' }
                </ul>
            </div>
        )
    }
}
