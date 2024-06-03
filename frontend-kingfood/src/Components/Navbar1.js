import React from 'react'
import styles from './Navbar1.module.css'

function Navbar1() {
  return (
    <div className={styles.navbar}>
        <div className={styles['navbar-top']}>
            <h3>KINGFOOD</h3>
        </div>
        <div className={styles['navbar-content']}>
            <div className={styles['form-container']}>
                <form className={styles['form-styles']}>
                    <div className={styles['container1']}>
                        <img src="/hugeicon.svg" alt="hugeicon" />
                        <h5>KINGFOOD, số 1 Hùng Vương, Ba Đình</h5>
                        <img src="/group3.svg" alt="menu" />
                    </div>
                    <div className={styles['vertical-line']}></div>
                    <div className={styles['container2']}>
                        <img src="/group-261.svg" alt="search" />
                        <input placeholder="Tìm kiếm nhà hàng hoặc món ăn..." />
                    </div>
                </form> 
            </div>   
        </div>
        <div className={styles['shop-cart']}>
            <img src="/shop-cart.svg" alt="avatar" />
        </div>
        <div className={styles['navbar-top']}>
            <img src="/ellipse-1@2x.png" alt="avatar" />
            <h3 className={styles['name']}>Kien</h3>
        </div>
    </div>
  )
}

export default Navbar1