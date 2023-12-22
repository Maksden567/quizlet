import { FC, useEffect, useRef, useState } from 'react'
import stylesMemorization from './MemorizationItemTest.module.scss'
import styles from '../CardItem/CardItem.module.scss'
import { ICardItem } from '../CardItem/ICardItem'
import selectIcon from '../../assets/selectedIcon.png'
import selectedIcon from '../../assets/selectIcon.png'
import audioIcon from '../../assets/audioIcon.png'
import classNames from 'classnames'

const  MemorizationItemTest:FC<ICardItem> = ({audioUrl,isSelect,text,translateTitle,imgUrl,swiperRef,isTestComponent,index=0,answers,setAnswers}) => {

    
    const audioElement = useRef<HTMLAudioElement>(null)
    const [isAnswer,setAnswer] = useState(false)
    const [activeIndex,setActiveIndex]=useState<number>(0);
    const answers1:string[] =["potato","cherry","asjcnascnas","avocado"] 
    const rightIndex = answers1.indexOf(translateTitle)
    const [negativeIndex,setNegativeIndex]=useState<number|null>(null)

    const handleClick = () =>{
        swiperRef?.current?.slideNext()
        handleAnswer(false)
    }

    const handleAnswer = (answer:boolean) =>{
            setAnswer(answer)  
            if(rightIndex!=activeIndex){  
                setNegativeIndex(activeIndex)
            }
    }

    useEffect(()=>{
    if(answers?.length==0){
      answers1.map((item=>{
        answers?.push(answers1[0])
      }))
    }
   


    },[])


    const continueFun = (indexNum:number)=>{
      setActiveIndex(indexNum)
     
      if(answers&&setAnswers){

        answers[index] =answers1[indexNum]
        setAnswers(answers)
       
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

        {answers1.map((item,index)=>(
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