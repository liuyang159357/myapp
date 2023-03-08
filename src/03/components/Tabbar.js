import React from 'react'
import { NavLink, } from 'react-router-dom'

export default function Tabbar() {
    return (
        <div>
            <ul>
              
                <li><NavLink to='/a'>a</NavLink></li>
                <li><NavLink to='/b'>b</NavLink></li>
                <li><NavLink to='/c'>c</NavLink></li>
            </ul>
        </div>
    )
}
