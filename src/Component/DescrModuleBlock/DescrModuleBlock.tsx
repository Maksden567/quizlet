
import { FC,useEffect } from 'react'
import fileImg from '../../assets/imgFile.png'
import styles from './DescrModuleBlock.module.scss'
import { IDescrModule } from './IDescrModule'



const DescrModuleBlock:FC<IDescrModule> = ({isFinishCreate,setName,setFile,nameModule}) => {





    const ChangeName = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setName(e.target.value)
    }

    

    const ChangeDescr = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setDescr(e.target.value)
    }

    const ChangeFile = (e:React.ChangeEvent<HTMLInputElement>)=>{
        if(!e.target.files) return

        else
            if(setFile)setFile(e.target.files[0])
            
        
        
    }
    useEffect(()=>{
        if(isFinishCreate&&setFile){
            setFile(null)
        }
    },[isFinishCreate])
    




    return (
        <div className={styles.descrModuleWrapper}>
            <div className={styles.nameBlock}>
                <input type="text" className={styles.nameModule} placeholder='Впишіть назву модуля,наприклад(fruit,vegetables,cars,computers)' onChange={(e)=>ChangeName(e)} />
                <input type="file" className={styles.imgFile} id='file' onChange={(e)=>ChangeFile(e)} />

                <label htmlFor="file">
                    <div className={styles.fileBlock}>
                        <img src={fileImg} alt="" />
                    </div>
                    
                    </label>
            </div>


            <div className={styles.descrBlock}>
                <input type="text"  className={styles.createDescr} placeholder='Додати опис...' onChange={(e)=>ChangeDescr(e)} />
            </div>
        </div>
    )
}
