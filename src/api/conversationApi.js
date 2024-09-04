import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({ baseUrl: '/api' }), // Set the base URL to the root or common base path
    endpoints: builder => ({
        getConversations: builder.query({
            query: () => 'users/', // Specify the endpoint relative to the base URL
        }),
    }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetConversationsQuery } = authApi;
