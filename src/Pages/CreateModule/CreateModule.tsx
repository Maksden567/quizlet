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
    const [words,setWords] = useState<ICreateWord[]>([word,word,word])
    let newWords:ICreateWord[] = [];
    const [isFinishCreate,setIsFinishCreate]=useState(false)
    const [file,setFile]=useState(null)
    const [uploadPhoto,{data:imgUrl}] = useUploadPhotoMutation()
    const [createModuleAsync,{data:moduledata,isError,error}] = useCreateModuleMutation()
    const [createWord]=useCreateWordMutation();
    const [translateWord] = useTranslateWordMutation()
    const [dataUrlmass,setDataUrlMass]=useState<any[]>()



    const createModule = ()=>{
        createModuleAsync({name:nameModule,img:imgUrl}).then(res=>{
            if(res.error&& 'data' in res.error){
                    let errorMessage:any = res.error.data
                    setErrorMessage(errorMessage.value)
                
            }
        })
        if(error!=undefined && 'data' in error){
            let errorMessage:any = error.data
            setErrorMessage(errorMessage.value)
        }
        setNameModule('')
        setIsFinishCreate(true)
        setTimeout(()=>{
            setIsFinishCreate(false)
        },2000)
    }
    useEffect(()=>{
        
        if(file){
            var data = new FormData()
            data.append('file', file)
            uploadPhoto(data)         
        }
       
    },[file])

    useEffect(()=>{
       newWords.map(item=>{
        translateWord(item.title).then(res => {
            if (res.data) {
                setDataUrlMass((prevDatareMass) => [...(prevDatareMass || []), res.data]);
            }
          });
        })
    },[moduledata])


   useEffect(()=>{
    
    if(dataUrlmass?.length==newWords.length){
        newWords.forEach((item,index)=>{
          item.music=dataUrlmass[index]
        })
    }

    if(dataUrlmass?.length==newWords.length){
        const id = moduledata.id
        newWords.map(item=>(
            createWord({word:item,id})

        ))
    
    }
  

   },[dataUrlmass])
 
   

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
                        const newItem = { ...item, id: index };
                        newWords.push(newItem);
                        return <CreateWordItem setWords={setWords} isFinishCreate={isFinishCreate} words={newWords} count = {index} item={newItem} key={index} />
                        
                        })} 
                    <button className={styles.addTerm} onClick={()=>
                        
                        setWords([...words,word])}>Додати ще один термін</button>
                    
                </div>

               
                
            </div>
            
        </div>
    )
}

export default CreateModule;