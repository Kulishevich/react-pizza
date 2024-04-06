import React, { useState, useCallback } from 'react'
import styles from './SearchPizza.module.scss'
import { useDispatch } from 'react-redux'
import { setSearch } from '../redux/slices/searchSlice'
import debounce from 'lodash.debounce'


export default function SearchPizza() {
    const [inputValue, setInputValue] = useState('')
    const dispatch = useDispatch()
    const inputRef = React.useRef()

    const clickClear = () => {
        setInputValue('')
        dispatch(setSearch(''))
        inputRef.current.focus()
    }

    const debounceChangeValue = useCallback(debounce((event) => {
        dispatch(setSearch(event.target.value))
        console.log('change debounce!!!')
    }, 500), [])

    const changeValue = (event) => {
        setInputValue(event.target.value)
        console.log('change!!!')
        debounceChangeValue(event)
    }

    return (
        <div className={styles.main}>
            <img 
                className={styles.img1} 
                src='/images/2.png' 
                alt="Лупа" 
                onClick={() => dispatch(setSearch(inputValue))}
            />
            {inputValue && (<img className={styles.img2} src='/images/3.png' alt="Лупа" onClick={clickClear}/>)}
            <input 
                ref={inputRef}
                value={inputValue} 
                onChange={(e) => changeValue(e)} 
                placeholder='Поиск пиццы'
            />
        </div>
    )
}
