import telegramBlockBack from '../../assets/telegramBg.png'
import addPhoto from '../../assets/addBgToTelegramBg.png'
import styles from './TelegramBlockLink.module.scss'
import telegramBtn from '../../assets/telegramLink.png'
import fingerImg from '../../assets/finger.png'


const TelegramBlockLink = () => {

    return (

        <div className={styles.telegramBlock}>
             <img src={telegramBlockBack} className={styles.background} alt="" />
            <img src={addPhoto} className={styles.photoCorner} alt="" />

            <div className={styles.generalTelegramInformation}>
                {window.innerWidth>1024? <p>
                Поглиблюйте своє вивчення мов разом з нашим Telegram ботом! 🚀✨ Отримайте щоденні картки з новими словами, цікавими фактами та захоплюючими завданнями просто у чаті. 🗣️🌍 Навчайтеся гравцеві та занурюйтеся в світ мовного навчання, де б ви не були. 🌐📚 Долучайтеся зараз і робіть своє вивчення ще захопливішим!
                </p>:null}

                {window.innerWidth>850&&window.innerWidth<1024? <p>
                Поглиблюйте своє вивчення мов разом з нашим Telegram ботом! 🚀✨ Отримайте щоденні картки з новими словами, цікавими фактами та захоплюючими завданнями просто у чаті. 🗣️🌍</p>:null}
               {window.innerWidth>620?
                <button className={styles.telegramBtn}>
                Перейти у TELEGRAM-BOT
                </button>:<div className={styles.telegramBtnImg}>
                    <img className={styles.imgBtn} src= {telegramBtn} />
                    <div className={styles.fingerBlock}>
                    <p className={styles.fingerDescr}>Тисни і мерщій до телеграму</p> 
                       <img className={styles.fingerImg} src= {fingerImg} />
                       
                    </div>
                    
                    </div>}

            </div>
        </div>
    )

}
export default TelegramBlockLink