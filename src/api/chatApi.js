import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const chatApi = createApi({
  reducerPath: 'chatApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  endpoints: builder => ({
    getMessages: builder.query({
      query: conversationId => `/message/${conversationId}`
    }),
    sendMessage: builder.mutation({
      query: ({ conversationId, message }) => ({
        url: `/message/send/${conversationId}`,
        method: 'POST',
        body: message,
      }),
    }),
    getUsers: builder.query({
      query: () => 'users/',
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetMessagesQuery, useSendMessageMutation, useGetUsersQuery } = chatApi