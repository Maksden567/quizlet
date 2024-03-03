import styles from './CreateWord.module.scss'
import fileImg from '../../assets/imgFile.png'
import deletePhoto from '../../assets/Rectangle 113.png'
import { IWordImg } from './IWordImg'
import { FC, useEffect, useRef } from 'react'
import { ICreateWord } from '../../Pages/CreateModule/ICreateWord'

const CreateWordImg:FC<IWordImg> = ({setImg,words,setWords,setTitle,setTranslate,itemId})=>{


    const inputRef = useRef<HTMLInputElement | null>(null);

    const changeFile = (e:React.ChangeEvent<HTMLInputElement>)=>{
      
       if(e.target.files){
            setImg(e.target.files[0])
        }
        
    }
    
   
    const deleteWord=()=>{
       
        setWords(words.filter(item=>item.id!=itemId))
       
    }
    
      

    return (
        <div className={styles.addImg}>
            <h4>{words.findIndex(item=>item.id==itemId)+1}</h4>
            <div>
                
            <input type={"file"}  id={`filePicke${itemId}`}  className={styles.input}  ref={inputRef} onChange={(e)=>changeFile(e)} />
            <label htmlFor={`filePicke${itemId}`}>
                    <img src={fileImg} alt="" className={styles.photo} />
            </label>
                
                
           
            <img className={styles.photoDelete} onClick={deleteWord} src={deletePhoto} alt="" />
           
            </div>
            
        </div>
    )
}

export default CreateWordImg