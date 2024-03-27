import React, { useContext, useEffect, useState } from 'react'
import styles from './Items.module.scss'
import Item from './Item/Item'
import MyContext from '../MyContext'
import MyLoader from '../MyLoader/MyLoader'

export default function Items({searchPizza, activePage}) {
    const [pizza, setPizza] = useState([]) //массив объектов пицц
    const {activeSort, activeFilter} = useContext(MyContext)
    const sortName = ['rating&order=desc', 'rating&order=asc', 'price&order=desc', 'price&order=asc', 'title&order=desc', 'title&order=asc'] //сортировка
    const [isLoaded, setIsLoaded] = useState()

    useEffect(() => { //загрузка данных с MockAPI
        setIsLoaded(false)
        const fetchData = async () => {
            const data = await fetch(`https://65e2384ca8583365b318095f.mockapi.io/pizza?page=${activePage + 1}&limit=4&sortBy=${sortName[activeSort]}${activeFilter === 0 ? '' : `?filter&category=${activeFilter}`}`);
            const res = await data.json();
            setPizza(res);
            setIsLoaded(true)
        }
    
        fetchData();
    }, [activeSort, activeFilter, activePage]);

  return (
    <div className={styles.main}>
        <div className={styles.title}>
            <h1>Все пиццы</h1>
        </div>
        <div className={styles.container}>
            <div className={styles.items}>
                {isLoaded ? (pizza
                .filter(item => (item.title.toLowerCase().includes(searchPizza.toLowerCase())))
                .map(elem => (
                    <Item key={elem.id} elem={elem}/>
                ))) : (new Array(4)).fill().map((_, index) => <MyLoader key={index} />)}
            </div>
        </div>
    </div>
  )
}
