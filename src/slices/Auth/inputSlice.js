import { createSlice } from "@reduxjs/toolkit"

export const inputSlice = createSlice({
    name: "input",
    initialState: {},
    reducers: {
        setInput: (state, action) => {
            if (Object.keys(action.payload).length === 0) { return state = {} }
            return { ...state, ...action.payload }
        }
    }
})

export const { setInput } = inputSlice.actions
export default inputSlice.reducer