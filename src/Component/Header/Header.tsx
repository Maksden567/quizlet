import AuthButtons from "../../Ui/AuthButton/AuthButton";
import Logo from "../../Ui/Logo/Logo";
import NavBar from "../../Ui/NavBar/NavBar";
import SearchItem from "../../Ui/SearchItem/SearchItem";
import styles from './Header.module.scss'



function  Header  () {
  return (

    <div className={styles.header}>
        <Logo/>
        <NavBar/>
        <SearchItem/>
        <AuthButtons/>
    </div>
  )
}

export default Header