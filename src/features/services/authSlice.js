import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";


export const authSlice = createSlice({
    name: 'authSlice',
    initialState: {
        user: null,
        token : null
    },
    reducers: {
        AddUser: (state, {payload}) => {
            state.user = payload.user
            state.token = payload.token
            Cookies.set('user', JSON.stringify(state.user),{expires : 10})
            Cookies.set('token',state.token,{expires : 10})
        },
        RemoveUser: (state) => {
            state.user = null
            state.token = null
            Cookies.remove('user')
            Cookies.remove('token')
        }
    }
})

export const { AddUser,RemoveUser } = authSlice.actions;
export default authSlice.reducer