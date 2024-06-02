import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
    name: 'filter',
    initialState: {
        filterIndex: 0,
        sortIndex: 0,
    },
    reducers: {
        setFilterIndex: (state, action: PayloadAction<number>) => {
            state.filterIndex = Number(action.payload)
        },
        setSortIndex: (state, action: PayloadAction<number>) => {
            state.sortIndex = Number(action.payload)
        },
    }
})

export const { setSortIndex, setFilterIndex } = filterSlice.actions //экспорт методов(функций)
export default filterSlice.reducer