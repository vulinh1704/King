import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./slice/userSlice";
import blogReducer from "./slice/blogSlice";
import categoryReducer from "./slice/categorySlice";
const store = configureStore({
    reducer: {
        users : userReducer,
        blogs : blogReducer,
        categories: categoryReducer
    }
});
export default store;