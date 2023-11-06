import { createSlice } from "@reduxjs/toolkit";

const bankslice = createSlice({
    name: "bank",
    initialState: 0,
    reducers: {
        withdraw: (state, action) => { return state + action.payload },
        deposit: (state, action) => { return state + action.payload }
        // withdraw: (state) => { return state - 1000 },
        // deposit: (state) => { return state + 1000 }
    }

})

export const { withdraw, deposit } = bankslice.actions;
export default bankslice.reducer;