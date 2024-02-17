import telegramBlockBack from '../../assets/telegramBg.png'
import addPhoto from '../../assets/addBgToTelegramBg.png'
import styles from './TelegramBlockLink.module.scss'

const TelegramBlockLink = () => {

    return (

        <div className={styles.telegramBlock}>
             <img src={telegramBlockBack} className={styles.background} alt="" />
            <img src={addPhoto} className={styles.photoCorner} alt="" />

            <div className={styles.generalTelegramInformation}>
                <p>
                Поглиблюйте своє вивчення мов разом з нашим Telegram ботом! 🚀✨ Отримайте щоденні картки з новими словами, цікавими фактами та захоплюючими завданнями просто у чаті. 🗣️🌍 Навчайтеся гравцеві та занурюйтеся в світ мовного навчання, де б ви не були. 🌐📚 Долучайтеся зараз і робіть своє вивчення ще захопливішим!
                </p>
                <button className={styles.telegramBtn}>
                Перейти у TELEGRAM-BOT
                </button>

            </div>
        </div>
    )

}
export default TelegramBlockLink