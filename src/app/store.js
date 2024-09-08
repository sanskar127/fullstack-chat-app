import { configureStore } from '@reduxjs/toolkit'
import { authApi } from '../api/authApi'
import { chatApi } from '../api/chatApi'
import authReducer from '../features/Auth/authSlice'
import searchReducer from '../features/Conversation/searchSlice'
import socketReducer from '../features/Socket/socketSlice'
import conversationsReducer from '../features/Conversation/conversationsSlice'

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [chatApi.reducerPath]: chatApi.reducer,
    search: searchReducer,
    auth: authReducer,
    conversation: conversationsReducer,
    socket: socketReducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['socket/setSocket'], // Ignore specific actions
        ignoredPaths: ['socket.socket'], // Ignore specific paths in the state
      },
    })
      .concat(authApi.middleware)
      .concat(chatApi.middleware)
})