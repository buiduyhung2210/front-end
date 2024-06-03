// src/Pages/Profile.js
import React, { useState } from 'react';
import Navbar1 from '../Components/Navbar1';
import Footer from '../Components/Footer';
import styles from '../Styles/Profile.module.css';
import { PaymentDatas } from '../Datas/PaymentDatas';
import Popup from '../Components/Popup';
import SuccessPopup from '../Components/SuccessPopup';

function PaymentForms({ image, title, onClick }) {
    return (
        <div className={styles['place-item']} onClick={onClick}>
            <img src={image} alt="" />
            <p className={styles['title']}>{title}</p>
        </div>
    );
}

export default function Profile() {
    const [showPopup, setShowPopup] = useState(false);
    const [showSuccessPopup, setShowSuccessPopup] = useState(false);
    const [showPaymentPopup, setShowPaymentPopup] = useState(false);
    const [formData, setFormData] = useState({
        name: 'Hoang Tien Trung Kien',
        email: 'hoangtientrungkien95@gmail.com',
        phone: '',
        address: ''
    });
    const [paymentData, setPaymentData] = useState({
        bankName: '',
        accountNumber: '',
        recipientName: ''
    });
    const [errors, setErrors] = useState({});
    const [paymentErrors, setPaymentErrors] = useState({});

    const togglePopup = () => {
        setShowPopup(!showPopup);
    };

    const togglePaymentPopup = () => {
        setShowPaymentPopup(!showPaymentPopup);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handlePaymentInputChange = (e) => {
        const { name, value } = e.target;
        setPaymentData({ ...paymentData, [name]: value });
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.name) newErrors.name = 'Name is required';
        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email address is invalid';
        }
        if (!formData.phone) {
            newErrors.phone = 'Phone is required';
        } else if (!/^\d{10}$/.test(formData.phone)) {
            newErrors.phone = 'Phone number is invalid';
        }
        if (!formData.address) newErrors.address = 'Address is required';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const validatePaymentForm = () => {
        const newErrors = {};
        if (!paymentData.bankName) newErrors.bankName = 'Bank name is required';
        if (!paymentData.accountNumber) {
            newErrors.accountNumber = 'Account number is required';
        } else if (!/^\d+$/.test(paymentData.accountNumber)) {
            newErrors.accountNumber = 'Account number is invalid';
        }
        if (!paymentData.recipientName) newErrors.recipientName = 'Recipient name is required';
        setPaymentErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            setShowPopup(false);
            setShowSuccessPopup(true);
        }
    };

    const handlePaymentSubmit = (e) => {
        e.preventDefault();
        if (validatePaymentForm()) {
            setShowPaymentPopup(false);
            setShowSuccessPopup(true);
        }
    };

    return (
        <div>
            <Navbar1 />

            <div className={styles['profile-form']}>
                <div className={styles['avatar-form']}>
                    <img src="/ellipse-1@2x.png" alt="avatar" />
                </div>
                <div className={styles['name-form']}>
                    <p>Hoàng Tiến Trung Kiên</p>
                    <div className={styles['place-form']}>
                        <img src="/Subtract.svg" alt="logo-place" />
                        <p>Việt Nam</p>
                    </div>
                    <div className={styles['setting-form']}>
                        <button onClick={togglePopup}>Chỉnh sửa hồ sơ</button>
                    </div>
                </div>
            </div>

            <div className={styles['payment-container']}>
                {PaymentDatas.map((items) => (
                    <PaymentForms key={items.id} image={items.image} title={items.title} 
                    onClick={items.id === 2 ? togglePaymentPopup : null} 
                    />
                ))}
            </div>

            <Footer />

            {/* Chỉnh sửa hồ sơ */}
            <Popup show={showPopup} handleClose={togglePopup}>
                <div className={styles['text-setting']}>
                    <h2>Chỉnh sửa hồ sơ</h2>
                </div>
                <div className={styles['avatar-setting']}>
                    <img src="/ellipse-1@2x.png" alt="avatar" />
                </div>
                <form className={styles['formPro-setting']} onSubmit={handleSubmit}>
                    <label htmlFor="name">
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                        />
                    </label>
                    {errors.name && <p className={styles.error}>{errors.name}</p>}
                    <label htmlFor="email">
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                        />
                    </label>
                    {errors.email && <p className={styles.error}>{errors.email}</p>}
                    <label htmlFor="phone">
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder='SĐT: 0123456789/+8412345678'
                        />
                    </label>
                    {errors.phone && <p className={styles.error}>{errors.phone}</p>}
                    <label htmlFor="address">
                        <input
                            type="text"
                            id="address"
                            name="address"
                            value={formData.address}
                            onChange={handleInputChange}
                            placeholder='Địa chỉ'
                        />
                    </label>
                    {errors.address && <p className={styles.error}>{errors.address}</p>}
                    <div className={styles['modal-buttons']}>
                        <button className={styles['unsuccess-buttons']} type="button" onClick={togglePopup}>Hủy</button>
                        <button className={styles['success-buttons']} type="submit">Xác nhận</button>
                    </div>
                </form>
            </Popup>

            {/* Thông tin thanh toán */}
            <Popup show={showPaymentPopup} handleClose={togglePaymentPopup}>
                <div className={styles['text-setting']}>
                    <h2>Thông tin thanh toán</h2>
                </div>
                <div className={styles['avatar-setting']}>
                    <img src="/ellipse-1@2x.png" alt="avatar" />
                </div>
                <form className={styles['formPro-setting']} onSubmit={handlePaymentSubmit}>
                    <label htmlFor="bankName">
                        <input
                            type="text"
                            id="bankName"
                            name="bankName"
                            value={paymentData.bankName}
                            onChange={handlePaymentInputChange}
                            placeholder="Tên ngân hàng"
                        />
                    </label>
                    {paymentErrors.bankName && <p className={styles.error}>{paymentErrors.bankName}</p>}
                    <label htmlFor="accountNumber">
                        <input
                            type="text"
                            id="accountNumber"
                            name="accountNumber"
                            value={paymentData.accountNumber}
                            onChange={handlePaymentInputChange}
                            placeholder="Số tài khoản"
                        />
                    </label>
                    {paymentErrors.accountNumber && <p className={styles.error}>{paymentErrors.accountNumber}</p>}
                    <label htmlFor="recipientName">
                        <input
                            type="text"
                            id="recipientName"
                            name="recipientName"
                            value={paymentData.recipientName}
                            onChange={handlePaymentInputChange}
                            placeholder="Tên người thụ hưởng"
                        />
                    </label>
                    {paymentErrors.recipientName && <p className={styles.error}>{paymentErrors.recipientName}</p>}
                    <div className={styles['modal-buttons']}>
                        <button className={styles['unsuccess-buttons']} type="button" onClick={togglePaymentPopup}>Hủy</button>
                        <button className={styles['success-buttons']} type="submit">Xác nhận</button>
                    </div>
                </form>
            </Popup>


            <SuccessPopup show={showSuccessPopup} handleClose={() => setShowSuccessPopup(false)} />
        </div>
    );
}
