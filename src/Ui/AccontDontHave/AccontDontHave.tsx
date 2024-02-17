import styles from './AccontDontHave.module.scss'


const AccontDontHave = ()=>{

    return (
        <div className={styles.accontBLock}>
            <div className={styles.accontBLockWrapper}>
                <p className={styles.accont}>Немаєте свого обілокого запису? Тоді мерщій <a href="#">реєструватися</a></p>
            </div>
            
        </div>
    )


}
export default AccontDontHave;