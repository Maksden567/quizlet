import React, { useRef, useState } from "react";
import { FC } from "react";
import { IWordItem} from './IWordItem'
import styles from './WordItem.module.scss'
import soundImg from '../../assets/sound.png'
import starActive from '../../assets/star.png'
import logo from "../../assets/logo.png"
import favouriteImg from '../../assets/favourite.png'


const WordItem:FC<IWordItem> = (word) => {
    
    const audioElement = useRef<HTMLAudioElement>(null)
    const [isFavourite,setIsFavourite] = useState(false)

    const handleClick = ()=>{
        setIsFavourite(!isFavourite)
    }



    return (
       <div className={styles.wordItem}>
            <div className={styles.wordItemWrapper}>
                <div className={styles.wordTextWithImage}>
                    <img src={word.img} className={styles.wordImage} alt="" />
                  
                </div>
              
                    
                  <div className={styles.blockActivities}>
                    <div className={styles.blockSound}>
                        <button  onClick={()=>{audioElement.current?.play()}}  className={`${styles.button} ${styles.buttonSound}`}>
                            <img src={soundImg} alt="" />
                        </button>
                       
                        <button className={`${styles.button} ${styles.favourite}`} onClick={handleClick}>
                            {isFavourite?<img className={styles.star} src={starActive} alt="" />:<img className={styles.star} src={favouriteImg} alt="" />}
                        </button>
                    </div>
                    <h2 className={styles.wordTitleAndTranslate}>{word.title} - {word.translate}</h2>
                    <div className={styles.logo}>
                         <div className={styles.logoItem}>
                        
                        <img src={logo} alt="" />
                    </div>    
                        </div>
                   
               
                </div>
                

            </div>
            <audio ref={audioElement} src={word.audio} ></audio>
       </div>
    )
}

export default WordItem