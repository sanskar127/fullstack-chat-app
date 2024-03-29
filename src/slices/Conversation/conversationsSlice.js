// import { create } from 'zustand'

// const useConversation = create((set) => ({
//     selectedConversation: null,
//     setSelectedConversation: (selectedConversation) => set({selectedConversation}),
//     messages:[],
//     setMessages: (messages) => set({messages})
// }))

// export default useConversation

import { createSlice } from '@reduxjs/toolkit'

export const conversationsSlice = createSlice({
    name: 'conversation',
    initialState: {
        selectedConversation: null,
        messages: [],
    },
    reducers: {
        setSelectedConversation: (state, action) => {
          state.selectedConversation = action.payload;
        },
        setMessages: (state, action) => {
          state.messages.push(action.payload)
        },
    }
})

export const { setSelectedConversation, setMessages } = conversationsSlice.actions;
export default conversationsSlice.reducer;