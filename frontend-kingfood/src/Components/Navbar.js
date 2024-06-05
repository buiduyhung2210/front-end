import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Navbar.module.css';
import SignUpModal from './Signup';
import SignInModal from './Signin';
import ForgotPasswordModal from './ForgotPass';
import ResetPasswordModal from './ResetPass';
import SuccessPopup from './SuccessPopup';

function Navbar(props) {
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);
    const [showSignIn, setShowSignIn] = useState(false);
    const [showForgotPassword, setShowForgotPassword] = useState(false);
    const [showResetPassword, setShowResetPassword] = useState(false);
    const [showSuccessPopup, setShowSuccessPopup] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleMenuClick = () => {
        navigate('/MenuPage'); // Đường dẫn của trang MenuPage
    };

    const handleShowModal = (modalType) => {
        if (modalType === 'signup') {
            setShowModal(true);
            setShowSignIn(false);
            setShowForgotPassword(false);
            setShowResetPassword(false);
            setShowSuccessPopup(false);
        } else if (modalType === 'signin') {
            setShowSignIn(true);
            setShowModal(false);
            setShowForgotPassword(false);
            setShowResetPassword(false);
            setShowSuccessPopup(false);
        } else if (modalType === 'forgotpassword') {
            setShowForgotPassword(true);
            setShowModal(false);
            setShowSignIn(false);
            setShowResetPassword(false);
            setShowSuccessPopup(false);
        } else if (modalType === 'resetpassword') {
            setShowResetPassword(true);
            setShowModal(false);
            setShowSignIn(false);
            setShowForgotPassword(false);
            setShowSuccessPopup(false);
        }
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setShowSignIn(false);
        setShowForgotPassword(false);
        setShowResetPassword(false);
        setShowSuccessPopup(false);
    };

    const handleRedirect = () => {
        if (isLoggedIn) {
            navigate('/afterlogin');
        } else {
            alert('Vui lòng đăng nhập trước khi tiếp tục!');
        }
    };

    const handleLogin = () => {
        setIsLoggedIn(true);
        alert('Đăng nhập thành công!');
    };

    const handleEmailSent = () => {
        setShowForgotPassword(false);
        setShowResetPassword(true);
    };

    const handlePasswordReset = () => {
        setShowResetPassword(false);
        setShowSuccessPopup(true);
    };

    return (
        <div className={styles.navbar}>
            <div className={styles['navbar-top']}>
                <h3 onClick={handleRedirect}>KINGFOOD</h3>
                <div>
                    <button onClick={() => handleShowModal('signin')}>Đăng nhập</button>
                    <button onClick={() => handleShowModal('signup')}>Đăng kí</button>
                    <button onClick={handleMenuClick}>Đặt món</button>
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

            <SignUpModal show={showModal} handleClose={handleCloseModal} handleLogin={handleLogin} />
            <SignInModal show={showSignIn} handleClose={handleCloseModal} handleForgotPasswordClick={() => handleShowModal('forgotpassword')} />
            <ForgotPasswordModal show={showForgotPassword} handleClose={handleCloseModal} onEmailSent={handleEmailSent} />
            <ResetPasswordModal show={showResetPassword} handleClose={handleCloseModal} onPasswordReset={handlePasswordReset} />
            <SuccessPopup show={showSuccessPopup} handleClose={handleCloseModal} />
        </div>
    );
}

export default Navbar;
