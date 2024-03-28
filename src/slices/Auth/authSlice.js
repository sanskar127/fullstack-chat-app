import { createSlice } from "@reduxjs/toolkit"

export const authSlice = createSlice({
    name: 'auth',
    initialState: JSON.parse(localStorage.getItem("chat-app-user")) || null,
    reducers: {
        setUser: (state, action) => {
            state = action.payload
        }
    }
})

export const { setUser } = authSlice.actions
export default authSlice.reducer