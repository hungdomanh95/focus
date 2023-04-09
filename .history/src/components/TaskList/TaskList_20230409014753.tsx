import React from 'react'
import { Todo } from '../../@types/todo.type'
import styles from './taskList.module.scss'
interface TaskListProps {
  doneTaskList?: boolean
  todos: Todo[]
}
function TaskList(props: TaskListProps) {
  const { doneTaskList, todos } = props

  return (
    <div className='mb-2'>
      <h2 className={styles.title}>{doneTaskList ? 'Lorem, ipsum.' : 'Lorem, ipsum. ipsum'}</h2>
      <div className={styles.tasks}>
        {todos.map((item) => (
          <div className={styles.task} key={item.id}>
            <input type='checkbox' className={styles.taskCheckbox} checked={item.done} />
            <span className={`${styles.taskName} ${item.done ? styles.taskNameDone : ''}`}>{item.name}</span>
            <div className={styles.taskAction}>
              <button className={styles.taskBtn}>✒️</button>
              <button className={styles.taskBtn}>🗑</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TaskList
