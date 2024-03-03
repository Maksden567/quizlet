import { FC } from 'react'
import styles from './ModuleBlockItem.module.scss'
import { IModuleBlockItem } from './IModuleBlockItem'
import editIcon from '../../assets/editIcon.png'
import deleteIcon from '../../assets/deleteIcon.svg'
import { useDeleteWordMutation } from '../../store/rtk/useModule'
import { Link } from 'react-router-dom'
const  ModuleBlockItem:FC<IModuleBlockItem> = ({imgUrl,countOfWords,date,title,id}) => {

  const [deleteModuleAsync] = useDeleteWordMutation()

  const deleteModule=()=>{
    deleteModuleAsync(id)
  }


  return (
    <>
   
    <div className={styles.moduleBlockItem}>
      

    <div className={styles.moduleBlockItemImage}><img src={imgUrl} alt="" /></div>
    <div className={styles.services}>
    <div className={styles.editIcon} ><img src={editIcon} alt="" /></div>
      <div className={styles.deleteIcon} onClick={deleteModule}><img src={deleteIcon} alt="" /></div>
     
    </div>
   
    <div className={styles.moduleBlockItemDescr}>
        <div className={styles.moduleBlockItemTitle}><h1>{title}</h1></div>
        <div className={styles.moduleBlockItemCount}>Кількість: {countOfWords} слів</div>
      <Link to={`${id}`}><button className={styles.moduleBlockItemButton}>Вивчати</button></Link>  
        <div className={styles.moduleBlockItemDate}><div>{date}</div></div>
    </div>
   </div>
      
    </>
  )
}

export default ModuleBlockItem