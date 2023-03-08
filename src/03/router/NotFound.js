import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
export default function NotFound(props) {
  const history=useHistory()
  console.log(props);
  const [state, setstate] = useState([])
  useEffect(() => {
    axios({
      url: 'https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=7406159',
      method: 'get',
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"16395416565231270166529","bc":"110100"}',
        'X-Host': 'mall.film-ticket.cinema.list'
      }
    }).then((res) => {
      setstate(res.data.data.cinemas)
    }).catch((err) => {
      console.log(err);
    })
  }, [])
  return (
    <div>
      { 
      state.map((item,index) => 
          <li key={index} onClick={()=>{
            history.push('/detail/'+item.cinemaId)
          }}>
          {/* <NavLink to={ item}>{item.name}</NavLink> */}
          {item.name}
          </li>
        )
      }
    </div>
  )
}
