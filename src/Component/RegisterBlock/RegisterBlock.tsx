import { useEffect, useState } from "react"
import InputUser from "../../Ui/InputUser/InputUser"
import styles from './RegisterBlock.module.scss'


const RegisterBlock = ()=>{

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [userName,setUserName] = useState('')
    

    const auth = ()=>{
        console.log(email,password,userName)
    }

    return <div className={styles.inputBlocks}>

        <InputUser title='ЕЛЕКТРОННА АДРЕСА' placeholder="Введіть електрону адресу або введіть імя користувача" setEmail={setEmail}/>
        <InputUser title='ІМЯ КОРИСТУВАЧВ' placeholder="Введіть нікнейм користувача" setUserName={setUserName}/>
        <InputUser title='ПАРОЛЬ' placeholder="Введіть пароль від свого облікового запису" setPassword={setPassword}/>
        <div className={styles.isAccount}>
            <p>Маєш акаунт, мерщій <a href="#"> заходь</a></p>
            <button className={styles.loginBtn} onClick={auth}> ЗАРЕЄСТРУВАТИСЯ</button>
        </div>
        
    </div>
}
export default RegisterBlock