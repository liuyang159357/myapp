import React from 'react'
import { NavLink, } from 'react-router-dom'
import style from './Tababr.module.css'
export default function Tabbar() {
    return (
        <div className={style.tabbar}>
            <ul>
              
                <li><NavLink to='/a'>a</NavLink></li>
                <li><NavLink to='/b'>b</NavLink></li>
                <li><NavLink to='/c'>c</NavLink></li>
            </ul>
        </div>
    )
}
