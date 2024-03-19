import React, { useContext, useEffect, useState } from 'react'
import styles from './Filter.module.scss'
import Select from './Select/Select'
import MyContext from '../MyContext'

const categories = ['Все', 'Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые']

export default function Filter() {
  const [active, setActive] = useState(0)
  const {setActiveFilter} = useContext(MyContext)

  useEffect(() => {
    setActiveFilter(active)
  }, [active])

  return (
    <div className={styles.main}>
        <div className={styles.nav}>
          {categories.map((elem, index) => (
            <div key={index} className={`${styles.btn} ${index == active && styles.active}`} onClick={() => setActive(index)}>{elem}</div>
          ))}
        </div>
        <Select/>
    </div>
  )
}
