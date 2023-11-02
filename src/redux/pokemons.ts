import { createSlice } from "@reduxjs/toolkit";
const initialQuery = [];
const pokemonSlice = createSlice({
    name: "pokemon",
    initialState : {value : []},
    reducers: {
        add: (state:any,data:any) => {
            if(data.payload)
                state.value = [...state.value,...data.payload];
        },
        set: (state:any,data:any) => {
            if(data.payload)
                state.value = [...data.payload];
        },
    }
})

export const { add ,set} = pokemonSlice.actions;
export default pokemonSlice.reducer;