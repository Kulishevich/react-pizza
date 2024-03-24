import React from 'react'
import styles from './BastekItems.module.scss'
import { Link } from 'react-router-dom'

export default function BasketItems() {
  return (
    <div className={styles.main}>
        <div className={styles.header}>
            <h2> <img src="/images/6.png" alt="" /> Корзина</h2>
            <button> <img src="/images/5.svg" alt="" /> Очистить корзину</button>
        </div>
        <div className={styles.items}>  
            <div className={styles.item}>
                <div className={styles.logo}>
                    <img src="/images/4.png" alt=""/>
                    <div className={styles.title}>
                        <h2>Сырный цыплёнок</h2>
                        <p>тонкое тесто 26см</p>
                    </div>
                </div>
                <div className={styles.counter}>
                    <button> - </button>
                    <h2> 2 </h2>
                    <button> + </button>
                </div>

                <div className={styles.price}>770 P</div>
                <div className={styles.close}>
                    <img src="/images/3.png" alt="" />
                </div>
            </div>
            <div className={styles.item}>
                <div className={styles.logo}>
                    <img src="/images/4.png" alt=""/>
                    <div className={styles.title}>
                        <h2>Сырный цыплёнок</h2>
                        <p>тонкое тесто 26см</p>
                    </div>
                </div>
                <div className={styles.counter}>
                    <button> - </button>
                    <h2> 2 </h2>
                    <button> + </button>
                </div>

                <div className={styles.price}>770 P</div>
                <div className={styles.close}>
                    <img src="/images/3.png" alt="" />
                </div>
            </div>
        </div>
        <div className={styles.allPrice}>
            <div className={styles.allPizza}>Всего пицц : 3шт</div>
            <div className={styles.finalPrice}>Сумма заказа : 900P</div>
        </div>
        <div className={styles.footer}>
            <Link className={styles.btn1} to='/'>Вернуться назад</Link>
            <button className={styles.btn2}>Оплатить сейчас</button>
        </div>
    </div>
  )
}
