import { configureStore } from '@reduxjs/toolkit'
import  filterReducer from './slices/filterSlice'
import searchSlice from './slices/searchSlice'
import pageSlice from './slices/pageSlice'
import basketSlice from './slices/basketSlice'

export default configureStore({
  reducer: {
    filter : filterReducer,
    search : searchSlice,
    activePage: pageSlice,
    basket: basketSlice,
  },
})