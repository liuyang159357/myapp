import React, { useState, useMemo } from 'react'
import {Button} from 'antd'
import { SearchOutlined } from '@ant-design/icons';
import Footer from './components/Footer'
import List from './components/List'
import Header from './components/Header'
import './TodoList.css'
export default function App() {
    const [list, setList] = useState([
        {
            id: '01',
            name: '吃饭',
            done: false
        }
    ])
    const addTodo = (todo) => {
        let newList = [...list, todo]
        setList(newList)
    }
    const deleteTodo = (id) => {
        let newList = list.filter((i) => {
            return i.id !== id
        })
        setList(newList)
    }
    const checked = (id) => {
        console.log(id);
        let newList = [...list]
        newList.forEach((i) => {
            if (i.id === id) {
                i.done = !i.done
            }
        })
        setList(newList)
    }
    const checkedAllDone = (v) => {
        console.log(v);
        let newList = [...list].map((i) => {
            i.done = v
            return i
        })

        setList(newList)
    }
    const deleteAllDone = () => {
        let newList = [...list].filter((i) => {
            return !i.done
        })
        setList(newList)
    }
    const num = useMemo(() => {
        let num = {
            total: 0,
            doneNum: 0
        }
        list.forEach((i) => {
            num.total++
            i.done === true && num.doneNum++
        })
        return num
    }, [list])
    return (
        <div>
            <div className="todo-container">
                <Button type='primary' icon={<SearchOutlined/>}>点击</Button>
                <div className="todo-wrap">
                    <Header addTodo={addTodo}></Header>
                    <List list={list} deleteTodo={deleteTodo} checked={checked}></List>
                    <Footer num={num} deleteAllDone={deleteAllDone} checkedAllDone={checkedAllDone}></Footer>
                </div>
            </div>
        </div>
    )
}
