import React from 'react'
import styles from './AddBasket.module.scss'
import { Link } from 'react-router-dom'

export default function AddBasket() {
  return (
        <Link to='/basket' className={styles.main}>
          <div className={styles.price}>
              520P
          </div>
          <div className={styles.line}></div>
          <div className={styles.count}>
              <img src="/images/Vector.png" alt="" />
              <p>3</p>
          </div>
        </Link>
  )
}
