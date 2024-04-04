import { useState } from 'react';
// import styles from './Home.module.scss'
import Items from './Items/Items';
import Sorting from './Sorting/Filter';
import MyContext from './MyContext'
import Pagination from './Pagination/Pagination';


function Home() {
  const [activeSort, setActiveSort] = useState(0) //сортировка
  const [activeFilter, setActiveFilter] = useState(0) //фильтры
  const [searchPizza, setSearchPizza] = useState('') //поиск пиццы в input, работает по нажатию на "Лупу", отключён в связи с ненадобностью, вохможно включу
  //тут использование контекста было необязательным, делал для практики, а вот корзину придётся делать с контекстом обязательно. Отмена, корзина будет с редаксом
  const [activePage, setActivePage] = useState(0) //активная страница(Пагинация)


  return (  
    <MyContext.Provider value={{
          activeSort: activeSort,
          setActiveSort: setActiveSort,
          activeFilter: activeFilter,
          setActiveFilter: setActiveFilter,
        }}> 
            <Sorting/>
            <Items searchPizza={searchPizza} activePage={activePage}/>
            <Pagination activePage={activePage} setActivePage={setActivePage}/>
        </MyContext.Provider>
  )
}

export default Home;
