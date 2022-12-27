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
export const getBlog = createAsyncThunk(
    'blogs/getOne',
    async (id) => {
        const response = await axios.get('http://localhost:8080/blogs/'+ id)
        return response.data;
    }
)
export const getBlogByUser = createAsyncThunk(
    'blogs/getByUser',
    async (idUser) => {
        const response = await axios.get('http://localhost:8080/blogs/user/'+ idUser)
        return response.data;
    }
)

export const deleteBlog = createAsyncThunk(
    'blogs/delete',
    async (id) => {
        const response = await axios.delete('http://localhost:8080/blogs/'+ id)
        return id;
    }
)