import { useState } from 'react';
// import styles from './Home.module.scss'
import Items from './Items/Items';
import Sorting from './Sorting/Filter';
import Pagination from './Pagination/Pagination';


function Home() {
  const [searchPizza, setSearchPizza] = useState('') //поиск пиццы в input, работает по нажатию на "Лупу", отключён в связи с ненадобностью, вохможно включу
  const [activePage, setActivePage] = useState(0) //активная страница(Пагинация)


  return (  
    <>
      <Sorting/>
      <Items searchPizza={searchPizza} activePage={activePage}/>
      <Pagination activePage={activePage} setActivePage={setActivePage}/>
    </>
  )
}

export default Home;
