import Header from '../../Component/Header/Header.tsx'
import styles from './MemorizationPage.module.scss'
import MemorizationBlock from '../../Component/MemorizationBlock/MemorizationBlock.tsx'
import { ICardItem } from '../../Ui/CardItem/ICardItem.ts'
import { useParams } from 'react-router-dom'



function  MemorizationPage  () {


    const {id} = useParams()

  

  return (

 <>
 <div className={styles.memorizationBlock}>
 <MemorizationBlock id={id?id:''}/>
    
</div>
 
 </>
  )
}

export default MemorizationPage