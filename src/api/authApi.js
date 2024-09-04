import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({ baseUrl: '/api/auth' }),
    endpoints: (builder) => ({
        signin: builder.mutation({
            query: credentials => ({
                url: '/signin',
                method: 'POST',
                body: credentials,
            }),
        }),
        signup: builder.mutation({
            query: credentials => ({
                url: '/signup',
                method: 'POST',
                body: credentials,
            }),
        }),
        signout: builder.mutation({
            query: () => ({
                url: '/signout',
                method: 'POST',
            }),
        }),
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useSigninMutation, useSignupMutation, useSignoutMutation } = authApi