import React, { useState } from 'react'
import { Todo } from '../../@types/todo.type'
import TaskInput from '../TaskInput'
import TaskList from '../TaskList'
import styles from './todoList.module.scss'
function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([])

  const doneTodos = todos.filter(todo => todo.done)
  const notDoneTodos = todos.filter(todo => !todo.done)

  const addTodo = (name:string) => {
    const todo:Todo = {
      name,
      done:false,
      id:new Date().toISOString()
    }
    setTodos(prev=>[...prev,todo])
  }

  const handleDoneTodo = (id:string, done:boolean)=>{
    // setTodos()
  }
  console.log('todos: ', todos);

  return (
    <div className={styles.todoList}>
      <div className={styles.todoListContainer}>
        <TaskInput addTodo={addTodo} />
        <TaskList todos={notDoneTodos} />
        <TaskList doneTaskList todos={doneTodos} />
      </div>
    </div>
  )
}

export default TodoList
