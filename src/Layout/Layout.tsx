import React, { FC } from 'react'
import {Header} from '../Header/Header'
import { Outlet } from 'react-router-dom'
import styles from './Layout.module.scss'

export const Layout: FC = () => {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <Header/>
        <Outlet/>
      </div>
    </div>
  )
}
