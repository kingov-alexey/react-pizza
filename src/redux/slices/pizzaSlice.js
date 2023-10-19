import axios from 'axios';
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// First, create the thunk
export const fetchPizzas = createAsyncThunk(
    'pizza/fetchPizzasStatus',
    async ({baseURL, payload}) => {
        const { data } = await axios.get(`${baseURL}/table-pizzas?${payload}`);
      return data
    }
  )

const initialState = {
    items: [],
};

const pizzaSlice = createSlice({
    name: 'pizza',
    initialState,
    status: 'loading', // loading | success | error
    reducers: {
        setItems(state, action){
            state.items = action.payload;
        },
    }, 
    extraReducers: {
        [fetchPizzas.pending]: (state, action) => {
            console.log("Идет отправка");
            state.staus  = "loading";
            state.items = [];
        },
        [fetchPizzas.fulfilled]: (state, action) => {
            console.log(state, "Все ОК!");
            state.items =action.payload;
            state.status = 'success';
        },
        [fetchPizzas.rejected]: (state, action) => {
            console.log("Была ошибка");

            state.items = [];
        }
    }
});

export const { setItems } = pizzaSlice.actions;

export default pizzaSlice.reducer;