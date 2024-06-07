import { FC, useEffect } from 'react'
import styles from './Items.module.scss'
import {Item} from './Item/Item'
import {MyLoader} from '../MyLoader/MyLoader'
import { useSelector } from 'react-redux'
import { setActivePage } from '../redux/slices/pageSlice'
import { setSortIndex, setFilterIndex } from '../redux/slices/filterSlice'
import qs from 'qs'
import { useNavigate } from 'react-router-dom'
import { fetchPizzas, setItems } from '../redux/slices/pizzasSlice'
import { PizzaElem } from '../types/types'
import { RootState, useAppDispatch } from '../redux/store'

export const Items: FC = () => {
    const sortName: string[] = ['rating&order=desc', 'rating&order=asc', 'price&order=desc', 'price&order=asc', 'title&order=desc', 'title&order=asc'] //сортировка

    const filterInd: number = useSelector((state : RootState) => state.filter.filterIndex) //достаём из redux id фильтрации
    const sortInd: number = useSelector((state : RootState) => state.filter.sortIndex) //достаём из redux id сортировки
    const searchValue: string = useSelector((state : RootState) => state.search.value) //поиск по пиццам
    const activePage: number = useSelector((state : RootState) => state.activePage.page ) //активная страница
    const { items, status } = useSelector((state : RootState) => state.pizzas)
    // console.log(items, status)
    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    // const fetchData = () => { // функция получения данных с сервера(mockAPI)
        //вариант без async await
        // axios
        // .get(`https://65e2384ca8583365b318095f.mockapi.io/pizza?page=${activePage + 1}&limit=4&sortBy=${sortName[sortInd]}${filterInd === 0 ? '' : `?filter&category=${filterInd}`}`)
        // .then(res => {
        //     setPizza(res.data)
        //     console.log(res.data)
        // })
        // .catch(err => {
        //     console.log('Error:', err.message)
        // })
        // .finally(() => {
        //     setIsLoaded(true)
        // })
    // }

    useEffect(() => {
        if(window.location.search){
            const params = qs.parse(window.location.search.substring(1))
            
            dispatch(setSortIndex(Number(params.sortInd)))
            dispatch(setFilterIndex(Number(params.filterInd)))
            dispatch(setActivePage(Number(params.activePage)))
        }
    }, [])

    useEffect(() => { //загрузка данных с MockAPI
        dispatch(fetchPizzas({
            activePage,
            sortName,
            sortInd,
            filterInd,
        }))
    }, [sortInd, filterInd, activePage]);

    useEffect(() => {
        const queryString = qs.stringify({
            sortInd,
            filterInd,
            activePage,
        })

        navigate(`?${queryString}`)
    }, [sortInd, filterInd, activePage])

  return (
    <div className={styles.main}>
        <div className={styles.title}>
            <h1>Все пиццы</h1>
        </div>
        <div className={styles.container}>
            <div className={styles.items}>
                {status === 'error' && <div>Упс...Что-то пошло не так</div>}
                {status !== 'loading' ? (items
                .filter((item: PizzaElem) => (item.title.toLowerCase().includes(searchValue.toLowerCase())))
                .map((elem: PizzaElem) => (
                    <Item key={elem.id} elem={elem}/>
                ))) : (new Array(4)).fill(null).map((_, index) => <MyLoader key={index} />)}
            </div>
        </div>
    </div>
  )
}
