import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar1 from '../Components/Navbar1';
import Footer from '../Components/Footer';
import '../Styles/ShoppingCartMenuPage.css';
import axios from 'axios';
export default function ShoppingCartMenuPage() {
    const [cartItems,setCartitems] = useState([])
    const navigate = useNavigate();
    const [done,setDone] = useState(true)
    const viewCart = () => {
        axios.post('http://localhost:8080/viewCart',{
            "customerId": localStorage.getItem('userId')
        }).then(
            response => {
                console.log(response.data);
                setCartitems(response.data)
            }
        ).catch(error => {
            console.error('There was an error!', error);
            setCartitems([]);
        })
    }
    if (done) {
        viewCart();
        setDone(false);
    }
    // Hàm xử lý khi click vào dòng text "GIỎ HÀNG"
    const handleBackTextClick = () => {
        navigate(-1); // Quay lại trang trước đó trong lịch sử duyệt
    };

    // Hàm xử lý khi click nút Xóa món hàng
    const handleDeleteItemClick = (cartId) => {
        axios.delete('http://localhost:8080/clearCart/' + cartId).then(
            response => {
                console.log(response.data);
                viewCart();
            }
        ).catch(
            error => {
                console.error(error);
            }
        );
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
                            <tr key={item.items[0].itemId}>
                                <td>{item.items[0].itemName}</td>
                                <td>1</td>
                                <td>{item.items[0].cost}</td>
                                <td>{item.items[0].cost}</td>
                                <td>
                                    <button onClick={() => handleDeleteItemClick(item.cartId)}>Xóa</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {/* Container cho dòng text "GIỎ HÀNG" */}
            <div className="back-text-container" onClick={handleBackTextClick}>
                <p className="back-text">
                    Quay lại
                </p>
            </div>
            <Footer /> {/* Bao gồm Footer */}
        </div>
    );
}
