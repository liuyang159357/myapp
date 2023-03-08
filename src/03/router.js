import React from 'react'
import  {Route, HashRouter, Switch, Redirect } from 'react-router-dom'
import A from './views/A'
import B from './views/B'
import C from './views/C'
import NotFound from './router/NotFound'
export default function router(props) {
    return (
        <div>
            <HashRouter>
                <Switch>
                    <Route path='/a' component={A}></Route>
                    <Route path='/b' component={B}></Route>
                    <Route path='/c' component={C} ></Route>
                    <Redirect from='/' to='/c' exact></Redirect>
                    <Route component={NotFound}></Route>

                </Switch>
                {props.children}
            </HashRouter>
        </div>
    )
}
