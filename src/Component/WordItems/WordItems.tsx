import {FC, useEffect, useState} from 'react'
import styles from './WordItems.module.scss'
import WordItem from "../../Ui/WordItem/WordItem"
import { IWordItem } from '../../Ui/WordItem/IWordItem'
import ReactPaginate from 'react-paginate'

import { ICreateWord } from '../../Pages/CreateModule/ICreateWord'
import { IWord, useGetWordsQuery } from '../../store/rtk/useWord'

interface IWordsItems {
    words:IWord[]
}


const WordItems:FC<IWordsItems> = ({words})=>{

   const [activePage,setActivePage] = useState(1);

  
    
 

    const handlePageClick = (event:any )=>{
          setActivePage(event.selected)
         
    }

    
   
    return (
    
        <div className={styles.wordsBlock}>
            <h1 className={styles.titleWords }>ТВОЇ СЛОВА</h1>
            <div className={styles.wordItems}> 
               
               {words.map(item=><WordItem imageUrl={item.imageUrl} isKnowen={item.isKnowen} musicUrl={item.musicUrl} nameEnglish={item.nameEnglish} translateName={item.translateName} wordId={item.wordId}/>)} 
            </div>
           <ReactPaginate 
           breakLabel="..."
           nextLabel=">"
           pageClassName={styles.pageActive}
           activeClassName={styles.active}
           onPageChange={handlePageClick}
           pageRangeDisplayed={1}
           pageCount={Math.ceil(words.length/6)}
           previousLabel="<"
           renderOnZeroPageCount={null}
           
           />
        </div>
    )
}

export default WordItems;

