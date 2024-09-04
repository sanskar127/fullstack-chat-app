import { configureStore } from '@reduxjs/toolkit'
import { authApi } from '../api/authApi'
import { chatApi } from '../api/chatApi'
import authReducer from '../slices/Auth/authSlice'
import conversationsReducer from '../slices/Conversation/conversationsSlice'

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [chatApi.reducerPath]: chatApi.reducer,
    auth: authReducer,
    conversation: conversationsReducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware()
      .concat(authApi.middleware)
      .concat(chatApi.middleware)
})