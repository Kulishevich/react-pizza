import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
    name: 'filter',
    initialState: {
        filterIndex: 0,
        sortIndex: 0,
    },
    reducers: {
        setFilterIndex: (state, action) => {
            state.filterIndex = Number(action.payload)
        },
        setSortIndex: (state, action) => {
            state.sortIndex = Number(action.payload)
        },
    }
})

export const { setSortIndex, setFilterIndex } = filterSlice.actions //экспорт методов(функций)
export default filterSlice.reducer