import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const contactApi = createApi({
    reducerPath: 'contactApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://contact-app.mmsdev.site/api/v1' }),
    tagTypes: ['Contact'],
    endpoints: builder => ({
        GetContacts : builder.query({
            query: (token) => ({
                url: '/contact',
                headers:{authorization : `Bearer ${token}`}
            }),
            providesTags : ['Contact']
        }),
        AddContact: builder.mutation({
            query: ({contact,token}) => ({
                url: '/contact',
                method: 'POST',
                body: contact,
                headers : {authorization : ` Bearer ${token}`}
            }),
            invalidatesTags : ['Contact']
        }),
        RemoveContact: builder.mutation({
            query: ({id,token}) => ({
                url: `/contact/${id}`,
                method: 'DELETE',
                headers : {authorization : ` Bearer ${token}`}
            }),
            invalidatesTags : ['Contact']
        }),
        UpdateContact: builder.mutation({
            query: ({ id,Contact, token }) => ({
                url: `/contact/${id}`,
                method: 'PUT',
                body: Contact,
                headers : {authorization : `Bearer ${token}`}
            }),
            invalidatesTags : ['Contact']
        })
    })
})


export const { useGetContactsQuery,useAddContactMutation,useRemoveContactMutation,useUpdateContactMutation } = contactApi
