import React, { useState } from 'react'
import { Todo } from '../../@types/todo.type'
import styles from './taskList.module.scss'
interface TaskListProps{
  doneTaskList:boolean
}
function TaskList(props:TaskListProps) {
  const {doneTaskList} = props
  const [todos, setTodos] = useState<Todo[]>([])
  const addTodo = (name:string) => {
    const todo:Todo = {
      name,
      done:false,
      id:new Date().toISOString()
    }
    setTodos()
  }
  return (
    <div className='mb-2'>
      <h2 className={styles.title}>{ doneTaskList ? "Lorem, ipsum." :  "Lorem, ipsum. ipsum"}</h2>
      <div className={styles.tasks}>
        <div className={styles.task}>
          <input type='checkbox' className={styles.taskCheckbox} />
          <span className={styles.taskName}>Lorem, ipsum.</span>
          <div className={styles.taskAction}>
            <button className={styles.taskBtn}>✒️</button>
            <button className={styles.taskBtn}>🗑</button>
          </div>
        </div>
        <div className={styles.task}>
          <input type='checkbox' className={styles.taskCheckbox} />
          <span className={`${styles.taskName} ${styles.taskNameDone}`}>Lorem, ipsum.</span>
          <div className={styles.taskAction}>
            <button className={styles.taskBtn}>✒️</button>
            <button className={styles.taskBtn}>🗑</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TaskList
