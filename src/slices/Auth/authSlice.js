import { createSlice } from "@reduxjs/toolkit"

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: JSON.parse(localStorage.getItem("chat-app-user")) || null,  
    },
    reducers: {
        setUser: (state, action) => {
            const { payload } = action

            // localstorage
            localStorage.setItem("chat-app-user", JSON.stringify(payload))
            state.user = action.payload
        }
    }
})

export const { setUser } = authSlice.actions
export default authSlice.reducer