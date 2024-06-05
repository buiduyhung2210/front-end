import React, { useState } from 'react';
import styles from './Signin.module.css';
import { useNavigate } from 'react-router-dom';
import SuccessSignin from './SuccessSignin';

const SignInModal = ({ show, handleClose, handleForgotPasswordClick }) => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const [termsAccepted, setTermsAccepted] = useState(false);
    const [showSuccessSignin, setShowSuccessSignin] = useState(false);

    const validate = () => {
        const newErrors = {};
        if (!email) newErrors.email = 'Email không được để trống';
        else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Email không hợp lệ';
        if (!password) newErrors.password = 'Mật khẩu không được để trống';
        if (!termsAccepted) newErrors.termsAccepted = 'Bạn phải đồng ý với điều khoản';
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length === 0) {
            console.log('SignIn form submitted');
            setShowSuccessSignin(true);
        } else {
            setErrors(validationErrors);
        }
    };

    const handleSuccessSigninClose = () => {
        setShowSuccessSignin(false);
        handleClose();  // Close the SignInModal
        navigate('/afterlogin');
    };

    if (!show) return null;

    return (
        <div className={styles.modalBackdrop} onClick={handleClose}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                <h2>Đăng nhập</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {errors.email && <p className={styles.error}>{errors.email}</p>}
                    <input
                        type="password"
                        placeholder="Mật khẩu"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {errors.password && <p className={styles.error}>{errors.password}</p>}
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
                    <button type="submit" disabled={!termsAccepted}>Đăng nhập</button>
                    <div className={styles['signup']}>
                        <p>Chưa có tài khoản? Đăng ký ngay</p>
                    </div>
                    <div className={styles['login']}>
                        <p onClick={handleForgotPasswordClick}>Quên mật khẩu? Đổi mật khẩu ngay</p>
                    </div>
                </form>
            </div>
            
            <SuccessSignin handleClose={handleSuccessSigninClose} show={showSuccessSignin} />
        </div>
    );
};

export default SignInModal;
