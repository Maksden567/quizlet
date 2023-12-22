import styles from './Logo.module.scss'
import logo from '../../assets/logo.png'

function Logo() {


  return (
    <>
   <div className={styles.logo}>
        <img src={logo} alt="" />
   </div>
      
    </>
  )
}

export default Logo
