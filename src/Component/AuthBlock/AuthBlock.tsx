import { useEffect, useState } from "react"
import InputUser from "../../Ui/InputUser/InputUser"
import styles from './AuthBlock.module.scss'
import { useLoginMutation } from "../../store/rtk/useAuth"


const AuthBlock = ()=>{

    const [username,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [login,{data,isError,isLoading}] = useLoginMutation();
    
    useEffect(()=>{
      if(!isError){
        
      }
    },[isLoading])

    const auth = ()=>{
        login({username,password})
      
       
      

    }

    return <div className={styles.inputBlocks}>

        <InputUser title='ЕЛЕКТРОННА АДРЕСА' placeholder="Введіть електрону адресу або введіть імя користувача" setEmail={setEmail}/>
        <InputUser title='ПАРОЛЬ' placeholder="Введіть пароль від свого облікового запису" setPassword={setPassword}/>
        {isError?<div className={styles.nonAuth}>Помилка авторизації</div>:<div></div>}
        <button className={styles.loginBtn} onClick={auth}> УВІЙТИ</button>
    </div>
}
export default AuthBlock