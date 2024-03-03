import { useEffect, useState } from 'react';
import DescrModuleBlock from '../../Component/DescrModuleBlock/DescrModuleBlock';
import Header from '../../Component/Header/Header';
import styles from './CreateModule.module.scss'
import CreateWordItem from '../../Component/CreateWordItem/CreateWordItem';
import { ICreateWord } from './ICreateWord';
import {word} from './MockItem'
import { useCreateModuleMutation, useCreateWordMutation, useTranslateWordMutation, useUploadPhotoMutation } from '../../store/rtk/useModule';


const CreateModule = ()=>{

    const [nameModule,setNameModule] = useState('') 
    const [errorMessage,setErrorMessage] = useState('') 
    const [words,setWords] = useState<ICreateWord[]>([word(0),word(1),word(2)])
    const [isFinishCreate,setIsFinishCreate]=useState(false)
    const [file,setFile]=useState(null)
    const [isSetWords,setIsSetWords]=useState(false)
    const [uploadPhoto,{data:imgUrl}] = useUploadPhotoMutation()
    const [createModuleAsync,{data:moduledata,isError,error}] = useCreateModuleMutation()
    const [translateFunction]= useTranslateWordMutation()
    const [createWord]= useCreateWordMutation()



    const createModule = ()=>{
       
        createModuleAsync({name:nameModule,img:imgUrl})
    }

   
    


    useEffect(()=>{ 
        if(file){
            var data = new FormData()
            data.append('file', file)
            uploadPhoto(data)         
        }    
    },[file])


 



    useEffect(()=>{
       
        if(moduledata){
            console.log(moduledata.id)
           const PromiseWords =  words.map(async(item)=>{
            if(item.translate!=''){
               const res= await translateFunction(item.translate)
                item.music=res.data
                return item
                
            }
        })

        Promise.all(PromiseWords).then((updateWords)=>{
           updateWords.map(item=>{
            if(item){
                console.log(item)
                createWord({word:item,id:moduledata.id})
            }
           
           })
        })
        
       
    }
    },[isSetWords,moduledata])
 

 



    return  (
        <div className={styles.createModulePage}>
             {isFinishCreate&&!isError?<div className={styles.alert}>
                        <span className={styles.message}>Ваш модуль успішно створено</span>
                        <span className={styles.icon}>&#10004;</span>
                 </div>:null}
            {isFinishCreate&&error ?<div className={styles.alertNegative}>
                        <span className={styles.messageNegative}>{errorMessage}</span>
                        
                 </div>:null}
            <div className={styles.createModuleWrapper}>
               
                <div className={styles.titleBlock}>
                    <h1 className={styles.createTitle}>Створення модуля</h1>
                    <button className={styles.createModuleButton} onClick={createModule} >Створити</button>
                </div>
                
                <DescrModuleBlock isFinishCreate={isFinishCreate} setName={setNameModule} nameModule={nameModule}  setFile={setFile} />
                <div className={styles.createWordTitle}>
                    <h1 className={styles.createTitle}>Створити терміни</h1>
                </div>
                <div className={styles.itemsWords}>
                 
                    {words.map((item, index) =>{
                        item.id=index
                        console.log(index,item.id)
                        return <CreateWordItem isSetWords={isSetWords} setWords={setWords} setIsSetWords={setIsSetWords} words={words} itemId={item.id} key={index} />
                        
                    })} 
                    <button className={styles.addTerm} onClick={()=>
                        
                        setWords([...words,word(words.length)])}>Додати ще один термін</button>
                    
                </div>

               
                
            </div>
            
        </div>
    )
}

export default CreateModule;