import Header from '../../Component/Header/Header.tsx'
import styles from './MemorizationPage.module.scss'
import MemorizationBlock from '../../Component/MemorizationBlock/MemorizationBlock.tsx'
import { ICardItem } from '../../Ui/CardItem/ICardItem.ts'



function  MemorizationPage  () {


    const items:ICardItem[]=[
        {
            audioUrl:"https://firebasestorage.googleapis.com/v0/b/dashka-71be6.appspot.com/o/assets%2Fa66d4e55-de5a-4121-bf0d-d0107c9dcd74?alt=media&token=d5826a73-1004-416f-aefc-1ebde67a691f",
            isSelect:true,
            text:"зелене",
            translateTitle:"asjcnascnas",
            imgUrl:"https://firebasestorage.googleapis.com/v0/b/dashka-71be6.appspot.com/o/assets%2Fimage1.jpg?alt=media&token=cfeb8418-be30-4b40-a8da-7a79c98624b4"
            
        
        },
        {
            audioUrl:"https://firebasestorage.googleapis.com/v0/b/dashka-71be6.appspot.com/o/assets%2Fa66d4e55-de5a-4121-bf0d-d0107c9dcd74?alt=media&token=d5826a73-1004-416f-aefc-1ebde67a691f",
            isSelect:false,
            text:"зелене",
            translateTitle:"asjcnascnas",
            imgUrl:"https://firebasestorage.googleapis.com/v0/b/dashka-71be6.appspot.com/o/assets%2Fimage1.jpg?alt=media&token=cfeb8418-be30-4b40-a8da-7a79c98624b4"
        },
        {
            audioUrl:"https://firebasestorage.googleapis.com/v0/b/dashka-71be6.appspot.com/o/assets%2Fa66d4e55-de5a-4121-bf0d-d0107c9dcd74?alt=media&token=d5826a73-1004-416f-aefc-1ebde67a691f",
            isSelect:false,
            text:"xthdjyt",
            translateTitle:"asjcnascnas",
        }
    ]

  return (

 <>
 <div className={styles.memorizationBlock}>
 <MemorizationBlock items={items}/>
    
</div>
 
 </>
  )
}

export default MemorizationPage