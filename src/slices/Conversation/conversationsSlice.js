import { createSlice } from '@reduxjs/toolkit'

export const conversationsSlice = createSlice({
    name: 'conversation',
    initialState: {
        selectedConversation: null,
        messages: [],
    },
    reducers: {
        setSelectedConversation: (state, action) => {
          state.selectedConversation = action.payload
        },
        setMessages: (state, action) => {
          // console.log('Payload:', action.payload)
          state.messages = [...action.payload]
        },
    }
})

export const { setSelectedConversation, setMessages } = conversationsSlice.actions;
export default conversationsSlice.reducer;