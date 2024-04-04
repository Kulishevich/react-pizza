import React  from 'react'
import styles from './Filter.module.scss'
import Select from './Select/Select'
import { useSelector, useDispatch } from 'react-redux'
import { setFilterIndex } from '../redux/slices/filterSlice'

const categories = ['Все', 'Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые']

export default function Filter() {

  const activeFilter = useSelector((state) => state.filter.filterIndex)
  const dispatch = useDispatch()

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
