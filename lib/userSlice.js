import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'users',
    initialState: {
        'users': []
    },
    reducers: {
        setUser: (state, action)=>{
            state.users = action.payload
        }
    },
})

export default userSlice.reducer

export const {setUser} = userSlice.actions