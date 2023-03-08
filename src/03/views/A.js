import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import A1 from '../router/a/a1'
import A2 from '../router/a/a2'
export default function A() {
    return (
        <div>A
            <Switch>
                <Route path='/a/a1' component={A1}></Route>
                <Route path='/a/a2' component={A2}></Route>
                <Redirect from='/a' to='/a/a1'></Redirect>
            </Switch>
        </div>
    )
}
