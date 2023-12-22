import AuthBlock from "../../Component/AuthBlock/AuthBlock"
import HeaderLoginPage from "../../Component/HeaderLoginPage/HeaderLoginPage"
import AccontDontHave from "../../Ui/AccontDontHave/AccontDontHave"
import styles from './RegisterPage.module.scss'
import userPhoto from '../../assets/userPhoto.png'
import RegisterBlock from "../../Component/RegisterBlock/RegisterBlock"


const RegisterPage = ()=>{

    return (
        <div className={styles.registerPage}>
        <HeaderLoginPage/>
         <div className={styles.titleBlock}>
         <h1 className={styles.loginTitle}>ЗАРЕЄСТРУВАТИСЯ </h1>
        <img className={styles.img} src={userPhoto} alt="" />
       
     </div>
     
        <RegisterBlock/>
        
     </div>
    )
}

export default RegisterPage