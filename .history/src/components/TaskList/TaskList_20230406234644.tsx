import React from 'react'
import styles from './taskList.module.scss'
function TaskList() {
  return (
    <div className='mb-2'>
      <h2 className={styles.title}>Hoàn Thành</h2>
      <div className={styles.tasks}>
        <div className={styles.task}>
          <input type='checkbox' className={styles.taskCheckbox} />
          <span className={styles.taskName}>Học Bài</span>
          <div className={styles.taskAction}>
            <button className={styles.taskBtn}>✒️</button>
            <button className={styles.taskBtn}>🗑</button>
          </div>
        </div>
        <div className={styles.task}>
          <input type='checkbox' className={styles.taskCheckbox} />
          <span className={`${styles.taskName} ${styles.taskNameDone}`}>Học Bài</span>
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
