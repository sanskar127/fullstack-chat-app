import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../slices/Auth/authSlice'
import inputReducer from '../slices/Auth/inputSlice'
import conversationsReducer from '../slices/Conversation/conversationsSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    input: inputReducer,
    conversations: conversationsReducer
  },
})