import { configureStore } from '@reduxjs/toolkit'
import filterReducer from './slices/filterSlice'
import searchSlice from './slices/searchSlice'
import pageSlice from './slices/pageSlice'
import basketSlice from './slices/basketSlice'
import pizzasSlice from './slices/pizzasSlice'
import { useDispatch } from 'react-redux'

export const store = configureStore({
  reducer: {
    filter : filterReducer,
    search : searchSlice,
    activePage: pageSlice,
    basket: basketSlice,
    pizzas: pizzasSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>

type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()