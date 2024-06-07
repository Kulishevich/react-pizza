import React, { FC, useEffect, useRef } from 'react'
import styles from './AddBasket.module.scss'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { PizzaElemBasket } from '../types/types'
import { RootState, useAppDispatch } from '../redux/store'
import { setLSBasketPizzas } from '../redux/slices/basketSlice'

export const AddBasket: FC = () => {
  let isMount = useRef<boolean>(false)
  const pizzaElems: PizzaElemBasket[] = useSelector((state: RootState) => state.basket.basketPizzas)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if(isMount.current){
      window.localStorage.setItem('pizzas', JSON.stringify(pizzaElems)) //ложим в LocalStorage массив пицц
    } 
      isMount.current = true
  },[pizzaElems])

  return (
        <Link to='/basket' className={styles.main}>
          <div className={styles.price}>
          {pizzaElems.reduce((sum, item) => sum += item.count * item.price, 0)}P
          </div>
          <div className={styles.line}></div>
          <div className={styles.count}>
              <img src="/images/Vector.png" alt="" />
              <p>{pizzaElems.reduce((sum, elem) =>  sum += elem.count, 0)}</p>
          </div>
        </Link>
  )
}
