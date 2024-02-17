import { FC } from 'react'
import styles from './ResultBlock.module.scss'
import { IResultBlock } from './IResultBlock'


const ResultBlock:FC<IResultBlock> = ({countOfItems,countOfRightAnswer})=>{
    return (
        <div className={styles.resultBlock}>
            <div className={styles.resultTitle}>
                <h1>ВАШ РЕЗУЛЬТАТ:</h1>
            </div>
            <div className={styles.answersWrapper}>
            <div className={styles.answers}>
                <div className={styles.procent}>{Math.round((3/11)*100)}%</div>
                <div className={styles.count}>
                    <div className={`${styles.answerBlock } ${styles.rightAnswer}`}><div className={`${styles.answer } ${styles.rightAnswer}`}>Правильні </div><span>{countOfRightAnswer}</span>
                    </div> 
                    <div className={`${styles.answerBlock } ${styles.negativeAnswer}`}>
                        <div className={`${styles.answer } ${styles.negativeAnswer}`}>Неправильні </div><span>{countOfItems-countOfRightAnswer}</span>
                    </div>   
                    
                </div>
            </div>
            </div>
           
        </div>
    )
}

export default ResultBlock