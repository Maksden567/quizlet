import styles from './LoginPage.module.scss'
import HeaderLoginPage from "../../Component/HeaderLoginPage/HeaderLoginPage"
import userPhoto from '../../assets/userPhoto.png'
import AuthBlock from '../../Component/AuthBlock/AuthBlock'
import AccontDontHave from '../../Ui/AccontDontHave/AccontDontHave'

const LoginPage = ()=>{
    return (
        <div>
           <HeaderLoginPage/>
            <div className={styles.titleBlock}>
            <h1 className={styles.loginTitle}>УВІЙТИ </h1>
           <img className={styles.img} src={userPhoto} alt="" />
          
        </div>
           <AuthBlock/>
           
        </div>
    )
}

export default LoginPage;