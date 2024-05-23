// import styles from './Home.module.scss'
import Items from './Items/Items';
import Sorting from './Sorting/Filter';
import Pagination from './Pagination/Pagination';
import { FC } from 'react';


export const Home: FC = () => {
  return (  
    <>
      <Sorting/>
      <Items />
      <Pagination />
    </>
  )
}
