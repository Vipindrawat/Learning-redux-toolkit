import { createSlice } from "@reduxjs/toolkit";

const counterslice = createSlice({
    name: 'count',
    initialState: { value: 0 },
    reducers: {
        //changing propertiex in state object:
        increment: (state) => {
            console.log("inside increment");
            state.value += 1
        },
        decrement: (state) => { state.value -= 1 }
    }
})

// exporting action creators which are returned by createslice method:
export const { increment, decrement } = counterslice.actions;
export default counterslice.reducer;
