import React from 'react';
import styles from './SuccessPopup.module.css';

const SuccessPopup = ({ handleClose, show }) => {
    const showHideClassName = show ? `${styles['popup']} ${styles['display-block']}` : `${styles['popup']} ${styles['display-none']}`;

    return (
        <div className={showHideClassName}>
            <section className={styles['popup-main']}>
                <img src="/Vector.svg" alt="greenticket" />
                <h3>Cập nhật thông tin thành công!</h3>
                <p>Vui lòng ấn "Tiếp tục" để truy cập website</p>
                <button className={styles['continue-buttons']} onClick={handleClose}>Tiếp tục</button>
            </section>
        </div>
    );
};

export default SuccessPopup;
