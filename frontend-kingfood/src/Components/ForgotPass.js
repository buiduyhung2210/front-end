import React, { useState } from 'react';
import styles from './Signin.module.css';

const ForgotPasswordModal = ({ show, handleClose, onEmailSent }) => {
    const [email, setEmail] = useState('');
    const [errors, setErrors] = useState({});
    const [message, setMessage] = useState('');
    const [termsAccepted, setTermsAccepted] = useState(false);

    const validate = () => {
        const newErrors = {};
        if (!email) newErrors.email = 'Email không được để trống';
        else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Email không hợp lệ';
        if (!termsAccepted) newErrors.termsAccepted = 'Bạn phải đồng ý với điều khoản';
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length === 0) {
            // Call API to send reset password email
            console.log('Reset password email sent');
            setMessage('Một email đã được gửi đến địa chỉ của bạn để đặt lại mật khẩu.');
            setEmail('');
            onEmailSent();  // Callback to switch to reset password modal
        } else {
            setErrors(validationErrors);
        }
    };

    if (!show) return null;

    return (
        <div className={styles.modalBackdrop} onClick={handleClose}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                <h2>Quên mật khẩu</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {errors.email && <p className={styles.error}>{errors.email}</p>}
                    <div className={styles['dieukhoan']}>
                        <input
                            type="checkbox"
                            id="terms"
                            checked={termsAccepted}
                            onChange={(e) => setTermsAccepted(e.target.checked)}
                        />
                        <label htmlFor="terms">
                            Tôi đồng ý với <p className={styles.link}>Điều khoản Dịch vụ</p>, <p className={styles.link}>Chính sách Bảo mật</p>, và <p className={styles.link}>Chính sách Nội dung</p> của KINGFOOD
                        </label>
                    </div>
                    {errors.termsAccepted && <p className={styles.error}>{errors.termsAccepted}</p>}
                    <button type="submit" disabled={!termsAccepted}>Gửi yêu cầu</button>
                    {message && <p className={styles.message}>{message}</p>}
                </form>
            </div>
        </div>
    );
};

export default ForgotPasswordModal;
