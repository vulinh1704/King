import {createSlice} from "@reduxjs/toolkit";
import {addBlog, deleteBlog, getBlog, getBlogByUser, getBlogs} from "../../services/blogService";

const initialState = {
    blogs: [],
    currentBlog: null,
    blogsUser: []
}

const blogSlice = createSlice({
    name: 'blogs',
    initialState,
    extraReducers: builder => {
        builder.addCase(addBlog.fulfilled, (state, {payload}) => {
            state.blogs.push(payload)
        });
        builder.addCase(getBlogs.fulfilled, (state, {payload}) => {
            state.blogs = payload;
        });
        builder.addCase(getBlog.fulfilled, (state, {payload}) => {
            state.currentBlog = payload[0];
        });
        builder.addCase(getBlogByUser.fulfilled, (state, {payload}) => {
            state.blogsUser = payload;
        });
        builder.addCase(deleteBlog.fulfilled, (state, {payload}) => {
            let index = state.blogsUser.findIndex((e) => e.id = payload);
            state.blogsUser.splice(index, 1);
        })
    }
});
export default blogSlice.reducer;