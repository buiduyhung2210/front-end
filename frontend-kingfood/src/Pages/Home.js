import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { ListsData } from '../Datas/ListsData';
import { OptionDatas } from '../Datas/OptionDatas';
import { PlaceData } from '../Datas/PlaceDatas';
import styles from '../Styles/Home.module.css';

function Option({ image, title, desc }) {
    return (
        <div className={styles['option-item']}>
            <div className={styles['option-image']}>
                <img src={image} alt="" />
            </div>
            <div className={styles['option-footer']}>
                <div className={styles['option-title']}>
                    <h5>{title}</h5>
                    <p>{desc}</p>
                </div>
            </div>
        </div>
    );
}


function ListProps({ image, title, desc }) {
    return (
        <div className={styles['list-item']}>
            <div className={styles['list-image']}>
                <img src={image} alt="" />
                <div className={styles['overlay']}>
                    <div className={styles['text']}>
                        <p>{title}</p>
                        <p>{desc}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

function PlaceProps({ title, desc }) {
    return (
        <div className={styles['place-item']}>
            <p className={styles['p1']}>{title}</p>
            <p>{desc}</p>
        </div>
    );
}

export default function Home () {
    return (
       <div className={styles.container}>
            <div>
                <Navbar />
            </div>
            <div className={styles['option-container']}>
                {OptionDatas.map((items) => (
                    <Option key={items.id} image={items.image} title={items.title} desc={items.desc} />
                ))}
            </div>
            <div>
                <h4 className={styles['heading-title']}>Danh sách</h4>
                <div className={styles['description-title']}>
                    <p>Khám phá các danh sách được chọn lọc hàng đầu tại KINGFOOD, dựa trên các xu hướng.</p>
                    <p>Tất cả danh sách của KINGFOOD</p>
                </div>
                <div className={styles['list-container']}>
                    {ListsData.map((items) => (
                        <ListProps key={items.id} image={items.image} title={items.title} desc={items.desc} />
                    ))}
                </div>
            </div>
            <div>
                <h4 className={styles['heading-title']}>Các khu vực phổ biến trong và xung quanh KINGFOOD</h4>
                <div className={styles['place-container']}>
                    {PlaceData.map((items) => (
                        <PlaceProps key={items.id} title={items.title} desc={items.desc} />
                    ))}
                    <button className={styles['place-item']}>
                        <p className={styles['p1']}>Xem thêm</p>
                    </button>
                </div>
            </div>
            <div>
                <Footer />
            </div>
       </div> 
    )
}