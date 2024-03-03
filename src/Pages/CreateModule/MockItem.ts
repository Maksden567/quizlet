import { ICreateWord } from "./ICreateWord";


export const word = (index:number) => {
    return {
        id:index,
        img:null,
        title:'',
        translate:'',
        music:''
    }
    
}

