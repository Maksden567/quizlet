import { ICreateWord } from "../../Pages/CreateModule/ICreateWord";
import { IWordItem } from "../WordItem/IWordItem";

export interface IWordImg {
    itemId:number
    words:ICreateWord[],
    setImg(file:any):void,
    setWords(words:ICreateWord[]):void,
    setTitle(title:string):void
    setTranslate(translate:string):void
}