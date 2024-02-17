import { useEffect, useState } from "react"
import InputUser from "../../Ui/InputUser/InputUser"
import styles from './AuthBlock.module.scss'
import AccontDontHave from "../../Ui/AccontDontHave/AccontDontHave"


const AuthBlock = ()=>{

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    

    const auth = ()=>{
        console.log(email,password)
    }

    return <div className={styles.inputBlocks}>
        <div className={styles.wrapper}>
        <InputUser title='ЕЛЕКТРОННА АДРЕСА' placeholder="Введіть електрону адресу або введіть імя користувача" setEmail={setEmail}/>
        <InputUser title='ПАРОЛЬ' placeholder="Введіть пароль від свого облікового запису" setPassword={setPassword}/>
        <div className={styles.blockAdd}>
        <AccontDontHave/>
        <button className={styles.loginBtn} onClick={auth}> УВІЙТИ</button>
      
        </div>
    
        </div>
    
    </div>
}
export default AuthBlock