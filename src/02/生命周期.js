import React, { Component } from 'react'
import axios from 'axios'
export default class App extends Component {
    state = {
        type: 1
    }
    render() {
        return (
            <div>
                <ul>
                    <li onClick={() => {
                        this.setState(() => {
                            return {
                                type: 1
                            }
                        })
                    }}>正在热映</li>
                    <li onClick={() => {
                        this.setState(() => {
                            return {
                                type: 2
                            }
                        })
                    }}>即将上映</li>
                </ul>
                <FilmList type={this.state.type}></FilmList>
            </div>
        )
    }
}


class FilmList extends Component {
    componentDidMount() {
        console.log(this.props.type);
        if (this.props.type === 1) {
            axios({
                url: 'https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=6369301',
                method: 'get',
                headers: {
                    'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"16395416565231270166529","bc":"110100"}',
                    'X-Host': 'mall.film-ticket.film.list'
                }
            }).then((result) => {
              this.setState({
                list:result.data.data.films

              })
            }).catch((err) => {

            })
        } else {
            axios({
                url: 'https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=2&k=8077848',
                method: 'get',
                headers: {
                    'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"16395416565231270166529","bc":"110100"}',
                    'X-Host': 'mall.film-ticket.film.list'
                }
            }).then((result) => {
                this.setState({
                    list:result.data.data.films
    
                  })
            }).catch((err) => {

            })
        }
    }
   UNSAFE_componentWillReceiveProps(nextProps) {
        if (nextProps === 1) {
            axios({
                url: 'https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=6369301',
                method: 'get',
                headers: {
                    'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"16395416565231270166529","bc":"110100"}',
                    'X-Host': 'mall.film-ticket.film.list'
                }
            }).then((result) => {
                this.setState({
                    list:result.data.data.films
    
                  })
            }).catch((err) => {

            })
        } else {
            axios({
                url: 'https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=2&k=8077848',
                method: 'get',
                headers: {
                    'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"16395416565231270166529","bc":"110100"}',
                    'X-Host': 'mall.film-ticket.film.list'
                }
            }).then((result) => {
                this.setState({
                    list:result.data.data.films
    
                  })
            }).catch((err) => {

            })
        }
    }
    state={
        list:[]
    }
    render() {
        return (
            <div>
                <ul>
                    {this.state.list.map(item=>
                        <li key={item.filmId}>{item.name}</li>)}
                </ul>
            </div>
        )
    }
}
