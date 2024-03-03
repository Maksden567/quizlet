import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IModule } from './useModule';
import { ICreateWord } from '../../Pages/CreateModule/ICreateWord';

export interface IWord {
    wordId:number
    imageUrl:string|null,
    nameEnglish:string,
    translateName:string,
    isKnowen:boolean
    musicUrl:string
}

export const wordApi = createApi({
    reducerPath: 'wordApi',
    
    baseQuery: fetchBaseQuery({ baseUrl: 'https://localhost:7894'}),
    endpoints: (builder) => ({

        getOneLibrary: builder.query<IModule, string>({
            query: (id) => ({
                url: `getOneLibraries/${id}`,
                method: 'GET',
                credentials: "include",
                mode: 'cors',
               
            }),
            
        }),
        getWords: builder.query<IWord[], string>({
            query: (id) => ({
                url: `liabries/${id}/getWords`,
                method: 'GET',
                credentials: "include",
                mode: 'cors',
               
            }),
            
        }),
    })
})

export const { useGetOneLibraryQuery,useGetWordsQuery } = wordApi;