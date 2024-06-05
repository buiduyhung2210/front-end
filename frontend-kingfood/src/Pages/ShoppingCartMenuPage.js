import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar1 from '../Components/Navbar1';
import Footer from '../Components/Footer';
import '../Styles/ShoppingCartMenuPage.css';

export default function ShoppingCartMenuPage() {
    const navigate = useNavigate();

    // Hàm xử lý khi click vào dòng text "GIỎ HÀNG"
    const handleBackTextClick = () => {
        navigate(-1); // Quay lại trang trước đó trong lịch sử duyệt
    };

    // Danh sách các món hàng ví dụ
    const cartItems = [
        { id: 1, name: 'Mì Quảng', quantity: 2, price: 45000 },
        { id: 2, name: 'Phở Gà', quantity: 1, price: 35000 },
        { id: 3, name: 'Bánh Mỳ', quantity: 3, price: 15000 }
    ];

    // Hàm xử lý khi click nút Xóa món hàng
    const handleDeleteItemClick = (itemId) => {
        // Viết logic xử lý xóa món hàng ở đây (chưa cung cấp logic cụ thể)
        console.log(`Xóa món hàng có id: ${itemId}`);
    };

    return (
        <div>
            <Navbar1 /> {/* Bao gồm Navbar1 */}
            <div className="shopping-cart-menu-page">
                {/* Nội dung trang ShoppingCartMenuPage */}
                <h2>Giỏ hàng của bạn</h2>
                <table className="cart-table">
                    <thead>
                        <tr>
                            <th>Tên món</th>
                            <th>Số lượng</th>
                            <th>Đơn giá</th>
                            <th>Tổng Tiền</th>
                            <th>Xóa</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartItems.map(item => (
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>{item.quantity}</td>
                                <td>{item.price}</td>
                                <td>{item.quantity * item.price}</td>
                                <td>
                                    <button onClick={() => handleDeleteItemClick(item.id)}>Xóa</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {/* Container cho dòng text "GIỎ HÀNG" */}
            <div className="back-text-container" onClick={handleBackTextClick}>
                <p className="back-text">
                    GIỎ HÀNG
                </p>
            </div>
            <Footer /> {/* Bao gồm Footer */}
        </div>
    );
}
