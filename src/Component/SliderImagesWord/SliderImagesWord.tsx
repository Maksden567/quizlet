
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import styles from './SliderImages.module.scss'


// import required modules
import { Pagination } from 'swiper/modules';

 function SliderImagesWord() {

    const arr:string[] = [
        "https://southernenglishcollege.nsw.edu.au/wp-content/uploads/2023/02/english-british-england-language-education-concept-min-scaled.jpg",
        "https://www.northwestcareercollege.edu/wp-content/uploads/2022/05/learn-english-.jpg",
        "https://bnu.edu.iq/sites/default/files/2019-08/bnu%20english.jpg"]


  return (
    <>
    <h1 className={styles.titleModule}>English</h1>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className={styles.mySwiper}
      >
       {arr.map(item=> <div  className={styles.sliderImg}><SwiperSlide><img src={item} alt="" /></SwiperSlide></div>)}
      </Swiper>
    </>
  );
}

export default SliderImagesWord;