
// Import Swiper styles
import 'swiper/css';
import 'swiper/less/navigation';
import CardItem from '../../Ui/CardItem/CardItem'
import styles from './CardBlock.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import {Navigation} from 'swiper/modules';
import { Swiper as SwiperType } from 'swiper';
import arrowRight from '../../assets/arrow-right.png'
import arrowleft from '../../assets/arrow-left.png'
import { FC, useRef } from 'react';
import { ICartBlock } from './ICartBlock';
// Import Swiper styles
import 'swiper/css';
import 'swiper/less/navigation';




const CardBlock:FC<ICartBlock> = ({items}) => {


    const swiperRef = useRef<SwiperType>();

    return (
<>

<div className={styles.cardBlock}>
            <Swiper
           modules={[Navigation]}
           spaceBetween={50}
           slidesPerView={1}
           className={styles.swiper}
           onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
    >

    {items.map((item, index) => (
      <SwiperSlide key={index} virtualIndex={index}><CardItem audioUrl={item.audioUrl} isSelect={item.isSelect} text={item.text} translateTitle={item.translateTitle} imgUrl={item.imgUrl}/></SwiperSlide>
      ))}
    </Swiper>
        </div>

<div className={styles.buttons}>
<button className={styles.button} onClick={() => swiperRef.current?.slidePrev()}><img src={arrowleft} /></button>
<button className={styles.button} onClick={() => swiperRef.current?.slideNext()}><img src={arrowRight} /></button>
</div>

</>

    )

}
export default CardBlock