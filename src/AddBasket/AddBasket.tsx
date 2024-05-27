import React, { FC } from 'react'
import styles from './AddBasket.module.scss'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

type pizzaElem = {
  id: number,
  imageUrl: string,
  title: string,
  types: number[],
  sizes: number[],
  price: number,
  category: number,
  rating: number,
  activeSize: number,
  activeType: string,
  count: number
}

export const AddBasket: FC = () => {
  const pizzaElem: pizzaElem[] = useSelector(state => state.basket.basketPizzas)

  console.log(pizzaElem)
  return (
        <Link to='/basket' className={styles.main}>
          <div className={styles.price}>
          {pizzaElem.reduce((sum, item) => sum += item.count * item.price, 0)}P
          </div>
          <div className={styles.line}></div>
          <div className={styles.count}>
              <img src="/images/Vector.png" alt="" />
              <p>{pizzaElem.reduce((sum, elem) =>  sum += elem.count, 0)}</p>
          </div>
        </Link>
  )
}
