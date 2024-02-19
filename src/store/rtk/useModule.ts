import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


interface IModule  {
    name: string
    img?:string
    id:number
}

interface IWord {
    title:string,
    translate:string,
    img:string|null,
    music:string
    
}
interface IArgWord{
    word:IWord,
    id:number
}

export const moduleApi = createApi({
    reducerPath: 'moduleApi',
    tagTypes:["Post"],
    baseQuery: fetchBaseQuery({ baseUrl: 'https://localhost:5001'}),
    endpoints: (builder) => ({

        getLibraries: builder.query<IModule[]|string, void>({
            query: () => ({
                url: 'getLibraries',
                method: 'GET',
                credentials: "include",
                mode: 'cors',
               
            }),
            providesTags: ['Post'],
        }),
        uploadPhoto: builder.mutation<string, FormData>({
        
            query: (file) => ({
                url: 'uploadPhoto',
                method: 'POST',
                body:file,
                credentials: "include",
                mode: 'cors',
                

            })

        }),

        createModule: builder.mutation<any, IModule>({
        
            query: (file) => ({
                url: 'createLibraries',
                method: 'POST',
                body:file,
                credentials: "include",
                mode: 'cors',
                

            })

        }),
        translateWord: builder.mutation<string, string>({
        
            query: (musicString) => ({
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
                body:word,
                credentials: "include",
                mode: 'cors',
              
            })

        }),

        deleteWord: builder.mutation<string, number>({
        
            query: (id) => ({
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