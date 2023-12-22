import { FC, useEffect, useState } from 'react'
import CreateWordImg from '../../Ui/CreateWordImg/CreateWordImg'
import Term from '../../Ui/Term/Term'
import styles from './CreateWordItem.module.scss'
import { ICreateWordItem } from './ICreateWordItem'
import { word } from '../../Pages/CreateModule/MockItem'

const CreateWordItem:FC<ICreateWordItem> = ({count,item,words,setWords}) => {

    const [number, setIndex] = useState(0)
    const [title,setTitle]= useState('')
    const [img,setImg]= useState(null)
    const [translate,setTranslate]= useState('')

    

    if(item.id==number){
     
        words[number].title = title;
        words[number].translate = translate;
        
        words[number].img=img
    }
   

    

    return (
        <div className={styles.createWordItem}>
            <CreateWordImg words={words} setImg={setImg} setTranslate={setTranslate} setTitle={setTitle}  setWords={setWords} setIndex={setIndex}  count={item.id} />
            <div className={styles.termBlock}>
                <Term setIndex={setIndex} count={item.id} title={words[number].title} setTitle={setTitle}  name='Термін'/>
                <Term setIndex={setIndex} count={item.id} title={words[number].translate} setTranslate={setTranslate}  name='Перевод.'/>
            </div>
        </div>
    )

}

export default CreateWordItem