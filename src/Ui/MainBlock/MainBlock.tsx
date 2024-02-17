import styles from './MainBlock.module.scss'
import backImage from '../../assets/mainBackground.png'

function MainBlock() {


  return (
    <>
   <div className={styles.moduleBlock}>
     
        <img src={backImage} alt="" />
        <div className={styles.mainBlockTitle}>
            <div className={styles.title}> <h1>Вивчайте мови та дізнавайтесь події за допомогою карток, картинок і голосового помічника в нашій унікальній програмі!</h1></div>
            <div className={styles.paragraph}> <p>Розкрийте світ мов разом із PolyGlotHub - вашим вірним супутником у подорожі навчання. Долайте бар'єри мов та освоюйте нові знання, отримуючи максимум задоволення від процесу. Ваша ключова до скарбниці різноманітності та культурного обміну чекає на вас – долучайтеся до нашого захоплюючого світу!</p></div>
            <button className={styles.mainButton}>Зареєструватися</button>
        </div>
   </div>
      
    </>
  )
}

export default MainBlock
