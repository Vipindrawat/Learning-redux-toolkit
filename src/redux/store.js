import { configureStore } from "@reduxjs/toolkit";
import bankreducer from './slice/bank/index'
import countreducer from './slice/counter/index'

console.log("inside store");
const store =
    configureStore({
        reducer: {
            bank: bankreducer, counter: countreducer
        }
    })

export default store;