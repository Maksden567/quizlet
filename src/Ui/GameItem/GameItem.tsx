import styles from './GameItem.module.scss'
import { IGameItem } from './IGameItem'
import {FC} from 'react'
import classNames from 'classnames'

const GameItem:FC<IGameItem> = ({isTranslate,title}) => {


  return (
    <>
   <button className={classNames(isTranslate?styles.gameItemTranslate:styles.gameItem,styles.gameItemButton) }>
       <h1>{title}</h1>
   </button>
      
    </>
  )
}

export default GameItem
