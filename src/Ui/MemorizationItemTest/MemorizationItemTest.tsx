import { FC, useEffect, useRef, useState } from 'react'
import stylesMemorization from './MemorizationItemTest.module.scss'
import styles from '../CardItem/CardItem.module.scss'
import { ICardItem } from '../CardItem/ICardItem'
import selectIcon from '../../assets/selectedIcon.png'
import selectedIcon from '../../assets/selectIcon.png'
import audioIcon from '../../assets/audioIcon.png'
import classNames from 'classnames'
import { selectRandomElements, shuffleArray } from '../../Component/MemorizationBlock/services'

const  MemorizationItemTest:FC<ICardItem> = ({isTrueValue,audioUrl,isSelect,allElements,id,text,translateTitle,imgUrl,setIsTrue,setItemId,swiperRef,isTestComponent,unKnowenItems,setUnKnowenItems}) => {

    
    const audioElement = useRef<HTMLAudioElement>(null)
    const [isAnswer,setIsAnswer] = useState(false)
    const [activeIndex,setActiveIndex]=useState<number>(0);
    const [arrChoice,setArrChoice]=useState<string[]>()
    const [rightIndex,setRightAnswer] = useState<number|null>(null)
    const [negativeIndex,setNegativeIndex]=useState<number|null>(null)

    const handleClick = () =>{
        setActiveIndex(0)
        setRightAnswer(null)
        setIsAnswer(false)
        if(setItemId){
          setItemId(null)
        }
       
        swiperRef?.current?.slideNext()   
    }

    useEffect(()=>{
      console.log(1)
      const item = allElements.find(el=>el.translateName==translateTitle)
      if(item){
        let mass = selectRandomElements(allElements,3,item.translateName)
        mass.push(item.translateName)
        mass = shuffleArray(mass)
        setRightAnswer(mass.indexOf(item.translateName))
        setArrChoice(mass)
      }
      


    },[allElements])
   

    const handleAnswer = (answer:boolean) =>{


      if(setIsAnswer && setIsTrue && setItemId && setUnKnowenItems){


        setIsAnswer(answer)  
        if(rightIndex!=activeIndex){  
            setNegativeIndex(activeIndex)
            setIsTrue(false)
            setItemId(id)
            setUnKnowenItems([...unKnowenItems as ICardItem[],{id,allElements,audioUrl,isSelect,text,translateTitle,imgUrl,isTrueValue,setIsTrue,setItemId,setUnKnowenItems,swiperRef,unKnowenItems}])
        }

        else{
          setItemId(id)
          setIsTrue(true)
        }

      }

            
    }

    


    const continueFun = (indexNum:number)=>{
      setActiveIndex(indexNum)
    }

    

  return (
    <>
    <div className={styles.card}>
    <div className={styles.cardItemFront}>
    <div className={styles.headerItem}>
        <div className={styles.selectIcon}>{isSelect?<img src={selectedIcon} alt="" />:<img src={selectIcon} alt="" />}</div>
       <div className={styles.audioIcon} onClick={()=>audioElement.current?.play()} ><img src={audioIcon} alt="" /></div>
     </div>
    <div className={imgUrl?stylesMemorization.Textblock:stylesMemorization.TextblockFlex}>
        <div className={styles.cardItemTitle}>
            <p>{text}</p>
        </div> 
        {imgUrl?<div className={stylesMemorization.imageBlock}>
            <img src={imgUrl} alt="" />
        </div>:null}
    </div>

    <div className={imgUrl?stylesMemorization.buttons:stylesMemorization.buttonsCenter}>
      <div className={stylesMemorization.textSelected}>Виберіть правильну відповідь</div>
      <div className={stylesMemorization.answers}>

        {arrChoice?.map((item,index)=>(
           negativeIndex==null && !isAnswer?<button className={activeIndex==index?stylesMemorization.MemorizationItemTestButtonActive:stylesMemorization.MemorizationItemTestButton} onClick={()=>continueFun(index)}>{item}</button>:
           <button className={classNames(rightIndex==index?stylesMemorization.MemorizationItemTestButtonRight:stylesMemorization.MemorizationItemTestButton,negativeIndex==index?stylesMemorization.MemorizationItemTestButtonNegative:stylesMemorization.MemorizationItemTestButton)}>{item}</button> 
        ))}
      

      </div>
    </div>
    </div>
    <audio ref={audioElement} src={audioUrl}></audio>
    {!isTestComponent?<div>{!isAnswer?<button className={stylesMemorization.button} onClick={() =>handleAnswer(true)} >Відповісти</button>:<button className={stylesMemorization.button} onClick={() =>handleClick()} >Далі</button>}</div>:null}
   
    </div>
    
    </>
  )
}

export default MemorizationItemTest