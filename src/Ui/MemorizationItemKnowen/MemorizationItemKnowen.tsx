import { FC, useEffect, useRef, useState } from 'react'
import stylesMemorization from './MemorizationItemKnowen.module.scss'
import styles from '../CardItem/CardItem.module.scss'
import { ICardItem } from '../CardItem/ICardItem'
import selectIcon from '../../assets/selectedIcon.png'
import selectedIcon from '../../assets/selectIcon.png'
import audioIcon from '../../assets/audioIcon.png'

const  MemorizationItemKnowen:FC<ICardItem> = ({id,audioUrl,isSelect,text,translateTitle,imgUrl,swiperRef,allElements,unKnowenItems,setUnKnowenItems,isTrueValue,setIsTrue,setItemId}) => {

    
    const audioElement = useRef<HTMLAudioElement>(null)
    const [isKnowen,setKnowen] = useState<boolean|null>(true)
    const [isAnswer,setIsAnswer] = useState(false)


    const handleClick = () =>{
        swiperRef?.current?.slideNext()
        handleAnswer(false)
    }

    const handleAnswer = (answer:boolean) =>{
        if(setUnKnowenItems){
            setIsAnswer(answer)
            if(isKnowen==false){
                setUnKnowenItems([...unKnowenItems as ICardItem[],{id,allElements,audioUrl,isSelect,text,translateTitle,imgUrl,isTrueValue,setIsTrue,setItemId,setUnKnowenItems,swiperRef,unKnowenItems}])
                setKnowen(null)
            }
        }
    }


  return (
    <>
    <div className={styles.card}>
    <div className={styles.cardItemFront}>
    <div className={styles.headerItem}>
        <div className={styles.selectIcon}>{isSelect?<img src={selectedIcon} alt="" />:<img src={selectIcon} alt="" />}</div>
       <div className={styles.audioIcon} onClick={()=>audioElement.current?.play()} ><img src={audioIcon} alt="" /></div>
     </div>
    <div className={imgUrl?styles.Textblock:styles.TextblockFlex}>
        <div className={styles.cardItemTitle}>
            <p>{text}</p>
        </div> 
        {imgUrl?<div className={styles.imageBlock}>
            <img src={imgUrl} alt="" />
        </div>:null}
    </div>

    <div className={imgUrl?stylesMemorization.buttons:stylesMemorization.buttonsCenter}>
      
            <button  className={!isKnowen?stylesMemorization.MemorizationItemKnowenButton:stylesMemorization.MemorizationItemKnowenButtonActive} onClick={()=>setKnowen(true)}> <div>1</div> Знаю</button>
            <button className={isKnowen?stylesMemorization.MemorizationItemKnowenButton:stylesMemorization.MemorizationItemKnowenButtonActive}  onClick={()=>setKnowen(false)}> <div>2</div> Незнаю</button>
    </div>
    </div>
    <audio ref={audioElement} src={audioUrl}></audio>
    {!isAnswer?<button className={stylesMemorization.button} onClick={() =>handleAnswer(true)} >Відповісти</button>:<button className={stylesMemorization.button} onClick={() =>handleClick()} >Далі</button>}
    </div>
    
    </>
  )
}

export default MemorizationItemKnowen