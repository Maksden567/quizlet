import React, { FC, useEffect, useState } from 'react';
import styles from './Term.module.scss'
import { ITerm } from './ITerm';
import { transform } from 'typescript';

const Term:FC<ITerm> = ({name,setTitle,setTranslate,setIndex,count,title})=>{

  
   
    const changeWord = (e:React.ChangeEvent<HTMLInputElement>)=>{   
       
        if(name.includes('Термін')&&setTitle) {setTitle(e.target.value)}
        if(name.includes('Перев')&&setTranslate) {setTranslate(e.target.value)}
        count?setIndex(count):null
        
    }


    return (
        <div className={styles.term}>
            <input type="text" className={styles.termInput}  value={title} onChange={e=>changeWord(e)} />
            <div className={styles.blockTermTitle}>
                <h6>{name}</h6>
                <button className={styles.selectLangauge}>Вибрать мову</button>
            </div>
        </div>
    )
}

export default Term;