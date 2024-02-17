import AdvantagerItem from '../../Ui/AdvantagerItem/AdvantagerItem.tsx'
import styles from './AdvantagesBlock.module.scss'



function  AdvantagesBlock  () {
  return (

    <div className={styles.advantagesBlock}>
         <div className={styles.advantagesBlockWrapper}>
        <div className={styles.advantagesTitle}><h1>Поговоримо про наші переваги</h1></div>
        <div className={styles.advantagersItems}>
        <AdvantagerItem reverse={false} imgUrl='https://fs02.vseosvita.ua/02014nsg-4004-779x446.jpg' title='Навчання за захопленням' subtitle='Ви не лише вивчаєте слова, але і дізнаєтеся цікаві факти та події. Навчайтеся, граючи та долучайте цікаві події до свого словникового запасу.' />
      <AdvantagerItem reverse={true} imgUrl='https://devisu.ua/uploads/articles/Flexible-working-hours.jpg' title='Гнучкий Графік' subtitle='Навчайтеся у будь-який зручний для вас час. Quizo пристосовується до вашого темпу та розкладу.' />
      <AdvantagerItem reverse={false} imgUrl='https://uploads.cdn.miyklas.com.ua/upload/news/2021/09/zmishane.png' title='Інноваційний Підхід' subtitle='Використовуйте передові технології для вивчення мов. Наша програма поєднує картки, картинки та голосового помічника для максимально ефективного навчання.' />
        </div>
     
      </div>
    </div>
  )
}

export default AdvantagesBlock