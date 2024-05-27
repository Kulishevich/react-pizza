import React, { FC } from 'react'
import styles from './BasketEmpty.module.scss'
import { Link } from 'react-router-dom'


export const BasketEmpty: FC = () => {
  return (
    <div className={styles.main}>
        <h1 className={styles.title}>Корзина пустая</h1>
        <p className={styles.text}>Вероятней всего, вы не заказывали ещё пиццу.Для того, чтобы заказать пиццу, перейди на главную страницу.</p>
        <img className={styles.image} src='/images/basketEmpty.png' alt="" />
        <Link to='/' className={styles.button}>Вернуться назад</Link>
    </div>
  )
}
