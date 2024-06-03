import { configureStore } from "@reduxjs/toolkit";
import Slice from "./Slice";



const Store= configureStore({
    reducer:{
        Sid: Slice
    }
   
})

export default Store