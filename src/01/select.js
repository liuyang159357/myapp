import React, { Component } from 'react'
import axios from 'axios'
export default class seletc extends Component {
  constructor() {
    super()
    axios({
      url: 'https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=7406159',
      method: 'get',
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"16395416565231270166529","bc":"110100"}',
        'X-Host': 'mall.film-ticket.cinema.list'
      }
    }).then((res) => {
      console.log(res);
      this.setState({
        cinemas: res.data.data.cinemas
      })
    }).catch((err) => {
      console.log(err);
    })
  }
  state = {
    cinemas: [],
    active: null,
    list: [
      {
        id: 1,
        text: '首页'
      },
      {
        id: 2,
        text: '影院'
      },
      {
        id: 3,
        text: '我的'
      }
    ]
  }
  render() {
    return (
      <div>
        <ul>
          {
            this.state.list.map((item) =>
              <li className={this.state.active === item.id ? 'active' : null} onClick={() => {
                this.setState({
                  active: item.id
                },()=>{
                  console.log(this.state.active);

                })
              }} key={item.id} >{item.text}</li>
            )
          }
        </ul>
        <div>
          {this.state.active == 2 ? this.state.cinemas.map((item) => {
            return (
              <div key={item.cinemaId}>
                <p className='name' >{item.name}</p>
                <p className='address'>{item.address}</p>
              </div>

            )
          }) : null}
        </div>
      </div>
    )
  }
}
