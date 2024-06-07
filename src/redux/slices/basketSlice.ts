import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { PizzaElemBasket } from '../../types/types';
import { getBasketLS } from '../../utils/GetBasketLS';

interface BasketSliceState {
    basketPizzas: PizzaElemBasket[]
}

const initialState: BasketSliceState = {
    basketPizzas: getBasketLS()
}

export const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        setLSBasketPizzas: (state, action: PayloadAction<PizzaElemBasket[]>) => {
            state.basketPizzas = action.payload
        },
        setBasketPizzas: (state, action: PayloadAction<PizzaElemBasket>) => {
            const findItem = state.basketPizzas.find(obj => obj.id === action.payload.id);

            if(findItem){
                findItem.count++
            } else {
                state.basketPizzas.push({
                    ...action.payload,
                })
            }
        },
        setCountIncrement: (state, action: PayloadAction<number>) => {
            state.basketPizzas[action.payload].count++
        },
        setCountDecrement: (state, action: PayloadAction<number>) => {
            if(state.basketPizzas[action.payload].count > 1){
                state.basketPizzas[action.payload].count--
            } else {
                state.basketPizzas = [...state.basketPizzas.slice(0, action.payload), ...state.basketPizzas.slice(action.payload + 1)]
            }
        },
        deletePizzaElem: (state, action: PayloadAction<number>) => {
            state.basketPizzas = [...state.basketPizzas.slice(0, action.payload), ...state.basketPizzas.slice(action.payload + 1)]
        },
        clearPizzaBasket: (state) => {
            state.basketPizzas = []
        }
    }
})

export const { setBasketPizzas, setCountIncrement, setCountDecrement, deletePizzaElem, clearPizzaBasket, setLSBasketPizzas} = basketSlice.actions //экспорт методов(функций)
export default basketSlice.reducer