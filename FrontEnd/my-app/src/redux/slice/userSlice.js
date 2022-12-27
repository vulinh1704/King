import {createSlice} from "@reduxjs/toolkit";
import {getUser, loginUser, register} from "../../services/userService";

const initialState = {
    users: [],
    currentUser: JSON.parse(localStorage.getItem('currentUser')),
    checkLogin: false
}
const userSlice = createSlice({
    name: 'users',
    initialState,
    extraReducers: builder => {
        builder.addCase(loginUser.fulfilled, (state, {payload}) => {
            if (payload.user) {
                localStorage.setItem('currentUser', JSON.stringify(payload.user));
                localStorage.setItem('token', payload.token)
                localStorage.setItem('userId', payload.user.id)
            }
            state.currentUser = payload.user;
        });
        builder.addCase(register.fulfilled, (state, {payload}) => {
            state.users.push(payload);
        });
        builder.addCase(getUser.fulfilled, (state, {payload}) => {
            state.currentUser = payload;
        })
    }
});
export default userSlice.reducer;