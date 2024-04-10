import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPizzas = createAsyncThunk('pizza/fetchPizzasStatus',
    async (params) => {
        const {
            activePage,
            sortName,
            sortInd,
            filterInd,
        } = params
        const { data } = await axios.get(`https://65e2384ca8583365b318095f.mockapi.io/pizza?page=${activePage + 1}&limit=4&sortBy=${sortName[sortInd]}${filterInd === 0 ? '' : `?filter&category=${filterInd}`}`)
        return data
    }
)

const pizzasSlice = createSlice({
    name: 'pizza',
    initialState: {
        items: [],
    },
    reducers: {
        setItems: (state, action) => {
            state.items = action.payload
        }
    },
    extraReducers: (builder) => { //вот тут вопрос по доп экшенам
        [fetchPizzas.fulfilled]: (state, action) => {
            console.log(state)
        }
    }
})

export const { setItems } = pizzasSlice.actions
export default pizzasSlice.reducer