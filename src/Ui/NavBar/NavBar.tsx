import styles from './NavBar.module.scss'
import { Link } from 'react-router-dom'

function NavBar() {


  return (
    <>
   <div className={styles.navBar}>
        <nav>
            <ul className={styles.menu}>
                <li className={styles.menuItem}><Link className={styles.menuLink} to={'/'}>Головна
                </Link></li>
                <li className={styles.menuItem}><Link className={styles.menuLink} to={'/modules'}>Мої модулі
                </Link></li>
            </ul>
        </nav>
   </div>
      
    </>
  )
}

export default NavBar
