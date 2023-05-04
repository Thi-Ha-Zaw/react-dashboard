import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://contact-app.mmsdev.site/api/v1' }),
    tagTypes : ['Auth'],
    endpoints: builder => ({
        registerUser: builder.mutation({
            query: (user) => ({
                url: '/register',
                method: 'POST',
                body : user,
            }),
            invalidatesTags : ['Auth'],
        }),
        loginUser: builder.mutation({
            query: (user) => ({
                url: '/login',
                method: 'POST',
                body : user,
            }),
            invalidatesTags : ['Auth'],
        }),
        logoutUser: builder.mutation({
            query: (token) => ({
                url: '/user-logout',
                method: 'POST',
                headers : {authorization : `Bearer ${token}`}
            }),
            invalidatesTags : ['Auth'],
        }),
        ChangePassword: builder.mutation({
            query: ({ data, token }) => ({
                url: '/change-password',
                method: 'POST',
                body: data,
                headers : {authorization : `Bearer ${token}`}
            }),
            invalidatesTags : ['Auth']
        })
    })
})

export const { useRegisterUserMutation,useLoginUserMutation,useLogoutUserMutation,useChangePasswordMutation } = authApi;