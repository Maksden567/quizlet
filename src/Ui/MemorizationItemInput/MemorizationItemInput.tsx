import { FC, useEffect, useRef, useState } from 'react'
import stylesMemorization from '../MemorizationItemTest/MemorizationItemTest.module.scss'
import styles from '../CardItem/CardItem.module.scss'
import stylesItem from './MemorizationItemInput.module.scss'
import { ICardItem } from '../CardItem/ICardItem'
import selectIcon from '../../assets/selectedIcon.png'
import selectedIcon from '../../assets/selectIcon.png'
import audioIcon from '../../assets/audioIcon.png'

const  MemorizationItemTest:FC<ICardItem> = ({audioUrl,isSelect,text,translateTitle,imgUrl,swiperRef,allElements,id,isTrueValue,setIsTrue,setItemId,setUnKnowenItems,unKnowenItems}) => {

    
    const audioElement = useRef<HTMLAudioElement>(null)
    const [isAnswer,setAnswer] = useState(false)
    const [inputText,setInputText] = useState('')
    const [isIncorectAnswer,setIsIncorectAnswer] = useState<boolean|null>(false)
    const [isEmpty,setIsEmpty] = useState<boolean|null>(null)
  

    const handleClick = () =>{
       
        if(setItemId && setIsTrue){

            setAnswer(false)
            setItemId(null)
            swiperRef?.current?.slideNext()  
            setIsTrue(false)
        }
 
        
    }

    const handleAnswer = (answer:boolean) =>{


        if(setItemId && setIsTrue && setUnKnowenItems && unKnowenItems) {
            if(isEmpty==null){
                setIsEmpty(true)
            }
          
            if(!isEmpty && isEmpty!=null){
                setAnswer(answer)  
            if(inputText!==translateTitle){
                setIsIncorectAnswer(true)
                setItemId(id)
                setIsTrue(false)
                if(unKnowenItems[unKnowenItems.length-1].id!=id){
                    setUnKnowenItems([...unKnowenItems as ICardItem[],{id,allElements,audioUrl,isSelect,text,translateTitle,imgUrl,isTrueValue,setIsTrue,setItemId,setUnKnowenItems,swiperRef,unKnowenItems}])
                }
                
            }

            else{
                setItemId(id)
                setIsTrue(true)
            }

            }
        }

           
            
    }



    const handleInput=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setInputText(e.target.value)
        if(e.target.value==''){
            setIsEmpty(true)
        }else{
            setIsEmpty(false)
        }
       
    }


   

  return (
    <>
    <div className={styles.card}>
    <div className={stylesItem.cardItemFront}>
    <div className={styles.headerItem}>
        <div className={styles.selectIcon}>{isSelect?<img src={selectedIcon} alt="" />:<img src={selectIcon} alt="" />}</div>
       <div className={styles.audioIcon} onClick={()=>audioElement.current?.play()} ><img src={audioIcon} alt="" /></div>
     </div>
    <div className={imgUrl?stylesItem.Textblock:stylesItem.TextblockFlex}>
        <div className={styles.cardItemTitle}>
            <p>{text}</p>
        </div> 
        {imgUrl?<div className={stylesItem.imageBlock}>
            <img src={imgUrl} alt="" />
        </div>:null}
    </div>
    {!isAnswer?
    <div className={stylesItem.inputBlock}>
        <div className={stylesItem.itemSuccses}><h1>Ваша відповідь</h1></div>
        <input type="text" onChange={(e)=>handleInput(e)} placeholder='Ваша відповідь' className={stylesItem.input}/>
        {isEmpty!=null && isEmpty!=false?<div className={stylesItem.emptyLabel}>Введіть значення</div>:null}
        <div className={stylesItem.buttonBlock}>{!isAnswer?<button className={stylesItem.button} onClick={() =>handleAnswer(true)} >Відповісти</button>:<button className={stylesItem.button} onClick={() =>handleClick()} >Далі</button>}</div>
    </div>:
    
    <div className={stylesItem.answers}>

       
        {
            !isEmpty?
            <div>
            <div className={stylesItem.rightAnswer}><h1>{translateTitle}</h1></div>
            {isIncorectAnswer?<div className={stylesItem.incorectAnswer}><h1>{inputText}</h1></div>:null}
          
            </div>:null
        }
       <div className={stylesItem.buttonBlock}>{!isAnswer?<button className={stylesItem.button} onClick={() =>handleAnswer(true)} >Відповісти</button>:<button className={stylesItem.button} onClick={() =>handleClick()} >Далі</button>}</div>
       
    </div>
    
    
    }
   
    </div>
    <audio ref={audioElement} src={audioUrl}></audio>
    
    </div>
    
    </>
  )
}

export default MemorizationItemTest