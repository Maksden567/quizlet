import styles from './AuthButton.module.scss'


function AuthButtons() {


  return (
    <>
   <div className={styles.authButtons}>
       <button className={styles.buttonLogin}>Увійти</button>
       <button className={styles.buttonRegister}>Зареєструватися</button>
   </div>
      
    </>
  )
}

export default AuthButtons
