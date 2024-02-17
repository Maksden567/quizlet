import styles from './AuthButton.module.scss'
import {Link} from 'react-router-dom'

function AuthButtons() {


  return (
    <>
   <div className={styles.authButtons}>
    <Link to={'/login'}>
       <button className={styles.buttonLogin}>Увійти</button>
    </Link>
    <Link to={'/register'}>
      <button className={styles.buttonRegister}>Зареєструватися</button>
    </Link> 
       
   </div>
      
    </>
  )
}

export default AuthButtons
