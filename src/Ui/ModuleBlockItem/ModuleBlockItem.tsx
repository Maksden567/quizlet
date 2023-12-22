import { FC } from 'react'
import styles from './ModuleBlockItem.module.scss'
import { IModuleBlockItem } from './IModuleBlockItem'


const  ModuleBlockItem:FC<IModuleBlockItem> = ({imgUrl,countOfWords,date,title}) => {


  return (
    <>
   <div className={styles.moduleBlockItem}>
      

    <div className={styles.moduleBlockItemImage}><img src={imgUrl} alt="" /></div>
    <div className={styles.moduleBlockItemDescr}>
        <div className={styles.moduleBlockItemTitle}><h1>{title}</h1></div>
        <div className={styles.moduleBlockItemCount}>Кількість: {countOfWords} слів</div>
        <button className={styles.moduleBlockItemButton}>Вивчати</button>
        <div className={styles.moduleBlockItemDate}><div>{date}</div></div>
    </div>
   </div>
      
    </>
  )
}

export default ModuleBlockItem