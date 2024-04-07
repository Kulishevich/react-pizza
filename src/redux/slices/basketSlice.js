import { createSlice } from '@reduxjs/toolkit'


export const basketSlice = createSlice({
    name: 'basket',
    initialState: {
        basketPizzas: []
    },
    reducers: {
        setBasketPizzas: (state, action) => {
            const findItem = state.basketPizzas.find(obj => obj.id === action.payload.id);

            if(findItem){
                    findItem.count++
            } else {
                state.basketPizzas.push({
                    ...action.payload,
                    count: 1,
                })
            }
        }
    }
})

export const { setBasketPizzas } = basketSlice.actions //экспорт методов(функций)
export default basketSlice.reducer