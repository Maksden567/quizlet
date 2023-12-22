import { useEffect, useState } from "react"
import InputUser from "../../Ui/InputUser/InputUser"
import styles from './AuthBlock.module.scss'


const AuthBlock = ()=>{

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    

    const auth = ()=>{
        console.log(email,password)
    }

    return <div className={styles.inputBlocks}>

        <InputUser title='ЕЛЕКТРОННА АДРЕСА' placeholder="Введіть електрону адресу або введіть імя користувача" setEmail={setEmail}/>
        <InputUser title='ПАРОЛЬ' placeholder="Введіть пароль від свого облікового запису" setPassword={setPassword}/>
        <button className={styles.loginBtn} onClick={auth}> УВІЙТИ</button>
    </div>
}
export default AuthBlock