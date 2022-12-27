import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./slice/userSlice";
import blogReducer from "./slice/blogSlice";
import categoryReducer from "./slice/categorySlice";
import likeReducer from "./slice/likeSlice";
const store = configureStore({
    reducer: {
        users : userReducer,
        blogs : blogReducer,
        categories: categoryReducer,
        likes: likeReducer
    }
});
export default store;