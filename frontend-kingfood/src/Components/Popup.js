import React from 'react';
import styles from './Popup.module.css';

const Popup = ({ handleClose, show, children }) => {
    const showHideClassName = show ? `${styles['popup']} ${styles['display-block']}` : `${styles['popup']} ${styles['display-none']}`;

    return (
        <div className={showHideClassName}>
            <section className={styles['popup-main']}>
                {children}
                <button className={styles['popup-close']} onClick={handleClose}>×</button>
            </section>
        </div>
    );
};

export default Popup;
