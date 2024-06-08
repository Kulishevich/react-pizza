import React, { FC } from 'react'
import styles from './PizzaElemPage.module.scss'
import { Link, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'

const PizzaElemPage: FC = () => {
    const { id } = useParams<string>()
    const pizzaElem = useSelector((state : RootState)  => state.pizzas.items).find(obj => obj.id == Number(id))

    console.log(pizzaElem)

    return (
    <div className={styles.container}>
        <div className={styles.main}>
            <img src={pizzaElem?.imageUrl} alt={pizzaElem?.title} className={styles.image} />
            <h2 className={styles.title}>{pizzaElem?.title}</h2>
            <h3 className={styles.price}>{pizzaElem?.price}</h3>
        </div>
        <Link to='/' className={styles.button}>На главную</Link>
    </div>
  )
}

export default PizzaElemPage
