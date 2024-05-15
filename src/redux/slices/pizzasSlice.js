import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// ВНИМАНИЕ!!! если запрос на сервер не работает => я удалил mockAPI, и тогда надо запускать сервер через json-server
//но под json-server тут запрос не переделан. Воот...
export const fetchPizzas = createAsyncThunk(
    'pizza/fetchPizzasStatus',
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
        status: '',
    },
    reducers: {
        setItems: (state, action) => {
            state.items = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPizzas.pending, (state) => {
            state.status = 'loading'
            state.items = []
        })
        builder.addCase(fetchPizzas.fulfilled, (state, action) => {
            state.items = action.payload
            state.status = 'successs'
        })
          builder.addCase(fetchPizzas.rejected, (state) => {
            state.status = 'error'
            state.items = []
        })
      },
    
})

export const { setItems } = pizzasSlice.actions
export default pizzasSlice.reducer