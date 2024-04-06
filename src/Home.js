// import styles from './Home.module.scss'
import Items from './Items/Items';
import Sorting from './Sorting/Filter';
import Pagination from './Pagination/Pagination';


function Home() {
  return (  
    <>
      <Sorting/>
      <Items />
      <Pagination />
    </>
  )
}

export default Home;
