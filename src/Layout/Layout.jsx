import React from 'react'
import Header from '../Header/Header'
import { Outlet } from 'react-router-dom'
import styles from './Layout.module.scss'
import Home from '../Home'

export const Layout = () => {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <Header/>
        
        <Outlet/>
      </div>
    </div>
  )
}
