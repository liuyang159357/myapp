import React ,{Component}from 'react'
import {fromJS} from 'immutable'

export default class Edit extends Component {
    state={
        info:fromJS({
            name:'刘阳',
            location:{
                procince:'广东',
                city:'东莞'
            },
            favor:['健身','看报']
        })
    }
  render() {
    return (
      <div>
        <h3>个人信息</h3>
        <button onClick={()=>{
            this.setState({
                info:this.state.info.setIn(['location','city'],'深圳')
            })
        }}>点击</button>
        <div>
            {this.state.info.get('name')}
            <br/>
            {this.state.info.getIn(['location','city'])}
            <br/>
            {this.state.info.get('favor').map((item,index)=>{
                return <span key={index}>
                    {item} 
                    <button onClick={()=>{ 
                        this.setState({
                            info:this.state.info.updateIn(['favor'],(list)=>list.splice(index,1))

                        })
                    }}>del</button>
                </span>
            })}
        </div>
      </div>
    )
  }
}

