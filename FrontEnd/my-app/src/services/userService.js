import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const loginUser = createAsyncThunk(
    'users/login',
    async (data) => {
        let response = (await axios.post('http://localhost:8080/users/login', data));
        return response.data;
    }
)
export const register = createAsyncThunk(
    'users/register',
    async (data) => {
        let response = (await axios.post('http://localhost:8080/users/register', data));
        return response.data;
    }
)
export const getUser = createAsyncThunk(
    'users/get',
    async (id) => {
        let response = await axios.get('http://localhost:8080/users/'+ id);
        return response.data;
    }
)