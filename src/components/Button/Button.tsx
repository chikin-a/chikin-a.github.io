import styles from './Button.module.css'

type Props = {
  children: string
}

export const Button = ({ children }: Props) => {
  return (
    <a href='https://softjourn.com/contact-us'>
      <button className={styles.button1}>
        <span className={styles.getStarted}>{children}</span>
        <div className={styles.arrowLeft}>
          <div className={styles.arrowRight}>
            <div className={styles.arrowRight2} />
          </div>
        </div>
      </button>
    </a>
  )
}
