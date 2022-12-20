import {createSlice} from "@reduxjs/toolkit";
import {loginUser} from "../../services/userService";

const initialState = {
    users: [],
    currentUser: {}
}
const userSlice = createSlice({
    name: 'users',
    initialState,
    extraReducers: builder => {
        builder.addCase(loginUser.fulfilled, (state, {payload}) => {

        })
    }
});
export default userSlice.reducer;