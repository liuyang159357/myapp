import React, { Component, createRef } from 'react'
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
   }
    handleClick = () => {
        this.setState({
            a:200,
            
        })
        console.log(this, this.state.a);
    }

    myref=createRef()
    render() {
        var weight = {
            backgroundColor: 'blue',
            fontweight: 'bolder'
        }
    
        return (
            <div>
                <h2>{this.state.a}</h2>

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