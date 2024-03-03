
import { useParams } from 'react-router-dom'
import CardBlock from '../../Component/CardBlock/CardBlock.tsx'
import Header from '../../Component/Header/Header.tsx'
import { ICardItem } from '../../Ui/CardItem/ICardItem.ts'
import { useGetWordsQuery } from '../../store/rtk/useWord.ts'
import styles from './CardBlockPage.module.scss'



function  CardBlockPage  () {
    const {id} = useParams()
  

  return (

 <>

 <CardBlock id={id?id:''}/>
 
 </>
  )
}

export default CardBlockPage