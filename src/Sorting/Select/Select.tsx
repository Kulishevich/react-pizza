import React, { FC, useEffect, useRef, useState } from 'react'
import styles from './Select.module.scss'
import { useSelector, useDispatch } from 'react-redux'
import { setSortIndex } from '../../redux/slices/filterSlice'

const sort: string[] = ['популярности (DESC)', 'популярности (ASC)', 'цене (DESC)', 'цене (ASC)', 'алфавиту (DESC)', 'алфавиту (ASC)']

export const Select: FC = () => {
    const [showMenu, setShowMenu] = useState<boolean>(false)
    const selectRef = useRef()
    const sortInd = useSelector((state) => state.filter.sortIndex)
    const dispatch = useDispatch()

  useEffect(() => {
    if(showMenu){  
        const handleClickOutside = (event) => { 
          if(!event.composedPath().includes(selectRef.current)){
            setShowMenu(false)
            console.log('закрываем')
            document.body.removeEventListener('click', handleClickOutside)
          }
        }
        document.body.addEventListener('click', handleClickOutside)
      }
  }, [showMenu])

  return (
    <div className={styles.main} ref={selectRef}>
        <div className={styles.container}>Сортировка по: <span className={styles.menu} onClick={() => setShowMenu(!showMenu)}>{sort[sortInd]}</span></div>
        {showMenu && (<div className={styles.elems}>
            {sort.map((elem, index) => (
                <li key={index} className={`${styles.elem} ${index == sortInd && styles.active}`} onClick={() => dispatch(setSortIndex(index))}>{elem}</li>
            ))}
        </div>  )}
    </div>
  )
}