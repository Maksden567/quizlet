import { useEffect } from "react";
import GamesItems from "../../Component/GamesItems/GamesItems";
import Header from "../../Component/Header/Header";
import SliderImagesWord from "../../Component/SliderImagesWord/SliderImagesWord"
import WordItems from "../../Component/WordItems/WordItems";
import { useGetOneLibraryQuery, useGetWordsQuery } from "../../store/rtk/useWord";
import GamePage from "../GamePage/GamePage";
import { useParams } from "react-router-dom";


type JobPageRouteParams=  {
    id: string
}

const WordPage = ()=>{

    const {id=''} = useParams()

    const {data} = useGetOneLibraryQuery(id);
    const {data:wordData=[]} = useGetWordsQuery(id)

   
 
    
    return (
        <>
        <Header/>
        
        {data?<SliderImagesWord name={data.name}/>:null}
        <WordItems words={wordData}/>
        <GamesItems/>
        </>
        

    )
}

export default WordPage;