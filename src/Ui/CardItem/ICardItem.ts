import { Swiper as SwiperType } from 'swiper';
import { IWord } from '../../store/rtk/useWord';


export interface ICardItem{
    id:number|null
    isTrueValue?:boolean
    text:string;
    translateTitle:string;
    isSelect:boolean
    audioUrl:string
    swiperRef?: React.MutableRefObject<SwiperType | undefined>
    setUnKnowenItems?(unKnowenItems:ICardItem[]):void
    isTestComponent?:boolean
    imgUrl:string
    unKnowenItems?:ICardItem[]
    allElements:IWord[]
    setItemId?(value:number|null):void
    setIsTrue?(value:boolean):void 
}