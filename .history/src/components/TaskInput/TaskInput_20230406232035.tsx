import React from 'react'
import styles from "./toInput.module.scss"
function TaskInput() {
  return (
    <div>
      <h1 className={styles.title}>
        To do List typescript
      </h1>
      <form className={styles.form}>
        <input type="text" placeholder='caption goes here' />
        <button type="submit" >+</button>
      </form>
    </div>
  )
}

export default TaskInput