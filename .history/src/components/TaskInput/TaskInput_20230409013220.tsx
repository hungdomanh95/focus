import React from 'react'
import styles from "./taskInput.module.scss"

interface TaskInputProps{
  addTodo: (name: string) => void
}

function TaskInput(props:TaskInputProps) {

  return (
    <div className='mb-2'>
      <h1 className={styles.title}>
        Lorem ipsum dolor sit.
      </h1>
      <form className={styles.form}>
        <input type="text" placeholder='caption goes here' />
        <button type="submit" >+</button>
      </form>
    </div>
  )
}

export default TaskInput