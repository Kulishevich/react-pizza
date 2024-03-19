import React from 'react'
import styles from './Basket.module.scss'

export default function Basket() {
  return (
    <div className={styles.main}>
        <div className={styles.price}>
            520P
        </div>
        <div className={styles.line}></div>
        <div className={styles.count}>
            <img src="/images/Vector.png" alt="" />
            <p>3</p>
        </div>
    </div>
  )
}
