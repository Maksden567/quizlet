import ModuleBlockItem from '../../Ui/ModuleBlockItem/ModuleBlockItem'
import { useGetLibrariesQuery } from '../../store/rtk/useModule'
import styles from './ModuleBlock.module.scss'
import { useEffect, useState } from 'react'
import errorImg from '../../assets/errorImg.png'

const ModuleBlock = () => {
    const {data} = useGetLibrariesQuery();

    useEffect(()=>{
       
    },[data])

    return (

        <div className={styles.moduleBlock}>
            
            <div className={styles.moduleBlockTitle}><h1>Мої модулі</h1></div>
            <div className={styles.moduleBlockWrapper}>
            <div className={styles.moduleBlockItems}>
            
            {typeof(data)=="string"?
            <div className={styles.errorBlock}>
                <img src={errorImg} alt="" />
                <div className={styles.errorText}>У ВАС НЕ ЗНАЙДЕНО МОДУЛІВ</div>
            </div>:data?.map(item=><ModuleBlockItem  id= {item.id} countOfWords={27} date='12.10.2023' imgUrl={item.img?item.img:'../../assets/errorImg.png'} title={item.name}/>)}
            
           
            
            </div>
            </div>
        </div>
    )

}
export default ModuleBlock