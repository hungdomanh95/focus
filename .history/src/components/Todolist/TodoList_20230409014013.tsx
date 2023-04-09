import React, { useState } from 'react'
import { Todo } from '../../@types/todo.type'
import TaskInput from '../TaskInput'
import TaskList from '../TaskList'
import styles from './todoList.module.scss'
function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([])
  const addTodo = (name:string) => {
    const todo:Todo = {
      name,
      done:false,
      id:new Date().toISOString()
    }
    setTodos(prev=>[...prev,todo])
  }
  console.log('todos: ', todos);

  return (
    <div className={styles.todoList}>
      <div className={styles.todoListContainer}>
        <TaskInput addTodo={addTodo} />
        <TaskList doneTaskList={false} />
        <TaskList doneTaskList={true} />
      </div>
    </div>
  )
}

export default TodoList
