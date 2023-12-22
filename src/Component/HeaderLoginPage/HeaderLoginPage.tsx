import styles from './HeaderLoginPAge.module.scss'
import logo from '../../assets/logo.png'
import google from '../../assets/google.png'

const HeaderLoginPage = () =>{
    return (
        <div className={styles.headerLogin}>
            <img src={logo} alt="" />
            <img src={google} alt="" />
        </div>
    )
}

export default HeaderLoginPage;