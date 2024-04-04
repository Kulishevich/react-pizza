import React, { useState } from 'react'
import styles from './SearchPizza.module.scss'
import { useSelector, useDispatch } from 'react-redux'
import { setSearch } from '../redux/slices/searchSlice'


export default function SearchPizza() {
    const [inputValue, setInputValue] = useState('')

    const searchValue = useSelector((state) => state.search.value)
    const dispatch = useDispatch()

    return (
        <div className={styles.main}>
            <img className={styles.img1} src='/images/2.png' alt="Лупа" onClick={() => dispatch(setSearch(inputValue))}/>
            {inputValue && (<img className={styles.img2} src='/images/3.png' alt="Лупа" onClick={() => {
                setInputValue('')
                dispatch(setSearch(''))
            }}/>)}
            <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder='Поиск пиццы'/>
        </div>
    )
}
