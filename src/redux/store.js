import { configureStore } from "@reduxjs/toolkit";
import BlogSlice from './BlogSlice'
export default configureStore({
    reducer:{
        blog:BlogSlice
    }
})