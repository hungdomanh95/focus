import React, { useState } from 'react'
import styles from './taskInput.module.scss'

interface TaskInputProps {
  addTodo: (name: string) => void
}

function TaskInput(props: TaskInputProps) {
  const { addTodo } = props
  const [name, setName] = useState<string>("")
  const handleSubmit = () => {
    addTodo(name )
  }
  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {value} = event.target
    setName(value)
  }
  return (
    <div className='mb-2'>
      <h1 className={styles.title}>Lorem ipsum dolor sit.</h1>
      <form className={styles.form} onSubmit={handleSubmit} >
        <input type='text' placeholder='caption goes here' value={name} onChange={onChangeInput} />
        <button type='submit' >+</button>
      </form>
    </div>
  )
}

export default TaskInput
