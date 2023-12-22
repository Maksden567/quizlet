import { ICreateWord } from "../../Pages/CreateModule/ICreateWord";

export interface ITerm {
    name:string,
    title:string,
   
    count:number|null,
    setIndex(index:number):void
    setTitle?(title:string):void
    setTranslate?(translate:string):void
    
}