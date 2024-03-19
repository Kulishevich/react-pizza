import React, { useState } from 'react'
import styles from './Item.module.scss'

export default function Item({elem}) {
    const typeNames = ['тонкое', 'традиционное']
    const sizeNames = [26, 30, 40]
    const [activeType, setActiveType] = useState()
    const [activeSize, setActiveSize] = useState()

    const changeActiveType = (index) => {
            if(elem.types.includes(index)){
                setActiveType(index)
            }
    }

    const changeActiveSize = (item, index) => {
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
            <div className={styles.button}>
                <div>+</div>
                <div>Добавить</div>
                <div className={styles.count}>2</div>
            </div>
        </div>
    </div>
  )
}
