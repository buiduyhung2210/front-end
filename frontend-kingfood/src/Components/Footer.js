import React from 'react';
import styles from './Footer.module.css';

function Footer(props) {
    return (
        <div className={styles.footer}>
            <h3>KINGFOOD</h3>
            <div className={styles['footer-content']}>
                <div className={styles['footer-column']}>
                    <h4>GIỚI THIỆU VỀ KINGFOOD</h4>
                    <p>Chúng tôi là ai</p>
                    <p>Blog</p>
                    <p>Làm việc với chúng tôi</p>
                    <p>Nhà đầu tư</p>
                    <p>Báo cáo vi phạm</p>
                    <p>Bộ công cụ báo chí</p>
                    <p>Liên hệ</p>
                </div>
                <div className={styles['footer-column']}>
                    <h4>DÀNH CHO NHÀ HÀNG</h4>
                    <p>Hợp tác với chúng tôi</p>
                    <p>Ứng dụng dành cho bạn</p>
                </div>
                <div className={styles['footer-column']}>
                    <h4>TÌM HIỂU THÊM</h4>
                    <p>Chính sách bảo mật</p>
                    <p>Bảo mật</p>
                    <p>Điều khoản và điều kiện</p>
                    <p>Bản đồ website</p>
                </div>
                <div className={styles['footer-column']}>
                    <h4>Liên kết với mạng xã hội</h4>
                    <div className={styles['icon-app']}>
                        <img src="/group5.svg" alt="Youtube" />
                        <img src="/group2.svg" alt="In" />
                        <img src="/group1.svg" alt="Twitter" />
                        <img src="/group.svg" alt="Facebook" />
                        <img src="/group-26.svg" alt="Instagram" />
                    </div>
                    <div className={styles['social-links']}>
                        <img src="/google-play.svg" alt="Google Play" />
                        <img src="/app-store.svg" alt="App Store" />
                    </div>
                </div>
            </div>
            <div className={styles['footer-bottom']}>
                <h4>KINGFOOD @ 2024, Bản quyền thuộc về KINGFOOD</h4>
            </div>
        </div>
    );
}

export default Footer;