
import styles from './errorPage.module.css'
const ErrorPage = () => {
  return (
    <div className={styles.errorPage}>
        <div className={styles.errorMessage}>
          <h1><span className={styles.light}>Err</span><span className={styles.blink}>o</span><span className={styles.light}>r 4</span><span className={styles.blink}>04</span><br/>
          <span className={styles.light}>Page </span><span className={`${styles.blink} ${styles.r}`}> Not</span> <span className={styles.light}>found</span></h1>
          </div>
        </div>
  )
}

export default ErrorPage