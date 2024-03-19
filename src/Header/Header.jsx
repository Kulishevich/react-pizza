import React, { useContext } from 'react'
import styles from './Header.module.scss'
import Basket from '../Basket/Basket'
import SearchPizza from '../SearchPizza/SearchPizza'

export default function Header() {

  return (
    <div className={styles.main}>
        <div className={styles.elem1}>
            <div className={styles.image}>
                <img src="/images/1.png" alt="" />
            </div>
            <div className={styles.logo}>
                <h1>REACT PIZZA</h1>
                <p>самая вкусная пицца во вселенной</p>
            </div>
            <SearchPizza />
        </div>
            <Basket/>
    </div>
  )
}
