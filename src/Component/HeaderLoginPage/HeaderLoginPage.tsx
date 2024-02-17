import styles from './HeaderLoginPAge.module.scss'
import logo from '../../assets/logo.png'
import google from '../../assets/google.png'
import {Link} from 'react-router-dom'

const HeaderLoginPage = () =>{
    return (
        <div className={styles.headerLogin}>
            <Link to={'/'} >
                <img src={logo} alt="" />
            </Link>
            
            <img src={google} alt="" />
        </div>
    )
}

export default HeaderLoginPage;