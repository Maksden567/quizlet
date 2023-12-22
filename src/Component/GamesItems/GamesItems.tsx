import CartOfGame from "../../Ui/CartOfGame/CartOfGame"
import { ICardItemOfGame } from "../../Ui/CartOfGame/ICartItemOfGame"
import cardsImage from '../../assets/cards.png'
import reLearning from '../../assets/reLeaning.png'
import testImage from '../../assets/test.png'
import eachOtherImg from '../../assets/eachOtherImg.png'
import styles from './GamesItems.module.scss'


const GamesItems = ()=>{

    const cartOfGamesItems:ICardItemOfGame[] = [

        {
            img:cardsImage,
            title:"КАРТКИ",
            subtitle:"Повторити терміни та визначення"
        },
        {
            img:reLearning,
            title:"ЗАУЧУВАННЯ",
            subtitle:"Зосередьтеся на вивченні, використовуючи індивідуальну програму"
        },
        {
            img:testImage,
            title:"ТЕСТ",
            subtitle:"Пройти пробний тест"
        },
        {
            img:eachOtherImg,
            title:"ПІДБІР",
            subtitle:"Зіставлення слів для їх кращого запамятовування"
        }
    ]

    return (

        <div className={styles.gamesItems}>
            {
                cartOfGamesItems.map(item=><CartOfGame img={item.img} subtitle={item.subtitle} title={item.title}/>)
            }
        </div>
    )
}

export default GamesItems;