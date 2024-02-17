import styles from './AccontDontHave.module.scss'


const AccontDontHave = ()=>{

    return (
        <div className={styles.accontBLock}>
            <div className={styles.accontBLockWrapper}>
                <p className={styles.accont}>Немаєте свого обілокого запису? <div>Тоді мерщій <a href="#">реєструватися</a></div> </p>
            </div>
            
        </div>
    )


}
export default AccontDontHave;