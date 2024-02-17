import styles from './NavBar.module.scss'


function NavBar() {


  return (
    <>
   <div className={styles.navBar}>
        <nav>
            <ul className={styles.menu}>
                <li className={styles.menuItem}><a className={styles.menuLink} href="#">Головна</a></li>
                <li className={styles.menuItem}><a className={styles.menuLink} href="#">Мої модулі</a></li>
            </ul>
        </nav>
   </div>
      
    </>
  )
}

export default NavBar
