import React, { FC } from 'react'
import styles from './Header.module.scss'
import {AddBasket} from '../AddBasket/AddBasket'
import {SearchPizza} from '../SearchPizza/SearchPizza'
import { Link } from 'react-router-dom'

export const Header: FC = () => {

  return (
    <div className={styles.main}>
        <Link to='/' className={styles.elem1}>
            <div className={styles.image}>
                <img src="/images/1.png" alt="" />
            </div>
            <div className={styles.logo}>
                <h1>REACT PIZZA</h1>
                <p>самая вкусная пицца во вселенной</p>
            </div>
            <SearchPizza />
        </Link>
        <AddBasket/>
    </div>
  )
}
