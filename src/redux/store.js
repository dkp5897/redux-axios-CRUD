import { configureStore } from "@reduxjs/toolkit";
import data from './reducer'

const store = configureStore({
    reducer:{
        appStore:data
    }
})

export default store