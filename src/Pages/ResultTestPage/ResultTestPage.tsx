import { useState } from "react";
import Header from "../../Component/Header/Header";
import ResultBlock from "../../Component/ResultBlock/ResultBlock";
import TestComponent from "../../Component/TestComponent/TestComponent";
import { ICardItem } from "../../Ui/CardItem/ICardItem";
import testResultImg from '../../assets/testResult.png'
import styles from './ResultTestPage.module.scss'

const ResultTestPage = () => {

    const [rightAnswers,setRightAnswers]=useState<string[]>([])

    const items:ICardItem[]=[
        {
            audioUrl:"https://firebasestorage.googleapis.com/v0/b/dashka-71be6.appspot.com/o/assets%2Fa66d4e55-de5a-4121-bf0d-d0107c9dcd74?alt=media&token=d5826a73-1004-416f-aefc-1ebde67a691f",
            isSelect:true,
            text:"зелене",
            translateTitle:"asjcnascnas",
            imgUrl:"https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg"
            
        
        },
        {
            audioUrl:"https://firebasestorage.googleapis.com/v0/b/dashka-71be6.appspot.com/o/assets%2Fa66d4e55-de5a-4121-bf0d-d0107c9dcd74?alt=media&token=d5826a73-1004-416f-aefc-1ebde67a691f",
            isSelect:false,
            text:"зелене",
            translateTitle:"asjcnascnas",
            imgUrl:"https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg"
        },
        {
            audioUrl:"https://firebasestorage.googleapis.com/v0/b/dashka-71be6.appspot.com/o/assets%2Fa66d4e55-de5a-4121-bf0d-d0107c9dcd74?alt=media&token=d5826a73-1004-416f-aefc-1ebde67a691f",
            isSelect:false,
            text:"xthdjyt",
            translateTitle:"asjcnascnas",
        },
        {
            audioUrl:"https://firebasestorage.googleapis.com/v0/b/dashka-71be6.appspot.com/o/assets%2Fa66d4e55-de5a-4121-bf0d-d0107c9dcd74?alt=media&token=d5826a73-1004-416f-aefc-1ebde67a691f",
            isSelect:false,
            text:"xthdjyt",
            translateTitle:"asjcnascnas",
        }



    ]
    return (
        <div>
      

        <div className={styles.titleBlock}>
            <img src={testResultImg} alt="" />
            <h1>ВИ ПРОЙШЛИ ТЕСТ</h1>
        </div>
        <div className={styles.wrapper}>
        <ResultBlock countOfRightAnswer={2} countOfItems={items.length}/>
        </div>
   
        <TestComponent items={items} title='Fruit' setRightAnswers={setRightAnswers} testTitle="Ваші відповіді" />
        </div>
    )
}

export default ResultTestPage;