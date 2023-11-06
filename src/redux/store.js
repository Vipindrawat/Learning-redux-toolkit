import { configureStore } from "@reduxjs/toolkit";
import bankreducer from './slice/bank/index'
import countreducer from './slice/counter/index'

const store = configureStore({
    reducer: {
        bank: bankreducer, counter: countreducer
    }
})

export default store;