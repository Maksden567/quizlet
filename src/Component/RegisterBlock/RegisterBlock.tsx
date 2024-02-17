import { useEffect, useState } from "react"
import InputUser from "../../Ui/InputUser/InputUser"
import styles from './RegisterBlock.module.scss'
import { useRegistrationMutation } from "../../store/rtk/useAuth"


const RegisterBlock = ()=>{

    const [username,setUsername] = useState('')
    const [errorMessage,setErrorMessage] = useState<any>()
    const [password,setPassword] = useState('')
    const [registration,{isError,error}] = useRegistrationMutation();

    const auth = ()=>{
        registration({username,password})
       
    }
    useEffect(()=>{
        if(error!=undefined && 'data' in error){
            let errorMessage:any = error.data
            setErrorMessage(errorMessage.value)
        }
        
    },[error])

    return <div className={styles.inputBlocks}>

        <InputUser title='ЕЛЕКТРОННА АДРЕСА' placeholder="Введіть електрону адресу або введіть імя користувача" setEmail={setUsername}/>
        <InputUser title='ПАРОЛЬ' placeholder="Введіть пароль від свого облікового запису" setPassword={setPassword}/>
        {isError?<div className={styles.nonAuth}>{errorMessage}</div>:<div></div>}
        <div className={styles.isAccount}>
            <p>Маєш акаунт, мерщій <a href="#"> заходь</a></p>
            <button className={styles.loginBtn} onClick={auth}> ЗАРЕЄСТРУВАТИСЯ</button>
        </div>
        
    </div>
}
export default RegisterBlock