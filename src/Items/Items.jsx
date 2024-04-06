import React, { useEffect, useState } from 'react'
import styles from './Items.module.scss'
import Item from './Item/Item'
import MyLoader from '../MyLoader/MyLoader'
import { useSelector } from 'react-redux'
import axios from 'axios'

export default function Items() {
    const [pizza, setPizza] = useState([]) //массив объектов пицц
    const sortName = ['rating&order=desc', 'rating&order=asc', 'price&order=desc', 'price&order=asc', 'title&order=desc', 'title&order=asc'] //сортировка
    const [isLoaded, setIsLoaded] = useState() //состояние загрузи

    const filterInd = useSelector((state) => state.filter.filterIndex) //достаём из redux id фильтрации
    const sortInd = useSelector((state) => state.filter.sortIndex) //достаём из redux id сортировки
    const searchValue = useSelector((state) => state.search.value)
    const activePage = useSelector(state => state.activePage.page )

    useEffect(() => { //загрузка данных с MockAPI
        setIsLoaded(false) //иммитируем загрузку данных

        axios
        .get(`https://65e2384ca8583365b318095f.mockapi.io/pizza?page=${activePage + 1}&limit=4&sortBy=${sortName[sortInd]}${filterInd === 0 ? '' : `?filter&category=${filterInd}`}`)
        .then(res => {
            setPizza(res.data); //после обновления фильтрации, сортировки или страницы обновляет
            setIsLoaded(true) //выше состояние загрузки переводится в состояние false, и соответственно после успешной загрузки она становится true
        })
        .catch(err => console.log('Error:', err))
    }, [sortInd, filterInd, activePage]);

  return (
    <div className={styles.main}>
        <div className={styles.title}>
            <h1>Все пиццы</h1>
        </div>
        <div className={styles.container}>
            <div className={styles.items}>
                {isLoaded ? (pizza
                .filter(item => (item.title.toLowerCase().includes(searchValue.toLowerCase())))
                .map(elem => (
                    <Item key={elem.id} elem={elem}/>
                ))) : (new Array(4)).fill().map((_, index) => <MyLoader key={index} />)}
            </div>
        </div>
    </div>
  )
}
