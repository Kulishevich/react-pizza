import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { PizzaElem } from '../../types/types';
// ВНИМАНИЕ!!! если запрос на сервер не работает => я удалил mockAPI, и тогда надо запускать сервер через json-server
//но под json-server тут запрос не переделан. Воот...

export enum Status {
    LOADING = 'loading',
    SUCCESS =  'success',
    ERROR = 'error'
}

interface PizzaSliceState{
    items: PizzaElem[],
    status: Status,
}

const initialState: PizzaSliceState = {
    items: [],
    status: Status.LOADING,
}

type FetchPizzasSlice = {
    activePage: number,
    sortName: string[],
    sortInd: number,
    filterInd: number,
}

export const fetchPizzas = createAsyncThunk<PizzaElem[], FetchPizzasSlice>(
    'pizza/fetchPizzasStatus',
    async (params) => {
        const {
            activePage,
            sortName,
            sortInd,
            filterInd,
        } = params
        const { data } = await axios.get<PizzaElem[]>(`https://65e2384ca8583365b318095f.mockapi.io/pizza?page=${activePage + 1}&limit=4&sortBy=${sortName[sortInd]}${filterInd === 0 ? '' : `?filter&category=${filterInd}`}`)
        return data
    }
)

const pizzasSlice = createSlice({
    name: 'pizza',
    initialState,
    reducers: {
        setItems: (state, action: PayloadAction<PizzaElem[]>) => {
            state.items = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPizzas.pending, (state) => {
            state.status = Status.LOADING
            state.items = []
        })
        builder.addCase(fetchPizzas.fulfilled, (state, action) => {
            state.items = action.payload
            state.status = Status.SUCCESS
        })
          builder.addCase(fetchPizzas.rejected, (state) => {
            state.status = Status.ERROR
            state.items = []
        })
      },
    
})

export const { setItems } = pizzasSlice.actions
export default pizzasSlice.reducer