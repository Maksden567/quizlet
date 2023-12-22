
import styles from './TestComponent.module.scss'
import MemorizationItemTest from '../../Ui/MemorizationItemTest/MemorizationItemTest'
import { ICardItem } from '../../Ui/CardItem/ICardItem'
import { FC, useState } from 'react'
import { ITestComponent } from './ITestComponent'



const TestComponent:FC<ITestComponent> = ({title,items,testTitle,setRightAnswers}) => {

    const [count,setCount] = useState(0)
    const [answers,setAnswers]=useState<string[]>([])

   

    const handleClick=()=>{
        const rightAnswers:string[]=[];
         items.map(item=>{
            answers.map(answer=>{
                if(items.indexOf(item)==answers.indexOf(answer)){
                    if(item.translateTitle==answer){
                        rightAnswers.push(answer) 
                    }
                }
            })
        })

        setRightAnswers({...rightAnswers})
        
    }
    
    return (

        <>
        <div className={styles.titleBlock}>
            {testTitle}
            <span>{title}</span>
        </div>
        <div className={styles.itemsBlock}>
        <div className={styles.items}>
        {items.map((item,index)=><MemorizationItemTest answers={answers} index={index} setAnswers={setAnswers}  isTestComponent={true} audioUrl={item.audioUrl} isSelect={item.isSelect} text={item.text} translateTitle={item.translateTitle} imgUrl={item.imgUrl} />)}
        </div>
        <div className={styles.buttonBlock}><button className={styles.button} onClick={handleClick}>Отправити тест</button></div>
        </div>
       

      
         
        </>
    )

}
export default TestComponent