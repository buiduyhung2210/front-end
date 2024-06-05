import React, { useState } from 'react';
import styles from './Signin.module.css';

const ResetPasswordModal = ({ show, handleClose, onPasswordReset }) => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState({});

    const validate = () => {
        const newErrors = {};
        if (!password) newErrors.password = 'Mật khẩu không được để trống';
        if (!confirmPassword) newErrors.confirmPassword = 'Xác nhận mật khẩu không được để trống';
        else if (password !== confirmPassword) newErrors.confirmPassword = 'Mật khẩu không khớp';
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length === 0) {
            // Here, you would typically send a request to reset the password
            console.log('Password reset form submitted');
            onPasswordReset();
        } else {
            setErrors(validationErrors);
        }
    };

    if (!show) return null;

    return (
        <div className={styles.modalBackdrop} onClick={handleClose}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                <h2>Đặt lại mật khẩu</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="password"
                        placeholder="Nhập mật khẩu mới"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {errors.password && <p className={styles.error}>{errors.password}</p>}
                    <input
                        type="password"
                        placeholder="Xác nhận mật khẩu mới"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    {errors.confirmPassword && <p className={styles.error}>{errors.confirmPassword}</p>}
                    <button type="submit">Đặt lại mật khẩu</button>
                </form>
            </div>
        </div>
    );
};

export default ResetPasswordModal;
