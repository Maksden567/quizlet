import { useEffect, useState } from "react";
import AuthButtons from "../../Ui/AuthButton/AuthButton";
import Logo from "../../Ui/Logo/Logo";
import NavBar from "../../Ui/NavBar/NavBar";
import SearchItem from "../../Ui/SearchItem/SearchItem";
import styles from './Header.module.scss'
import menuImg from '../../assets/burgerMenu.png'


function  Header  () {

  const [isShow ,setIsShow] = useState(true)

  const changeShow= ()=>{
    setIsShow(!isShow)
  }
  useEffect(()=>{

    if(window.innerWidth<1320){
      setIsShow(false)
    }

  },[])

  return (

    <div>
      
      <button onClick={changeShow} className={styles.menu}><img  src={menuImg} alt="" /></button>
      <div className={isShow?styles.headerBlock:`${styles.hidden}`}>
        
      <div className={styles.header}>
        <Logo/>
        <NavBar/>
        <SearchItem/>
        <AuthButtons/>
    </div></div>
    </div>
    
    
    
  )
}

export default Header