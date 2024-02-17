import { Swiper as SwiperType } from 'swiper';


export interface ICardItem{
    text:string;
    translateTitle:string;
    isSelect:boolean
    audioUrl:string
    imgUrl?:string
    swiperRef?: React.MutableRefObject<SwiperType | undefined>
    unKnowenItems?:ICardItem[]
    setUnKnowenItems?(unKnowenItems:ICardItem[]):void
    isTestComponent?:boolean
    setAnswers?(answers:string[]):void,
    answers?:string[]
    index?:number
}