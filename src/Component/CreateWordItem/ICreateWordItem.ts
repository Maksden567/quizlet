import { ICreateWord } from "../../Pages/CreateModule/ICreateWord";
import { IWordItem } from "../../Ui/WordItem/IWordItem";

export interface ICreateWordItem {
    item:ICreateWord,
    words:ICreateWord[],
    count:number,
    setWords(words:ICreateWord[]):void,
  
   
}