import ModuleBlockItem from '../../Ui/ModuleBlockItem/ModuleBlockItem'
import styles from './ModuleBlock.module.scss'

const ModuleBlock = () => {

    return (

        <div className={styles.moduleBlock}>
            
            <div className={styles.moduleBlockTitle}><h1>Мої модулі</h1></div>
            <div className={styles.moduleBlockWrapper}>
            <div className={styles.moduleBlockItems}>
            <ModuleBlockItem countOfWords={27} date='12.10.2023' imgUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSllBIs0C_rExWTX9cR1RdLnqy7bfgTnZr1pA&usqp=CAU' title='Computer'/>
            <ModuleBlockItem countOfWords={27} date='12.10.2023' imgUrl='https://www.healthyeating.org/images/default-source/home-0.0/nutrition-topics-2.0/general-nutrition-wellness/2-2-2-3foodgroups_fruits_detailfeature.jpg?sfvrsn=64942d53_4' title='Fruit'/>
            <ModuleBlockItem countOfWords={27} date='12.10.2023' imgUrl='https://www.linearity.io/blog/content/images/2023/06/how-to-create-a-car-NewBlogCover.png' title='Car'/>
            <ModuleBlockItem countOfWords={27} date='12.10.2023' imgUrl='https://daily.jstor.org/wp-content/uploads/2023/01/good_times_with_bad_music_1050x700.jpg' title='Music'/>
            <ModuleBlockItem countOfWords={27} date='12.10.2023' imgUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSllBIs0C_rExWTX9cR1RdLnqy7bfgTnZr1pA&usqp=CAU' title='Computer'/>
            <ModuleBlockItem countOfWords={27} date='12.10.2023' imgUrl='https://www.healthyeating.org/images/default-source/home-0.0/nutrition-topics-2.0/general-nutrition-wellness/2-2-2-3foodgroups_fruits_detailfeature.jpg?sfvrsn=64942d53_4' title='Fruit'/>
            <ModuleBlockItem countOfWords={27} date='12.10.2023' imgUrl='https://www.linearity.io/blog/content/images/2023/06/how-to-create-a-car-NewBlogCover.png' title='Car'/>
            <ModuleBlockItem countOfWords={27} date='12.10.2023' imgUrl='https://daily.jstor.org/wp-content/uploads/2023/01/good_times_with_bad_music_1050x700.jpg' title='Music'/>
            
            </div>
            </div>
        </div>
    )

}
export default ModuleBlock