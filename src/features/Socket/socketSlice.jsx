import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    socket: "",
    onlineUsers: []
}

export const socketSlice = createSlice({
    name: "socket",
    initialState,
    reducers: {
        setSocket: (state, action) => {
            state.socket = action.payload
        },
        setOnlineUsers: (state, action) => {
            state.onlineUsers.push(action.payload)
        }
    }
})

export const { setSocket, setOnlineUsers } = socketSlice.actions
export default socketSlice.reducer