import styles from './TestPage.module.scss'
import Header from '../../Component/Header/Header';
import TestComponent from '../../Component/TestComponent/TestComponent';
import { ICardItem } from '../../Ui/CardItem/ICardItem';


const TestPage = ()=>{

    const items:ICardItem[]=[
        {
            audioUrl:"https://firebasestorage.googleapis.com/v0/b/dashka-71be6.appspot.com/o/assets%2Fa66d4e55-de5a-4121-bf0d-d0107c9dcd74?alt=media&token=d5826a73-1004-416f-aefc-1ebde67a691f",
            isSelect:true,
            text:"зелене",
            translateTitle:"asjcnascnas",
            imgUrl:"https://yt3.googleusercontent.com/ytc/AIf8zZS6XDo-M7dlTyolU_yBAp-cmqn0EfZ8AGkKa9yItg=s900-c-k-c0x00ffffff-no-rj"
            
        
        },
        {
            audioUrl:"https://firebasestorage.googleapis.com/v0/b/dashka-71be6.appspot.com/o/assets%2Fa66d4e55-de5a-4121-bf0d-d0107c9dcd74?alt=media&token=d5826a73-1004-416f-aefc-1ebde67a691f",
            isSelect:false,
            text:"зелене",
            translateTitle:"asjcnascnas",
            imgUrl:"https://www.kraftwerk.at/app/uploads/fly-images/962/reference-img-worlds-of-adventure-park-4-1920x9999.jpg"
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
            imgUrl:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/ba/29/5c/img-worlds-of-adventure.jpg?w=1200&h=1200&s=1",
            text:"xthdjyt",
            translateTitle:"asjcnascnas",
        }



    ]

    return (
        <>
        
        <TestComponent testTitle='TEST' items={items} title='Fruit'/>
        </>
        

    )
}

export default TestPage;