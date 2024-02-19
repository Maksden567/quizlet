import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


 interface UserLogin {
    username:string,
    password:string
}

export const authApi= createApi({
    reducerPath:'authApi',
    baseQuery:fetchBaseQuery({ baseUrl: 'https://localhost:5001' }),
    endpoints: (builder) => ({
        login: builder.mutation<any,UserLogin>({
            query:(user)=>({
                    url:'login',
                    body:user,
                    method:'POST',
                    credentials:"include",
                    mode:'cors'

            })
        }),
        registration : builder.mutation<any,UserLogin>({
            query:(user)=>({
                    url:'registration',
                    body:user,
                    method:'POST',
                    credentials:"include",
                    mode:'cors'

            })
        })
})
})

export const {useLoginMutation, useRegistrationMutation} = authApi;