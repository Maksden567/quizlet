import React, { FC, useEffect, useState } from 'react';
import styles from './Term.module.scss'
import { ITerm } from './ITerm';


const Term:FC<ITerm> = ({value,setValue,name})=>{

  
   
    const changeWord = (e:React.ChangeEvent<HTMLInputElement>)=>{   
       
        setValue(e.target.value)
        
        
    }




    return (
        <div className={styles.term}>
            <input type="text" className={styles.termInput}  value={value} onChange={e=>changeWord(e)} />
            <div className={styles.blockTermTitle}>
                <h6>{name}</h6>
                <button className={styles.selectLangauge}>Вибрать мову</button>
            </div>
        </div>
    )
}

export default Term;