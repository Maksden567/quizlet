
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
import { useGetWordsQuery } from '../../store/rtk/useWord';




const CardBlock:FC<ICartBlock> = ({id}) => {


    const swiperRef = useRef<SwiperType>();
    const {data:items} = useGetWordsQuery(id)
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

    {items?.map((item, index) => (
      <SwiperSlide key={index} virtualIndex={index}><CardItem  allElements={items} id={item.wordId} key={index} isTestComponent={false} swiperRef={swiperRef} audioUrl={item.musicUrl} isSelect={item.isKnowen} text={item.nameEnglish} translateTitle={item.translateName} imgUrl={item.imageUrl?item.imageUrl:'' }/></SwiperSlide>
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