import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000/api' }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => 'users',
    }),
  }),
});

export const { useGetUsersQuery } = api