import React, { useEffect } from 'react'
import  {Route, BrowserRouter, Switch, Redirect,withRouter } from 'react-router-dom'
import A from './views/A'
import B from './views/B'
import C from './views/C'
import D from './views/detail'
import Login from './views/login'
import NotFound from './router/NotFound'

const CC=withRouter(C)
export default function Router(props) {
    return (
        <div>
          
            <BrowserRouter>
                <Switch>
                    <Route path='/a' component={A}></Route>
                    <Route path='/b' component={B}></Route>
                    <Route path='/c' render={()=>{
                        return isOn()? <CC/>:<Redirect  to='/login' exact></Redirect>

                    }} ></Route>
                    <Route path='/login' component={Login}></Route>

                    <Route path='/detail' component={D}></Route>
                    <Redirect from='/' to='/c' exact></Redirect>
                    <Route component={NotFound}></Route>

                </Switch>
                {props.children}
            </BrowserRouter>
        </div>
    )
}
function isOn(){
    return localStorage.getItem('token')
}