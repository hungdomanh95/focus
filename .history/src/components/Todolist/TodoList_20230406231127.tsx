import React from 'react'
import TaskInput from '../TaskInput'
import TaskList from '../TaskList'
import styles from "./todoList.module.scss"
function TodoList() {
  return (
    <div>TodoList</div>
    <TaskInput/>
    <TaskList/>
  )
}

export default TodoList