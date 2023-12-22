import { FC } from 'react'
import styles from './InputUser.module.scss'
import { IInputUser } from './IInputUser'


const InputUser:FC<IInputUser> = ({title,placeholder,setEmail,setPassword,setUserName})=>{

   
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        if(title?.includes('ЕЛЕКТРОННА')&&setEmail){setEmail(e.target.value)}
        if(title?.includes('ПАРОЛЬ')&&setPassword){setPassword(e.target.value)}
        if(title?.includes('КОРИСТУВАЧ')&&setUserName){setUserName(e.target.value)}
    }

    return (
        <div className={styles.inputBlock}>
            <h2 className={styles.inputTitle}>{title}</h2>
            <input type="email" className={styles.input} placeholder={placeholder} onChange={(e)=>handleChange(e)} />
        </div>
    )
}

export default InputUser