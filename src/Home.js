import { useState } from 'react';
import Header from './Header/Header';
import styles from './Home.module.scss'
import Items from './Items/Items';
import Sorting from './Sorting/Filter';
import MyContext from './MyContext'
import Pagination from './Pagination/Pagination';

function Home() {
  const [activeSort, setActiveSort] = useState(0) //сортировка
  const [activeFilter, setActiveFilter] = useState(0) //фильтры
  const [searchPizza, setSearchPizza] = useState('') //поиск пиццы в input, работает по нажатию на "Лупу"

  const [activePage, setActivePage] = useState(0) //активная страница(Пагинация)

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <MyContext.Provider value={{
          activeSort: activeSort,
          setActiveSort: setActiveSort,
          activeFilter: activeFilter,
          setActiveFilter: setActiveFilter,
          searchPizza: searchPizza,
          setSearchPizza: setSearchPizza,
        }}>
          <Header/>
          <Sorting/>
          <Items activePage={activePage}/>
        </MyContext.Provider>
          <Pagination activePage={activePage} setActivePage={setActivePage}/>
      </div>
    </div>
  )
}

export default Home;
