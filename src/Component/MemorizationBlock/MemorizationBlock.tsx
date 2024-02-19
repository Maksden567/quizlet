import styles from './MemorizationBlock.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import {Navigation} from 'swiper/modules';
import { Swiper as SwiperType } from 'swiper';
import { FC, useRef, useState } from 'react';
import { ICartBlock } from '../CardBlock/ICartBlock';
import './MemorizationBlock.css'

// Import Swiper styles
import 'swiper/css';
import 'swiper/less/navigation';
import MemorizationItemKnowen from '../../Ui/MemorizationItemKnowen/MemorizationItemKnowen';
import { ICardItem } from '../../Ui/CardItem/ICardItem';
import MemorizationItemTest from '../../Ui/MemorizationItemTest/MemorizationItemTest';
import MemorizationItemInput from '../../Ui/MemorizationItemInput/MemorizationItemInput';





const MemorizationBlock:FC<ICartBlock> = ({items}) => {

    const swiperRef = useRef<SwiperType>();

   

    const [unKnowenItems,setUnKnowenItems] = useState<ICardItem[]>([])
    
    console.log(unKnowenItems)

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

    {items.map((item, index) => (
      <SwiperSlide className={styles.swiperSlide} key={index} virtualIndex={index}><MemorizationItemKnowen setUnKnowenItems={setUnKnowenItems} unKnowenItems={unKnowenItems} swiperRef = {swiperRef} audioUrl={item.audioUrl} isSelect={item.isSelect} text={item.text} translateTitle={item.translateTitle} imgUrl={item.imgUrl}/></SwiperSlide> 
      ))}
    {unKnowenItems.map((item, index) => (
      <div>
      <SwiperSlide className={styles.swiperSlide} key={index} virtualIndex={index}><MemorizationItemTest setUnKnowenItems={setUnKnowenItems} unKnowenItems={unKnowenItems} swiperRef = {swiperRef} audioUrl={item.audioUrl} isSelect={item.isSelect} text={item.text} translateTitle={item.translateTitle} imgUrl={item.imgUrl}/></SwiperSlide> 
      <SwiperSlide className={styles.swiperSlide} key={index} virtualIndex={index}><MemorizationItemInput setUnKnowenItems={setUnKnowenItems} unKnowenItems={unKnowenItems} swiperRef = {swiperRef} audioUrl={item.audioUrl} isSelect={item.isSelect} text={item.text} translateTitle={item.translateTitle} imgUrl={item.imgUrl}/></SwiperSlide> 
      </div>
    
    ))}

    </Swiper>
        </div>

<div className={styles.buttons}>

</div>

</>

    )

}
export default MemorizationBlock