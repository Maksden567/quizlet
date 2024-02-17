

import { ICardItem } from "./ICardItem"
import { FC, useState,useRef } from "react"
import styles from './CardItem.module.scss'
import selectIcon from '../../assets/selectedIcon.png'
import selectedIcon from '../../assets/selectIcon.png'
import audioIcon from '../../assets/audioIcon.png'


const CardItem:FC<ICardItem> = ({audioUrl,isSelect,text,translateTitle,imgUrl}) => {


    const [isFront,setFront]=useState<boolean>(true)
    const audioElement = useRef<HTMLAudioElement>(null)

  return (
    <>
    <div className={styles.card}>
    <div className={isFront?styles.cardItemFront:styles.cardItemFrontActive} onClick={()=>setFront(!isFront)}>
    <div className={styles.headerItem}>
        <div className={styles.selectIcon}>{isSelect?<img src={selectedIcon} alt="" />:<img src={selectIcon} alt="" />}</div>
       <div className={styles.audioIcon} onClick={()=>audioElement.current?.play()} ><img src={audioIcon} alt="" /></div>
     </div>
        <div className={imgUrl?styles.Textblock:styles.TextblockFlex}  >
        <div className={styles.cardItemTitle}>
            <p>{text}</p>
        </div> 
        {imgUrl?<div className={styles.imageBlock}>
            <img src={imgUrl} alt="" />
        </div>:null}
        </div>

 
    </div>
    <div className={!isFront?styles.cardItemBack:styles.cardItemBackActive} onClick={()=>setFront(!isFront)}>
    <div  className={styles.headerItem}>
        <div className={styles.selectIcon}>{isSelect?<img src={selectedIcon} alt="" />:<img src={selectIcon} alt="" />}</div>
       <div className={styles.audioIcon} onClick={()=>{audioElement.current?.play()}} ><img src={audioIcon} alt="" /></div>
     </div>
    <div className={imgUrl?styles.Textblock:styles.TextblockFlex}  >
        <div className={styles.cardItemTitle}>
            <p>{translateTitle}</p>
        </div> 
        {imgUrl?<div className={styles.imageBlock}>
            <img src={imgUrl} alt="" />
        </div>:null}
        
        </div>
       
       

  
    </div>

    <audio ref={audioElement} src={audioUrl}></audio>
    </div>
    
    </>
  )
}

export default CardItem
