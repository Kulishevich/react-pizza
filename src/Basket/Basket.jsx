import React, { useEffect } from 'react'
import styles from './Basket.module.scss'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setBasketPizzas } from '../redux/slices/basketSlice'

export default function Basket() {
    const pizzaElem = useSelector((state) => state.basket.basketPizzas)
    

    useEffect(() => {
        console.log(pizzaElem)
    }, [pizzaElem])

  return (
    <div className={styles.main}>
        <div className={styles.header}>
            <h2> <img src="/images/6.png" alt="" /> Корзина</h2>
            <button> <img src="/images/5.svg" alt="" /> Очистить корзину</button>
        </div>
        <div className={styles.items}>  
            {pizzaElem.map((elem, index) => (
            <div key={index} className={styles.item}>
                <div className={styles.logo}>
                    <img src={elem.imageUrl} alt=""/>
                    <div className={styles.title}>
                        <h2>{elem.title}</h2>
                        <p>{elem.activeType} тесто {elem.activeSize} см</p>
                    </div>
                </div>
                <div className={styles.counter}>
                    <button> - </button>
                    <h2> {elem.count} </h2>
                    <button> + </button>
                </div>

                <div className={styles.price}>{elem.price * elem.count}</div>
                <div className={styles.close}>
                    <img src="/images/3.png" alt="" />
                </div>
            </div>
            ))}
        </div>
        <div className={styles.allPrice}>
            <div className={styles.allPizza}>Всего пицц : {pizzaElem.reduce((sum, elem) =>  sum += elem.count, 0)}</div>
            <div className={styles.finalPrice}>Сумма заказа : 900P</div>
        </div>
        <div className={styles.footer}>
            <Link className={styles.btn1} to='/'>Вернуться назад</Link>
            <button className={styles.btn2}>Оплатить сейчас</button>
        </div>
    </div>
  )
}
