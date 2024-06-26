import React, { FC, useEffect, useRef, useState } from 'react'
import styles from './Select.module.scss'
import { useSelector, useDispatch } from 'react-redux'
import { setSortIndex } from '../../redux/slices/filterSlice'
import { RootState } from '../../redux/store'

type MouseClick = MouseEvent & {
  composedPath(): EventTarget[]
}

const sort: string[] = ['популярности (DESC)', 'популярности (ASC)', 'цене (DESC)', 'цене (ASC)', 'алфавиту (DESC)', 'алфавиту (ASC)']

export const Select: FC = () => {
    const [showMenu, setShowMenu] = useState<boolean>(false)
    const selectRef = useRef<HTMLDivElement>(null)
    const sortInd = useSelector((state: RootState) => state.filter.sortIndex)
    const dispatch = useDispatch()

  useEffect(() => {
    if(showMenu){  
        const handleClickOutside = (event : MouseEvent) => { 
          const _event = event as MouseClick;
          if(selectRef.current && !_event.composedPath().includes(selectRef.current)){
            setShowMenu(false)
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