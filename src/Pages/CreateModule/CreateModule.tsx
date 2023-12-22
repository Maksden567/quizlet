import { useState } from 'react';
import DescrModuleBlock from '../../Component/DescrModuleBlock/DescrModuleBlock';
import Header from '../../Component/Header/Header';
import styles from './CreateModule.module.scss'
import CreateWordItem from '../../Component/CreateWordItem/CreateWordItem';
import { ICreateWord } from './ICreateWord';
import {word} from './MockItem'


const CreateModule = ()=>{

    const [nameModule,setNameModule] = useState('')
    const [descrModule,setDescrModule]=useState('')
    const [size,setSize]=useState(3)
    const [words,setWords] = useState<ICreateWord[]>([word,word,word])
    //const words:ICreateWord[]=[word,word,word]
    const newWords:ICreateWord[] = [];
    const [file,setFile]=useState(null)

    const createModule = ()=>{
        console.log(nameModule,descrModule,file, newWords)
    }

    return  (
        <div className={styles.createModulePage}>
             <Header/>
            <div className={styles.createModuleWrapper}>
               
                <div className={styles.titleBlock}>
                    <h1 className={styles.createTitle}>Створення модуля</h1>
                    <button className={styles.createModuleButton} onClick={createModule} >Створити</button>
                </div>
                
                <DescrModuleBlock setName={setNameModule} setDescr={setDescrModule} setFile={setFile} />
                <div className={styles.createWordTitle}>
                    <h1 className={styles.createTitle}>Створити терміни</h1>
                </div>
                <div className={styles.itemsWords}>
                   
                    {words.map((item, index) =>{
                        
                        const newItem = { ...item, id: index };
                        newWords.push(newItem);
                        return <CreateWordItem setWords={setWords} words={newWords} count = {index} item={newItem} key={index} />
                        
                        })} 
                    <button className={styles.addTerm} onClick={()=>
                        
                        setWords([...words,word])}>Додати ще один термін</button>
                    
                </div>

               
                
            </div>
            
        </div>
    )
}

export default CreateModule;