import { createSlice } from '@reduxjs/toolkit'

export const pageSlice = createSlice({
    name: 'activePage',
    initialState: {
        page: 0,
    },
    reducers: {
        activePageIncrement: (state) => {
            state.page++
        },
        activePageDecrement: (state) => {
            state.page--
        },
        setActivePage: (state, action) => {
            state.page = Number(action.payload)
        }
    }
})

export const { setActivePage, activePageIncrement, activePageDecrement } = pageSlice.actions
export default pageSlice.reducer