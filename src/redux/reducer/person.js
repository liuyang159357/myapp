/*
 * @Description: 
 * @Author: liu
 * @Date: 2023-04-24 23:42:34
 * @LastEditors: liu
 * @LastEditTime: 2023-05-06 21:59:40
 */
import {ADD_PERSON} from '../constant'

const initState=[ 
    {
        id:'001',
        name:'刘阳',
        age:23
    }
]
 function presonReduce(preState=initState, action){
    const {type,data}=action
    switch (type) {
        case ADD_PERSON:
           return [data,...preState]
        default:
            return preState
    }
}
export default presonReduce