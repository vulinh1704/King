import {createAsyncThunk} from "@reduxjs/toolkit";
import customAxios from "./api";
import axios from "axios";

export const addBlog = createAsyncThunk(
    'blogs/add',
    async (data) => {
        const response = await axios.post('http://localhost:8080/blogs', data)
        return response.data;
    }
)
export const getBlogs = createAsyncThunk(
    'blogs/get',
    async (data) => {
        const response = await axios.get('http://localhost:8080/blogs', data)
        return response.data;
    }
)