import { FC } from 'react'
import styles from './CartOfGame.module.scss'
import { ICardItemOfGame } from './ICartItemOfGame'


const CartOfGame:FC<ICardItemOfGame> = ({img,subtitle,title})=>{
    return (
        <div className={styles.cartOfGame}>
            <div className={styles.cartOfGameWrapper}>
                <div>
                    <img className={styles.gameImage} src={img} alt="" />
                </div>
                <div>
                    <h2 className={styles.title}>{title}</h2>
                    <p className={styles.subtitle}>{subtitle}</p>
                </div>
            </div>
        </div>
    )
}
export default CartOfGame