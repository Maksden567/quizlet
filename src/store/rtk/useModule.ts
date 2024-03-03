import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ICreateWord } from '../../Pages/CreateModule/ICreateWord'


export interface IModule  {
id:number
img:string|undefined
name:string
userId:string 
  
}


interface IArgWord{
    word:ICreateWord,
    id:number
}

export const moduleApi = createApi({
    reducerPath: 'moduleApi',
    tagTypes:["Post"],
    baseQuery: fetchBaseQuery({ baseUrl: 'https://localhost:7894'}),
    endpoints: (builder) => ({

        getLibraries: builder.query<IModule[]|string|[], void>({
            query: () => ({
                url: 'getLibraries',
                method: 'GET',
                credentials: "include",
                mode: 'cors',
               
            }),
            providesTags: ['Post'],
        }),
        uploadPhoto: builder.mutation<string, FormData>({
        
            query: (file: any) => ({
                url: 'uploadPhoto',
                method: 'POST',
                body:file,
                credentials: "include",
                mode: 'cors',
                

            })

        }),

        createModule: builder.mutation<any, any>({
        
            query: (file: any) => ({
                url: 'createLibraries',
                method: 'POST',
                body:file,
                credentials: "include",
                mode: 'cors',
                

            })

        }),
        translateWord: builder.mutation<string, string>({
        
            query: (musicString:string) => ({
                url: 'translateVoice',
                method: 'POST',
                body:musicString,
                credentials: "include",
                mode: 'cors',
              
            })

        }),
        createWord: builder.mutation<string, IArgWord>({
        
            query: ({word,id}) => ({
                url: `liabries/${id}/createWord`,
                method: 'POST',
                body:{NameEnglish:word.title,TranslateName:word.translate,imageUrl:word.img,musicUrl:word.music},
                credentials: "include",
                mode: 'cors',
              
            })

        }),

        deleteWord: builder.mutation<string, number>({
        
            query: (id:number) => ({
                url: `deleteOneLibraries/${id}`,
                method: 'DELETE',
                credentials: "include",
                mode: 'cors',
               
            }),
            invalidatesTags: ['Post']
        }),
    })
})

export const { useGetLibrariesQuery,useUploadPhotoMutation,useCreateModuleMutation,useTranslateWordMutation,useCreateWordMutation,useDeleteWordMutation } = moduleApi;