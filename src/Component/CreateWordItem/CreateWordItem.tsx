import { FC, useEffect, useState } from 'react'
import CreateWordImg from '../../Ui/CreateWordImg/CreateWordImg'
import Term from '../../Ui/Term/Term'
import styles from './CreateWordItem.module.scss'
import { ICreateWordItem } from './ICreateWordItem'
import { word } from '../../Pages/CreateModule/MockItem'
import { useUploadPhotoMutation } from '../../store/rtk/useModule'

const CreateWordItem:FC<ICreateWordItem> = ({itemId,words,setWords,setIsSetWords,isSetWords}) => {

    const [title,setTitle]= useState('')
    const [img,setImg]= useState(null)
    const [imgUrl,setImgUrl]= useState('')
    const [translate,setTranslate]= useState('')
    const [uploadPhoto] = useUploadPhotoMutation()



    useEffect(()=>{
        console.log(itemId)
        if(img){
            var data = new FormData()
            data.append('file', img)
         
            uploadPhoto(data).then(res=>setImgUrl(res.data))    
        } 
    },[img])



    useEffect(()=>{
    
        
        
       if(translate!=''||title!=''){

        let item =  words.find(el=>el.id==itemId)
    
        if(item){
            item.title=title
            item.translate=translate
            
            words.splice(itemId,1,item)
        
            setIsSetWords(!isSetWords)
            setWords(words)
        }
       
       }
       

      

    },[title,translate])


    useEffect(()=>{
        
        if(imgUrl!=''){
            let item =  words.find(el=>el.id==itemId)
           
            if(item){    
                item.img=imgUrl
                console.log(item)
                words.splice(itemId,1,item)
                setIsSetWords(!isSetWords)
                setWords(words)
            }
           }
          
    },[imgUrl])

    
    
   
   

  
    return (
        <div className={styles.createWordItem}>
            <CreateWordImg words={words} setImg={setImg} setTranslate={setTranslate} setTitle={setTitle}  setWords={setWords} itemId={itemId} />
            <div className={styles.termBlock} >
                <Term  value={title} setValue={setTitle}  name='Термін'/>
                <Term  value={translate} setValue={setTranslate}  name='Перевод.'/>
            </div>
        </div>
    )

}
export default CreateWordItem

