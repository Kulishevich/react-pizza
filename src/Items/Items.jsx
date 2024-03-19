import React, { useContext, useEffect, useState } from 'react'
import styles from './Items.module.scss'
import Item from './Item/Item'
import MyContext from '../MyContext'

export default function Items() {
    const [pizza, setPizza] = useState([])
    const {activeSort, activeFilter, searchPizza} = useContext(MyContext)
    const sortName = ['rating&order=desc', 'rating&order=asc', 'price&order=desc', 'price&order=asc', 'title&order=desc', 'title&order=asc']

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetch(`https://65e2384ca8583365b318095f.mockapi.io/works?sortBy=${sortName[activeSort]}${activeFilter === 0 ? '' : `?filter&category=${activeFilter}`}`);
            const res = await data.json();
            setPizza(res);
        }
    
        fetchData();
    }, [activeSort, activeFilter]);

  return (
    <div className={styles.main}>
        <div className={styles.title}>
            <h1>Все пиццы</h1>
        </div>
        <div className={styles.items}>
            {pizza
            .filter(elem => (elem.title.toLowerCase().includes(searchPizza.toLowerCase())))
            .map(elem => (
                <Item key={elem.id} elem={elem}/>
            ))}
        </div>
    </div>
  )
}
