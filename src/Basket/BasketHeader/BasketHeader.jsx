import React from 'react'
import styles from './Basket.module.scss'

export default function BasketHeader() {
  return (
    <div className={styles.main}>
            <div className={styles.image}>
                <img src="/images/1.png" alt="" />
            </div>
            <div className={styles.logo}>
                <h1>REACT PIZZA</h1>
                <p>Самая реактивная пицца</p>
            </div>
    </div>
  )
}
