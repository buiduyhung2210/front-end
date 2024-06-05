import React from 'react';
import styles from './AfterLoginNavbar.module.css';
import { useNavigate } from 'react-router-dom';

function AfterLoginNavbar(props) {
    const navigate = useNavigate();

    const handleProfileClick = () => {
        navigate('/profile');
    };

    return (
        <div className={styles.navbar}>
            <div className={styles['navbar-top']}>
                <h3>KINGFOOD</h3>
                <div>
                    <button>Đặt món</button>
                </div>
                <div className={styles['navbar-top']} onClick={handleProfileClick}>
                    <img src="/ellipse-1@2x.png" alt="avatar" />
                    <h3 className={styles['name']}>Kien</h3>
                </div>
            </div>
            <div className={styles['navbar-content']}>
                <h1>KINGFOOD</h1>
                <h3>Khám phá những món ăn và đồ uống tốt nhất tại KINGFOOD</h3>
                <div className={styles['form-container']}>
                   <form className={styles['form-styles']}>
                        <div className={styles['container1']}>
                            <img src="/hugeicon.svg" alt="hugeicon" />
                            <p>KINGFOOD, số 1 Hùng Vương, Ba Đình</p>
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
        </div>
    );
}


export default AfterLoginNavbar;