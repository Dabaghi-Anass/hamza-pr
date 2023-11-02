import { createSlice } from "@reduxjs/toolkit";
const initialQuery = "";
const pokemonSlice = createSlice({
    name: "search",
    initialState : {value : initialQuery},
    reducers: {
        search: (state,payload) => {
            state.value = payload.payload
        }
    }
})

export const { search } = pokemonSlice.actions;
export default pokemonSlice.reducer;