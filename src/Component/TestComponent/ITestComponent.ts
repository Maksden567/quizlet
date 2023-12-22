import { ICardItem } from "../../Ui/CardItem/ICardItem"

export interface ITestComponent{
    items:ICardItem[]
    title:string
    testTitle:string
    setRightAnswers(answers:string[]):void
}