import styles from './CreateWord.module.scss'
import fileImg from '../../assets/imgFile.png'
import deletePhoto from '../../assets/Rectangle 113.png'
import { IWordImg } from './IWordImg'
import { FC, useRef } from 'react'
import { ICreateWord } from '../../Pages/CreateModule/ICreateWord'

const CreateWordImg:FC<IWordImg> = ({count,setImg,setIndex,words,setWords,setTitle,setTranslate})=>{


    const inputRef = useRef<HTMLInputElement | null>(null);

    const changeFile = (e:React.ChangeEvent<HTMLInputElement>)=>{
        console.log(1)
        if(e.target.files){
            setImg(e.target.files[0])
            count?setIndex(count):null
            console.log(e.target.files[0])
        }
        
    }
    const handleLabelClick = () => {
        // Викликати click() на input
        if (inputRef.current) {
          inputRef.current.click();
        }
      };

      const deleteWord = ()=>{
        console.log(count)
        let newWords:ICreateWord[]=[...words]
        console.log(newWords)
        
        if(newWords.length-1!=count&&count!=0){
            
            setTitle(newWords[count+1].title)
            setTranslate(newWords[count+1].translate)
        }
        else if(count == newWords.length-1){
            setTitle('')
            setTranslate('')
        }
        else{
           
            setTitle(newWords[newWords.length-1].title)
            setTranslate(newWords[newWords.length-1].translate)
        }
        

        if(count||count==0){
           newWords.splice(count,1)
          
        }
        
        
        console.log(newWords)
        setIndex(count)
        setWords([...newWords])
      }

    return (
        <div className={styles.addImg}>
            <h4>{count?count+1:null||1}</h4>
            <div>
                <input type="file" id='file' className={styles.input}  ref={inputRef} onChange={(e)=>changeFile(e)} />
            <label  onClick={handleLabelClick}>
                    <img src={fileImg} alt="" className={styles.photo} />
            </label>
           
            <img className={styles.photoDelete} onClick={deleteWord} src={deletePhoto} alt="" />
           
            </div>
            
        </div>
    )
}

export default CreateWordImg