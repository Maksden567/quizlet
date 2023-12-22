import {useState} from 'react'
import styles from './WordItems.module.scss'
import WordItem from "../../Ui/WordItem/WordItem"
import { IWordItem } from '../../Ui/WordItem/IWordItem'
import ReactPaginate from 'react-paginate'


const WordItems = ()=>{

   const [activePage,setActivePage] = useState(1);
    
    const wordsItems:IWordItem[] = [
        {
            img:'https://media.istockphoto.com/id/1446885495/photo/happy-kiss-and-hug-on-mothers-day-in-living-room-sofa-love-and-relaxing-together-in-australia.jpg?b=1&s=170667a&w=0&k=20&c=geJOzt9H-fH3IVTTlBxEMu0mLIEJQswvLuONhaDLsOU=',
            title:"Mother",
            translate:"Мама",
            audio:"https://firebasestorage.googleapis.com/v0/b/dashka-71be6.appspot.com/o/assets%2Fa66d4e55-de5a-4121-bf0d-d0107c9dcd74?alt=media&token=d5826a73-1004-416f-aefc-1ebde67a691f"
        },
        {
            img:'https://media.istockphoto.com/id/1446885495/photo/happy-kiss-and-hug-on-mothers-day-in-living-room-sofa-love-and-relaxing-together-in-australia.jpg?b=1&s=170667a&w=0&k=20&c=geJOzt9H-fH3IVTTlBxEMu0mLIEJQswvLuONhaDLsOU=',
            title:"Mother",
            translate:"Мама",
            audio:"https://firebasestorage.googleapis.com/v0/b/dashka-71be6.appspot.com/o/assets%2Fa66d4e55-de5a-4121-bf0d-d0107c9dcd74?alt=media&token=d5826a73-1004-416f-aefc-1ebde67a691f"
        },
        {
            img:'https://media.istockphoto.com/id/1446885495/photo/happy-kiss-and-hug-on-mothers-day-in-living-room-sofa-love-and-relaxing-together-in-australia.jpg?b=1&s=170667a&w=0&k=20&c=geJOzt9H-fH3IVTTlBxEMu0mLIEJQswvLuONhaDLsOU=',
            title:"Mother",
            translate:"Мама",
            audio:"https://firebasestorage.googleapis.com/v0/b/dashka-71be6.appspot.com/o/assets%2Fa66d4e55-de5a-4121-bf0d-d0107c9dcd74?alt=media&token=d5826a73-1004-416f-aefc-1ebde67a691f"
        },
        {
            img:'https://media.istockphoto.com/id/1446885495/photo/happy-kiss-and-hug-on-mothers-day-in-living-room-sofa-love-and-relaxing-together-in-australia.jpg?b=1&s=170667a&w=0&k=20&c=geJOzt9H-fH3IVTTlBxEMu0mLIEJQswvLuONhaDLsOU=',
            title:"Mother",
            translate:"Мама",
            audio:"https://firebasestorage.googleapis.com/v0/b/dashka-71be6.appspot.com/o/assets%2Fa66d4e55-de5a-4121-bf0d-d0107c9dcd74?alt=media&token=d5826a73-1004-416f-aefc-1ebde67a691f"
        },
        
        {
            img:'https://hips.hearstapps.com/hmg-prod/images/father-son-quotes-1619064384.jpg',
            title:"Father",
            translate:"Тато",
            audio:"https://firebasestorage.googleapis.com/v0/b/dashka-71be6.appspot.com/o/assets%2Fa66d4e55-de5a-4121-bf0d-d0107c9dcd74?alt=media&token=d5826a73-1004-416f-aefc-1ebde67a691f"
        },
        {
            img:'https://www.verywellfamily.com/thmb/5PDiZlnYqquCJEmdLhPYjXecvV8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/460708267-56afae915f9b58b7d01bcc19.jpg',
            title:"GrandMother",
            translate:"Бабуля",
            audio:"https://firebasestorage.googleapis.com/v0/b/dashka-71be6.appspot.com/o/assets%2Fa66d4e55-de5a-4121-bf0d-d0107c9dcd74?alt=media&token=d5826a73-1004-416f-aefc-1ebde67a691f"
        }
    ]
   
    const [items,setItems]= useState<IWordItem[]>(wordsItems)

    const handlePageClick = (event:any )=>{
        console.log(
            `User requested page number ${event.selected}}`
          );
          setActivePage(event.selected)
         
    }
   
    return (

        <div className={styles.wordsBlock}>
            <h1 className={styles.titleWords }>ТВОЇ СЛОВА</h1>
            <div className={styles.wordItems}> 
               {items.map(item=><WordItem img={item.img} title={item.title} translate={item.translate} audio={item.audio}/>)} 
            </div>
           <ReactPaginate 
           breakLabel="..."
           nextLabel=">"
           pageClassName={styles.pageActive}
           activeClassName={styles.active}
           onPageChange={handlePageClick}
           pageRangeDisplayed={1}
           pageCount={Math.ceil(wordsItems.length/6)}
           previousLabel="<"
           renderOnZeroPageCount={null}
           
           />
        </div>
    )
}

export default WordItems;

