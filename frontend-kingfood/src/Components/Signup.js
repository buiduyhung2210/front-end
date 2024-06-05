import React, { useState } from 'react';
import styles from './Signup.module.css';
import SuccessSignup from './SuccessSignup';

const SignUpModal = ({ show, handleClose }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [termsAccepted, setTermsAccepted] = useState(false);
    const [errors, setErrors] = useState({});
    const [showSuccessSignup, setShowSuccessSignup] = useState(false);

    const validate = () => {
        const newErrors = {};
        if (!name) newErrors.name = 'Họ và tên không được để trống';
        if (!email) newErrors.email = 'Email không được để trống';
        else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Email không hợp lệ';
        if (!password) newErrors.password = 'Mật khẩu không được để trống';
        if (!confirmPassword) newErrors.confirmPassword = 'Xác nhận mật khẩu không được để trống';
        else if (password !== confirmPassword) newErrors.confirmPassword = 'Mật khẩu không khớp';
        if (!termsAccepted) newErrors.termsAccepted = 'Bạn phải đồng ý với điều khoản';
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length === 0) {
            setShowSuccessSignup(true);
            // Submit form
            console.log('Form submitted');
        } else {
            setErrors(validationErrors);
        }
    };

    const handleSuccessSignupClose = () => {
        setShowSuccessSignup(false);
        handleClose();  // Close the SignInModal
    };

    if (!show) return null;

    return (
        <div className={styles.modalBackdrop} onClick={handleClose}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                <h2>Đăng ký</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Họ và tên"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    {errors.name && <p className={styles.error}>{errors.name}</p>}
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {errors.email && <p className={styles.error}>{errors.email}</p>}
                    <input
                        type="password"
                        placeholder="Nhập mật khẩu mới"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {errors.password && <p className={styles.error}>{errors.password}</p>}
                    <input
                        type="password"
                        placeholder="Xác nhận mật khẩu"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    {errors.confirmPassword && <p className={styles.error}>{errors.confirmPassword}</p>}
                    <div>
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
                    <button type="submit" disabled={!termsAccepted}>Tạo tài khoản</button>
                    <div className={styles['login']}>
                        <p>Đã có tài khoản? Đăng nhập ngay</p>
                    </div>
                </form>
            </div>
            <SuccessSignup handleClose={handleSuccessSignupClose} show={showSuccessSignup} />
        </div>
    );
};

export default SignUpModal;
