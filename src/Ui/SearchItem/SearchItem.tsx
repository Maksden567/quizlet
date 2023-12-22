import styles from './SearchItem.module.scss'
import buttonPlusModule from '../../assets/button1.png'
import buttonTelegram  from '../../assets/button2.png'

function SearchItem() {


  return (
    <>
   <div className={styles.searchItem}>
       <div className={styles.inputWrapper}>
        <div className={styles.inputBlock}>
        <input type="text" className={styles.inputSearch} placeholder='Пошук чогось' /></div>
       <button className={styles.button}>
        <img src={buttonPlusModule} alt="" />
       </button>
       <a href='#' className={styles.button}>
        <img src={buttonTelegram} alt="" />
       </a>
   </div>
      </div>
    </>
  )
}

export default SearchItem
