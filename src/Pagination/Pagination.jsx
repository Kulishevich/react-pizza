import React, { useState } from 'react'
import styles from './Pagination.module.scss'

export default function Pagination({activePage, setActivePage}) {
  const pages = [1, 2, 3]

    return (
    <div className={styles.main}>
        <li onClick={() => setActivePage(prev => (activePage > 0 ? --prev : prev))} className={styles.navigation}>Назад</li>
        {pages.map((elem, index) => (
            <li 
                key={index} 
                className={activePage === index ? styles.active : ''}
                onClick={() => setActivePage(index)} >
                {elem}
            </li>
        ))}
        <li onClick={() => setActivePage(prev => (activePage < 2 ? ++prev : prev))} className={styles.navigation}>Вперёд</li>
    </div>
  )
}
