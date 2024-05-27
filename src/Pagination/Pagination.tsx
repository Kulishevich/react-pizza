import React, { FC, useState } from 'react'
import styles from './Pagination.module.scss'
import { useSelector, useDispatch } from 'react-redux'
import { setActivePage, activePageIncrement, activePageDecrement } from '../redux/slices/pageSlice'


export const Pagination: FC = () => {
  const pages: number[] = [1, 2, 3]

  const activePage = useSelector(state => state.activePage.page )
  const dispatch = useDispatch()

  const increment = () => {
    if(activePage < 2) dispatch(activePageIncrement())
  }

  const decrement = () => {
    if(activePage > 0) dispatch(activePageDecrement())
  }

    return (
    <div className={styles.main}>
        <li onClick={decrement} className={styles.navigation}>Назад</li>
        {pages.map((elem, index) => (
            <li 
                key={index} 
                className={activePage === index ? styles.active : ''}
                onClick={() => dispatch(setActivePage(index))} >
                {elem}
            </li>
        ))}
        <li onClick={increment} className={styles.navigation}>Вперёд</li>
    </div>
  )
}
