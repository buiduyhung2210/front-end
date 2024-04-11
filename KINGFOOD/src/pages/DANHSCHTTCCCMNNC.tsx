import { FunctionComponent } from "react";
import Navbar from "../components/Navbar";
import GroupComponent from "../components/GroupComponent";
import Group from "../components/Group";
import Component from "../components/Component";
import MenuALL from "../components/MenuALL";
import Footer from "../components/Footer";
import styles from "./DANHSCHTTCCCMNNC.module.css";

const DANHSCHTTCCCMNNC: FunctionComponent = () => {
  return (
    <div className={styles.danhSchTtCCcMnNC}>
      <div className={styles.danhSchTtCCcMnNCChild} />
      <Navbar
        navbarPosition="absolute"
        navbarTop="1px"
        navbarLeft="0px"
        rectangleDivBoxShadow="unset"
      />
      <GroupComponent
        group="/group6.svg"
        group1="/group7.svg"
        groupDivWidth="80px"
        groupDivHeight="80px"
        groupDivPosition="absolute"
        groupDivTop="159px"
        groupDivLeft="277px"
        groupDivBoxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        ellipseDivBackgroundColor="#fff"
        groupIconWidth="31.56%"
        groupIconLeft="68.44%"
        groupIconHeight="97.19%"
        groupIconWidth1="42.81%"
        groupIconTop="2.81%"
        groupIconRight="57.19%"
      />
      <Group
        groupGroup13="/group-13.svg"
        groupIconOverflow="unset"
        groupIconPosition="absolute"
        groupIconTop="176px"
        groupIconLeft="619px"
      />
      <b className={styles.nUng}>Ăn uống</b>
      <b className={styles.nightlife}>Nightlife</b>
      <b className={styles.deliveryComingSoon}>Delivery (coming soon..)</b>
      <Component
        componentComponent14="/component-14.svg"
        component14IconOverflow="unset"
        component14IconPosition="absolute"
        component14IconTop="180px"
        component14IconLeft="1101px"
      />
      <img
        className={styles.danhSchTtCCcMnNCItem}
        alt=""
        src="/vector-13.svg"
      />
      <div className={styles.danhSchTtCCcMnNCInner} />
      <img className={styles.ellipseIcon} alt="" src="/ellipse-15@2x.png" />
      <img
        className={styles.danhSchTtCCcMnNCChild1}
        alt=""
        src="/ellipse-16@2x.png"
      />
      <img
        className={styles.danhSchTtCCcMnNCChild2}
        alt=""
        src="/ellipse-17@2x.png"
      />
      <img
        className={styles.danhSchTtCCcMnNCChild3}
        alt=""
        src="/ellipse-18@2x.png"
      />
      <img
        className={styles.danhSchTtCCcMnNCChild4}
        alt=""
        src="/ellipse-19@2x.png"
      />
      <img
        className={styles.danhSchTtCCcMnNCChild5}
        alt=""
        src="/ellipse-20@2x.png"
      />
      <img
        className={styles.danhSchTtCCcMnNCChild6}
        alt=""
        src="/ellipse-21@2x.png"
      />
      <b className={styles.cmHngCho}>CẢM HỨNG CHO THỰC ĐƠN CỦA BẠN</b>
      <b className={styles.combo}>Combo</b>
      <b className={styles.lu2Ngn}>Lẩu 2 ngăn</b>
      <b className={styles.ung}>Đồ uống</b>
      <b className={styles.bnhTrngCun}>Bánh tráng cuốn</b>
      <b className={styles.nhngLu}>Đồ nhúng lẩu</b>
      <b className={styles.mnTrngMing}>Món tráng miệng</b>
      <b className={styles.nNhanh}>Đồ ăn nhanh</b>
      <MenuALL
        tmDng="Sẵn sàng"
        menuALLPosition="absolute"
        menuALLTop="790px"
        menuALLLeft="201px"
        tmDngColor="#138b00"
      />
      <Footer footerPosition="absolute" footerTop="2439px" footerLeft="0px" />
      <img
        className={styles.remixIconsfillfinanceshopp}
        alt=""
        src="/remixiconsfillfinanceshoppingbasketfill.svg"
      />
      <div className={styles.groupParent}>
        <img className={styles.groupChild} alt="" src="/group-19.svg" />
        <div className={styles.div}>0</div>
      </div>
    </div>
  );
};

export default DANHSCHTTCCCMNNC;
