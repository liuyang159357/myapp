import React from 'react'

export default function Sidebar(props) {
    console.log(props);
    let { info } = props
    return (
        <div>
            <div>
                {info.name}
            </div>
            <div>
                {info.age}
            </div>
        </div>
    )
}
