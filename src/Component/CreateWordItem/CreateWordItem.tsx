import { FC, useEffect, useState } from 'react'
import CreateWordImg from '../../Ui/CreateWordImg/CreateWordImg'
import Term from '../../Ui/Term/Term'
import styles from './CreateWordItem.module.scss'
import { ICreateWordItem } from './ICreateWordItem'
import { word } from '../../Pages/CreateModule/MockItem'
import { useUploadPhotoMutation } from '../../store/rtk/useModule'

const CreateWordItem:FC<ICreateWordItem> = ({isFinishCreate,item,words,setWords}) => {

    const [number, setIndex] = useState(0)
    const [title,setTitle]= useState('')
    const [img,setImg]= useState(null)
    const [imgUrl,setImgUrl]= useState('')
    const [translate,setTranslate]= useState('')
    const [uploadPhoto] = useUploadPhotoMutation()


    useEffect(()=>{

        if(img){
            var data = new FormData()
            data.append('file', img)
            uploadPhoto(data).then(res=>setImgUrl(res.data))    
        }

    },[img])


    if(item.id==number){
        
        words[number].title = title;
        words[number].translate = translate;
        words[number].img=imgUrl
    }

    useEffect(()=>{
        if(isFinishCreate){
            setTitle('')
            setTranslate('')
            setImg(null)
    }
    },[isFinishCreate])
    
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

