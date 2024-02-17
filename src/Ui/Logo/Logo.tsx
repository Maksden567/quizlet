import styles from './Logo.module.scss'
import logo from '../../assets/logo.png'
import {Link} from 'react-router-dom'

function Logo() {


  return (
    <>
   <div className={styles.logo}>
    <Link to={'/'}>
      <img src={logo} alt=""  />
    </Link>
        
   </div>
      
    </>
  )
}

export default Logo
