import {createSlice} from "@reduxjs/toolkit";
import {addBlog} from "../../services/blogService";

const initialState = {
    blogs: []
}

const blogSlice = createSlice({
    name: 'users',
    initialState,
    extraReducers: builder => {
        builder.addCase(addBlog.fulfilled, (state, {payload}) => {
            state.blogs.push(payload)
        })
    }
});
export default blogSlice.reducer;