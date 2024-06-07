import React, { FC }  from 'react'
import styles from './Filter.module.scss'
import {Select} from './Select/Select'
import { useSelector, useDispatch } from 'react-redux'
import { setFilterIndex } from '../redux/slices/filterSlice'
import { RootState } from '../redux/store'

const categories: string[] = ['Все', 'Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые']

export const Filter: FC = () => {

  const activeFilter: number = useSelector((state: RootState) => state.filter.filterIndex)
  const dispatch = useDispatch()

  console.log('render categoryes')

  return (
    <div className={styles.main}>
        <div className={styles.nav}>
          {categories.map((elem, index) => (
            <div key={index} className={`${styles.btn} ${index == activeFilter && styles.active}`} onClick={() => dispatch(setFilterIndex(index))}>{elem}</div>
          ))}
        </div>
        <Select/>
    </div>
  )
}
