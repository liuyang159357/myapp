import React, { Component, createRef } from 'react'
import './css/01.css'
export default class app extends Component {

    render() {
        return (
            <div>
                <Navbar />
                <Swiper></Swiper>
            </div>

        )
    }
}

class Navbar extends Component {
   state={
    a:100,
    b:[1,2,3,4]
   }
    handleClick = () => {
        this.setState({
            a:200,
            
        })
        console.log(this, this.state.a);
    }

    myref=React.createRef()
    render() {
        var weight = {
            backgroundColor: 'blue',
            fontweight: 'bolder'
        }
        var list=this.state.b.map(item=><h4 key={item}>{item}</h4>)

        return (
            <div>
                <h2>{this.state.a}</h2>
                <div>{list}</div>
                <button style={weight} onClick={()=>console.log(this.myref.current)}>点击</button>
                <div onClick={this.handleClick} className='active'>a</div>
                <label htmlFor='input'>姓名:</label>
                <input type="text" id='input' ref={this.myref}/>
            </div>)
    }
}

const Swiper = () => {
    return <div>Swiper</div>
}