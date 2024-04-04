import React, { useState } from 'react'
import styles from './Select.module.scss'
import { useSelector, useDispatch } from 'react-redux'
import { setSortIndex } from '../../redux/slices/filterSlice'

const sort = ['популярности (DESC)', 'популярности (ASC)', 'цене (DESC)', 'цене (ASC)', 'алфавиту (DESC)', 'алфавиту (ASC)']

export default function Select() {
    const [showMenu, setShowMenu] = useState(false)

    const sortInd = useSelector((state) => state.filter.sortIndex)
    const dispatch = useDispatch()

  return (
    <div className={styles.main}>
        <div className={styles.container}>Сортировка по: <span className={styles.menu} onClick={() => setShowMenu(!showMenu)}>{sort[sortInd]}</span></div>
        {showMenu && (<div className={styles.elems}>
            {sort.map((elem, index) => (
                <li key={index} className={`${styles.elem} ${index == sortInd && styles.active}`} onClick={() => dispatch(setSortIndex(index))}>{elem}</li>
            ))}
        </div>  )}
    </div>
  )
}