import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({ baseUrl: '/api/message' }),
    endpoints: builder => ({
        getMessage: builder.query({
            query: receiverId => `/${receiverId}`
        }),
        sendMessage: builder.mutation({
            query: ({receiverId, message}) => ({
                url: `/send/${receiverId}`,
                method: 'POST',
                body: message,
            }),
        }),
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetMessageQuery, useSendMessageMutation } = authApi