import React, { useState } from 'react'
import styles from './Pagination.module.scss'
import { useSelector, useDispatch } from 'react-redux'
import { setActivePage, activePageIncrement, activePageDecrement } from '../redux/slices/pageSlice'


export default function Pagination() {
  const pages = [1, 2, 3]

  const activePage = useSelector(state => state.page.activePage )
  console.log(activePage)
  const dispatch = useDispatch()


    return (
    <div className={styles.main}>
        <li onClick={() => dispatch(activePageDecrement())} className={styles.navigation}>Назад</li>
        {pages.map((elem, index) => (
            <li 
                key={index} 
                className={activePage === index ? styles.active : ''}
                onClick={() => dispatch(setActivePage(index))} >
                {elem}
            </li>
        ))}
        <li onClick={() => dispatch(activePageIncrement())} className={styles.navigation}>Вперёд</li>
    </div>
  )
}
