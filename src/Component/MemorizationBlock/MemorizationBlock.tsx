import styles from './MemorizationBlock.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import {Navigation} from 'swiper/modules';
import { Swiper as SwiperType } from 'swiper';
import { FC, useEffect, useRef, useState } from 'react';
import { ICartBlock } from '../CardBlock/ICartBlock';
import './MemorizationBlock.css'

// Import Swiper styles
import 'swiper/css';
import 'swiper/less/navigation';
import MemorizationItemKnowen from '../../Ui/MemorizationItemKnowen/MemorizationItemKnowen';
import { ICardItem } from '../../Ui/CardItem/ICardItem';
import MemorizationItemTest from '../../Ui/MemorizationItemTest/MemorizationItemTest';
import MemorizationItemInput from '../../Ui/MemorizationItemInput/MemorizationItemInput';
import { IWord, useGetWordsQuery } from '../../store/rtk/useWord';
import { selectRandomElements } from './services';




const MemorizationBlock:FC<ICartBlock> = ({memorizationPageId}) => {

    const swiperRef = useRef<SwiperType>();
    
    const {data:items} = useGetWordsQuery(memorizationPageId)
    const [unKnowenItems,setUnKnowenItems] = useState<ICardItem[]>([])
    
  const [isTrueInput,setIsTrueInput] = useState<boolean>(false)
  const [isTrueTest,setIsTrueTest] = useState<boolean>(false)
  const [itemId,setItemId] = useState<number|null>(null)
    
   
    
   
  useEffect(()=>{
    
   
    if(itemId!=null && unKnowenItems.length-1 == itemId){
      if(isTrueInput && isTrueTest){
        setUnKnowenItems([])
      }
    }
    
    
  },[itemId])


  useEffect(()=>{
   
      console.log(unKnowenItems)


  },[unKnowenItems])

    return (
<>

<div className={styles.memorizationBlock}>
            <Swiper
           modules={[Navigation]}
           spaceBetween={50}
           slidesPerView={1}
           className={styles.swiper}
            allowTouchMove={false}
           onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          
          }}
    >

    {items?.map((item, index) => (
      <SwiperSlide className={styles.swiperSlide} key={index} virtualIndex={index}><MemorizationItemKnowen id={index} setItemId = {setItemId} setIsTrue={setIsTrueInput} isTrueValue={isTrueInput} unKnowenItems={unKnowenItems}  setUnKnowenItems={setUnKnowenItems}  swiperRef = {swiperRef} audioUrl={item.musicUrl} isSelect={item.isKnowen} text={item.nameEnglish} translateTitle={item.translateName} imgUrl={item.imageUrl?item.imageUrl:''} allElements={items}  /></SwiperSlide> 
      ))}
    {unKnowenItems.map((item, index) => (
      
      <div>
      <SwiperSlide className={styles.swiperSlide} key={index}><MemorizationItemTest id={index} setItemId = {setItemId}  setIsTrue={setIsTrueTest} isTrueValue={isTrueTest} setUnKnowenItems={setUnKnowenItems} swiperRef = {swiperRef} audioUrl={item.audioUrl} isSelect={item.isSelect} text={item.text} translateTitle={item.translateTitle} imgUrl={item.imgUrl} allElements={items?items:[]} unKnowenItems={unKnowenItems}/></SwiperSlide> 
      <SwiperSlide className={styles.swiperSlide} key={index} virtualIndex={index}><MemorizationItemInput id={index} setItemId = {setItemId} setIsTrue={setIsTrueInput} isTrueValue={isTrueInput} unKnowenItems={unKnowenItems}  setUnKnowenItems={setUnKnowenItems} swiperRef = {swiperRef} audioUrl={item.audioUrl} isSelect={item.isSelect} text={item.text} translateTitle={item.translateTitle} imgUrl={item.imgUrl} allElements={items?items:[]}/></SwiperSlide> 
      </div>
  
    ))}

    </Swiper>
        </div>



</>

    )

}
export default MemorizationBlock