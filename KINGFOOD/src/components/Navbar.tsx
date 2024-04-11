import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Navbar.module.css";

export type NavbarType = {
  /** Style props */
  navbarPosition?: CSSProperties["position"];
  navbarTop?: CSSProperties["top"];
  navbarLeft?: CSSProperties["left"];
  rectangleDivBoxShadow?: CSSProperties["boxShadow"];
};

const Navbar: FunctionComponent<NavbarType> = ({
  navbarPosition,
  navbarTop,
  navbarLeft,
  rectangleDivBoxShadow,
}) => {
  const navbarStyle: CSSProperties = useMemo(() => {
    return {
      position: navbarPosition,
      top: navbarTop,
      left: navbarLeft,
    };
  }, [navbarPosition, navbarTop, navbarLeft]);

  const rectangleDivStyle: CSSProperties = useMemo(() => {
    return {
      boxShadow: rectangleDivBoxShadow,
    };
  }, [rectangleDivBoxShadow]);

  return (
    <div className={styles.navbar} style={navbarStyle}>
      <div className={styles.navbarChild} style={rectangleDivStyle} />
      <b className={styles.kingfood}>KINGFOOD</b>
      <div className={styles.navbarItem} />
      <img className={styles.navbarInner} alt="" src="/vector-3.svg" />
      <b className={styles.kingfood1Hng}>KINGFOOD, 1 Hùng Vương, Ba Đình</b>
      <div className={styles.tmKimNh}>Tìm kiếm nhà hàng hoặc món ăn...</div>
      <img className={styles.ellipseIcon} alt="" src="/ellipse-1@2x.png" />
      <b className={styles.kien}>Kien</b>
      <img className={styles.groupIcon} alt="" src="/group-261.svg" />
      <img className={styles.vectorIcon} alt="" src="/vector.svg" />
      <img className={styles.hugeIcon} alt="" src="/hugeicon1.svg" />
    </div>
  );
};

export default Navbar;
