import React from 'react'
import styles from './Basket.module.scss'
import BasketHeader from './BasketHeader/BasketHeader'
import BasketItems from './BasketItems/BasketItems'

export default function Basket() {
  return (
    <div className={styles.main}>
        <div className={styles.container}>
            <BasketHeader/>
            <BasketItems/>
        </div>
    </div>
  )
}
