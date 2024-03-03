import { ICreateWord } from "../../Pages/CreateModule/ICreateWord";
import { IWordItem } from "../../Ui/WordItem/IWordItem";

export interface ICreateWordItem {
    itemId:number,
    words:ICreateWord[]
    setWords(words:ICreateWord[]):void,
    setIsSetWords(isSetWords:boolean):void,
    isSetWords:boolean
}