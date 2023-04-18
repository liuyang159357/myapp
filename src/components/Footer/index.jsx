import React from 'react'

export default function Footer(props) {
    const { num, checkedAllDone, deleteAllDone } = props
    return (
        <div className="todo-footer">
            <label>
                <input type="checkbox" checked={num.doneNum === num.total && num.total} onChange={(e) => {
                    checkedAllDone(e.target.checked)
                }} />
            </label>
            <span>
                <span>已完成{num.doneNum}</span> / 全部{num.total}
            </span>
            <button className="btn btn-danger" onClick={() => {
                deleteAllDone()
            }}>清除已完成任务</button>
        </div>
    )
}
