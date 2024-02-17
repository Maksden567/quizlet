import { ICreateWord } from "../../Pages/CreateModule/ICreateWord";
import { IWordItem } from "../../Ui/WordItem/IWordItem";

export interface ICreateWordItem {
    item:ICreateWord,
    words:ICreateWord[]
    isFinishCreate:boolean
    count:number,
    setWords(words:ICreateWord[]):void,
  
   
}