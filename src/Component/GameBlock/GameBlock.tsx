import GameItem from '../../Ui/GameItem/GameItem'
import styles from './GameBlock.module.scss'

const GameBlock = () => {

    return (

        <div className={styles.gameBlock}>
            
            <div className={styles.GameBlockTitle}><h1>Гра співвідношень</h1></div>
            <div className={styles.GameBlockWrapper}>
            <div className={styles.GameBlockItems}>
                <GameItem isTranslate={false} title='APPLE'/>
                <GameItem isTranslate={true} title='ЯБЛУКО'/>
                <GameItem isTranslate={true} title='ПОЛУНИЦЯ'/>
                <GameItem isTranslate={false} title='AVOCADO'/>
                <GameItem isTranslate={true} title='ВИШНЯ'/>
                <GameItem isTranslate={false} title='CHERY'/>
                <GameItem isTranslate={true} title='АВОКАДО'/>
                <GameItem isTranslate={false} title='FIG'/>
                <GameItem isTranslate={false} title='BANANA'/>
                <GameItem isTranslate={true} title='ІНЖИР'/>
                <GameItem isTranslate={false} title='STRAWBERRY'/>
                <GameItem isTranslate={true} title='БАНАН'/>
            </div>
            </div>
        </div>
    )

}
export default GameBlock