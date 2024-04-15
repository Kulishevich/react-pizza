import React, { useEffect } from 'react'
import styles from './Basket.module.scss'
import BasketEmpty from './BasketEmpty/BasketEmpty'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setBasketPizzas, setCountIncrement, setCountDecrement, deletePizzaElem, clearPizzaBasket } from '../redux/slices/basketSlice'

export default function Basket() {
    const pizzaElem = useSelector((state) => state.basket.basketPizzas)
    
    const dispatch = useDispatch()

  return (
    pizzaElem.length ? 
    <div className={styles.main}>
        <div className={styles.header}>
            <div className={styles.headerContainer}>
                <img src="/images/6.png" alt="" />
                <h2> Корзина</h2>
            </div>
            <button className={styles.clear} onClick={() => dispatch(clearPizzaBasket())}> <img src="/images/5.svg" alt=""/> Очистить корзину</button>
        </div>
        <div className={styles.items}>  
            {pizzaElem.map((elem, index) => (
            // элемент
            <div key={index} className={styles.item}>
                    <div className={styles.logo}>
                        <img src={elem.imageUrl} alt=""/>
                        <div className={styles.title}>
                            <h2>{elem.title}</h2>
                            <p>{elem.activeType} тесто {elem.activeSize} см</p>
                        </div>
                    </div>
                    
                    <div className={styles.itemContainer}>
                        <div className={styles.counter}>
                            <button onClick={() => dispatch(setCountDecrement(index))}> - </button>
                            <h2> {elem.count} </h2>
                            <button onClick={() => dispatch(setCountIncrement(index))}> + </button>
                        </div>

                        <div className={styles.price}>{elem.price * elem.count}P</div>
                        <div className={styles.close} onClick={() => dispatch(deletePizzaElem(index))}>
                            <img src="/images/3.png" alt="" />
                        </div>
                    </div>
            </div>
            ))}
        </div>
        <div className={styles.allPrice}>
            <div className={styles.allPizza}>Всего пицц : {pizzaElem.reduce((sum, elem) =>  sum += elem.count, 0)}</div> 
            <div className={styles.finalPrice}>Сумма заказа : {pizzaElem.reduce((sum, item) => sum += item.count * item.price, 0)} P</div>
        </div>
        <div className={styles.footer}>
            <Link className={styles.btn1} to='/'>Вернуться назад</Link>
            <button className={styles.btn2}>Оплатить сейчас</button>
        </div>
    </div> : <BasketEmpty/>
  )
}
