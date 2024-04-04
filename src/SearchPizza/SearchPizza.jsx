import React, { useState } from 'react'
import styles from './SearchPizza.module.scss'

export default function SearchPizza({setSearchPizza}) {
    const [value, setValue] = useState('')

    return (
        <div className={styles.main}>
            <img className={styles.img1} src='/images/2.png' alt="Лупа" onClick={() => setSearchPizza(value)}/>
            {value && (<img className={styles.img2} src='/images/3.png' alt="Лупа" onClick={() => {
                setValue('')
                setSearchPizza('')
            }}/>)}
            <input value={value} onChange={(e) => setValue(e.target.value)} placeholder='Поиск пиццы'/>
        </div>
    )
}
