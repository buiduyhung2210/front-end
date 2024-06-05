import React, { useState } from 'react';
import styles from './Signin.module.css';
import { useNavigate } from 'react-router-dom';
import SuccessSignin from './SuccessSignin';
import axios from 'axios';
const SignInModal = ({ show, handleClose, handleForgotPasswordClick, handleShowModal }) => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const [termsAccepted, setTermsAccepted] = useState(false);
    const [showSuccessSignin, setShowSuccessSignin] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        image: '',
        // phone: '',
        // address: ''
    });
    const validate = () => {
        const newErrors = {};
        if (!email) newErrors.email = 'Email không được để trống';
        else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Email không hợp lệ';
        if (!password) newErrors.password = 'Mật khẩu không được để trống';
        if (!termsAccepted) newErrors.termsAccepted = 'Bạn phải đồng ý với điều khoản';
        return newErrors;
    };

    const saveUserInfo = (e) => {
        axios.get('http://localhost:8080//viewCustomer/' + localStorage.getItem('userId')
    ).then(
            response => {
                console.log('User Info:',response.data);
                const user = response.data;
                localStorage.setItem('userFname',user.firstName);
                localStorage.setItem('userLname',user.lastname);
                localStorage.setItem('userEmail',user.email);
                localStorage.setItem('userImage',user.image);
                localStorage.setItem('userPassword',user.password);
                console.log('User info saved in local storage');
            }
    ).catch(error => {
        console.error('There was an error!', error);
        setErrors({ submit: 'Đã xảy ra lỗi. Vui lòng thử lại.' });
    });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length === 0) {
            const qs = require('qs');
            axios.post('http://localhost:8080/login',qs.stringify({
                'email':email,
                'password':password
            })).then(response => {
                console.log('Response data:', response.data); // Debug log
                const responseString = response.data;
                const uuidMatch = responseString.match(/uuid=([a-zA-Z0-9-]+)/);
                const userIdMatch = responseString.match(/userId=([0-9-]+)/);
                if (uuidMatch && uuidMatch[1]) {
                    const uuid = uuidMatch[1];
                    localStorage.setItem('uuid', uuid);
                    console.log('UUID saved to localStorage:', uuid);
                } else {
                console.error('UUID không tồn tại trong phản hồi');
                }
                if (userIdMatch && userIdMatch[1]) {
                    const userId = userIdMatch[1];
                    localStorage.setItem('userId', userId);
                    console.log('userID saved to localStorage:', userId);
                    console.log('Đăng nhập thành công');
                    setShowSuccessSignin(true);
                } else {
                    console.error('UUID không tồn tại trong phản hồi');
                }
        }).catch(error => {
                console.error('There was an error!', error);
                setErrors({ submit: 'Đã xảy ra lỗi khi đăng nhập. Vui lòng thử lại.' });
            });
        } else {
            setErrors(validationErrors);
        }
    };

    const handleSuccessSigninClose = () => {
        setShowSuccessSignin(false);
        handleClose();  // Close the SignInModal
        saveUserInfo();
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
                        <p onClick={() => handleShowModal('signup')}>Chưa có tài khoản? Đăng ký ngay</p>
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
