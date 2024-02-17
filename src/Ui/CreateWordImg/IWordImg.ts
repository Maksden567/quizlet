import { ICreateWord } from "../../Pages/CreateModule/ICreateWord";
import { IWordItem } from "../WordItem/IWordItem";

export interface IWordImg {
    count :number|null,
    words:ICreateWord[],
    setImg(file:any):void,
    setWords(words:ICreateWord[]):void,
    setIndex(number:number):void,
    setTitle(title:string):void
    setTranslate(translate:string):void
}