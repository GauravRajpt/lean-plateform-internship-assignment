import { configureStore } from "@reduxjs/toolkit";
import navslice from "./navslice";

const store= configureStore({
    reducer:{
        nav:navslice,
    }
})

export default store;