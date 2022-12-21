import {createAsyncThunk} from "@reduxjs/toolkit";
import customAxios from "./api";
import axios from "axios";

export const getCategories = createAsyncThunk(
    'blogs/getCategories',
    async () => {
        const response = await axios.get('http://localhost:8080/categories');
        return response.data;
    }
)