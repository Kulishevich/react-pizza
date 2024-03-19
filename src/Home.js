import { useState } from 'react';
import Header from './Header/Header';
import styles from './Home.module.scss'
import Items from './Items/Items';
import Sorting from './Sorting/Filter';
import MyContext from './MyContext'

function Home() {
  const [activeSort, setActiveSort] = useState(0)
  const [activeFilter, setActiveFilter] = useState(0)
  const [searchPizza, setSearchPizza] = useState('')

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
          <Items/>
        </MyContext.Provider>
      </div>
    </div>
  )
}

export default Home;
