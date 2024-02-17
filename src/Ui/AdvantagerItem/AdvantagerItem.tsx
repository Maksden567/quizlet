import styles from './AdvantagerItem.module.scss'
import {FC} from 'react'
import { IAdvantagerItem } from './IAdvantagerItem'




const  AdvantagerItem:FC<IAdvantagerItem> = ({imgUrl,title,subtitle,reverse=false}) => {


  return (
    <>
   <div className={reverse?styles.advantagerItemReverse:styles.advantagerItem}>
    <div className={styles.advantagerItemBlock} >
        <div className={styles.advantagerItemTitle}><h1>{title}</h1></div>
        <div className={styles.advantagerItemSubTitle}><p>{subtitle}</p></div>
        <button className={styles.advantagerItemButton}>Почати</button>
    </div>
    <div className={styles.advantagerItemImage}>  
    <img src={imgUrl} alt="" />
    </div>
     

   </div>
      
    </>
  )
}

export default AdvantagerItem