import { configureStore } from "@reduxjs/toolkit";
import listSlice from '../store/slice'
const store=configureStore({
    reducer:{
        listSlice:listSlice
    }
})

export default store;
