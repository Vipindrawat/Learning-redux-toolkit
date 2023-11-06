import { configureStore } from "@reduxjs/toolkit";
import bankreducer from './slice/bank/index'

const store = configureStore({
    reducer: {
        bank: bankreducer
    }
})

export default store;