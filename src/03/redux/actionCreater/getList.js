import axios from 'axios'
export let getList=()=> {

  return (dispatch) => {
  
    axios({
      url: 'https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=7406159',
      method: 'get',
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"16395416565231270166529","bc":"110100"}',
        'X-Host': 'mall.film-ticket.cinema.list'
      }
    }).then((res) => {
      console.log(res.data.data.cinemas)
      dispatch({
        type: 'change-list',
        props: res.data.data.cinemas
      })
    })
  }
}
