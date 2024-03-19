import React, { useContext, useEffect, useState } from 'react'
import styles from './Select.module.scss'
import MyContext from '../../MyContext'

const sort = ['популярности (DESC)', 'популярности (ASC)', 'цене (DESC)', 'цене (ASC)', 'алфавиту (DESC)', 'алфавиту (ASC)']

export default function Select() {
    const [indexSort, setIndexSort] = useState(0)
    const [showMenu, setShowMenu] = useState(false)
    const {setActiveSort} = useContext(MyContext)

    useEffect(() => {
      setActiveSort(indexSort)
    }, [indexSort])

  return (
    <div className={styles.main}>
        <div className={styles.container}>Сортировка по: <span className={styles.menu} onClick={() => setShowMenu(!showMenu)}>{sort[indexSort]}</span></div>
        {showMenu && (<div className={styles.elems}>
            {sort.map((elem, index) => (
                <li key={index} className={`${styles.elem} ${index == indexSort && styles.active}`} onClick={() => setIndexSort(index)}>{elem}</li>
            ))}
        </div>  )}
    </div>
  )
}