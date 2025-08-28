import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    user: false
}

export const userslice = createSlice({
    name: 'User',
    initialState,
    reducers:{
        login:(state, {payload})=>{},
        logOut:(state, {payload})=>{}
    }
})


export const {login, logOut}= userslice.actions
export default userslice.reducer