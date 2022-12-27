import {createSlice} from "@reduxjs/toolkit";
import {addLike, getLike} from "../../services/likeService";

const initialState = {
    likes: [],
    currentLike: []
}

const likeSlice = createSlice({
    name: 'likes',
    initialState,
    extraReducers: builder => {
        builder.addCase(addLike.fulfilled, (state, {payload}) => {
            state.likes = payload
        });
        builder.addCase(getLike.fulfilled, (state, {payload}) => {
            state.currentLike = payload;
        })
    }
});
export default likeSlice.reducer;