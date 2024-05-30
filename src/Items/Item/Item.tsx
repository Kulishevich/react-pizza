import React, { FC, useEffect, useState } from 'react'
import styles from './Item.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { setBasketPizzas } from '../../redux/slices/basketSlice'
import { PizzaElem } from '../../types/types'
import { RootState } from '../../redux/store'

interface PizzaElemProps {
    elem: PizzaElem
}

export const Item: FC<PizzaElemProps> = ({elem}) => {
    // console.log(elem)
    const typeNames: string[] = ['тонкое', 'традиционное']
    const sizeNames: number[] = [26, 30, 40]
    const [activeType, setActiveType] = useState<number>(0)
    const [activeSize, setActiveSize] = useState<number>(0)

    const pizzaElem = useSelector((state: RootState) => state.basket.basketPizzas)
    const dispatch = useDispatch()

    const changeActiveType = (index: number) => {
            if(elem.types.includes(index)){
                setActiveType(index)
            }
    }

    const changeActiveSize = (item: number, index: number) => {
        console.log(item, index)
            if(elem.sizes.includes(item)){
                setActiveSize(index)
            }
    }

  return (
    <div className={styles.main}>
        <div className={styles.image}>
            <img src={elem.imageUrl} alt="" />
        </div>
        <div className={styles.container}>
            <div className={styles.title}>
                <h3>{elem.title}</h3>
            </div>
            <div className={styles.select}>
                <div className={styles.type}>
                    {typeNames.map((item, index) => (
                       <div
                        key={index} 
                        className={`${styles.btn} ${!elem.types.includes(index) && styles.disabled} ${index === activeType  && styles.active}`}
                        onClick={() => changeActiveType(index)}>
                            {item}
                        </div> 
                    ))}
                </div>
                <div className={styles.size}>
                    {sizeNames.map((item, index) => (
                        <div
                        key={index}  
                        className={`${styles.btn} ${!elem.sizes.includes(item) && styles.disabled} ${index === activeSize && styles.active}`}
                        onClick={() => changeActiveSize(item, index)}>
                            {item}
                        </div>
                    ))}
                </div>
            </div>
        </div>
        <div className={styles.footer}>
            <div className={styles.price}>
                <h2>от {elem.price} P</h2>
            </div>
            <div 
                className={styles.button} 
                onClick={() => dispatch(setBasketPizzas(
                    {
                        ...elem,
                        activeType: typeNames[activeType],
                        activeSize: sizeNames[activeSize],
                    }
                    ))}>
                <div>+</div>
                <div>Добавить</div>
                <div className={styles.count}>{pizzaElem.filter((obj) => obj.id === elem.id).length ? pizzaElem.find((obj) => obj.id === elem.id)?.count : 0}</div>
            </div>
        </div>
    </div>
  )
}
