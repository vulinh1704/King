import {createSlice} from "@reduxjs/toolkit";
import {getCategories} from "../../services/categoryService";

const initialState = {
    categories: []
}
const userSlice = createSlice({
    name: 'categories',
    initialState,
    extraReducers: builder => {
        builder.addCase(getCategories.fulfilled, (state, {payload}) => {
            state.categories = payload
        })
    }
});
export default userSlice.reducer;