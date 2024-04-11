import { FunctionComponent, useMemo, type CSSProperties } from "react";
import TypeBlackWhite from "./TypeBlackWhite";
import TypeDefault from "./TypeDefault";
import styles from "./Footer.module.css";

export type FooterType = {
  /** Style props */
  footerPosition?: CSSProperties["position"];
  footerTop?: CSSProperties["top"];
  footerLeft?: CSSProperties["left"];
};

const Footer: FunctionComponent<FooterType> = ({
  footerPosition,
  footerTop,
  footerLeft,
}) => {
  const footerStyle: CSSProperties = useMemo(() => {
    return {
      position: footerPosition,
      top: footerTop,
      left: footerLeft,
    };
  }, [footerPosition, footerTop, footerLeft]);

  return (
    <div className={styles.footer} style={footerStyle}>
      <div className={styles.footerChild} />
      <div className={styles.remixIconsfilllogosinstagr} />
      <img className={styles.footerItem} alt="" src="/group-26.svg" />
      <div className={styles.remixIconsfilllogosfaceboo} />
      <img className={styles.groupIcon} alt="" src="/group.svg" />
      <div className={styles.remixIconsfilllogostwitter} />
      <img className={styles.groupIcon1} alt="" src="/group1.svg" />
      <div className={styles.remixIconsfilllogoslinkedi} />
      <img className={styles.groupIcon2} alt="" src="/group2.svg" />
      <img className={styles.footerInner} alt="" src="/vector-2.svg" />
      <div className={styles.kingfood}>KINGFOOD</div>
      <div className={styles.kingfood2024}>
        KINGFOOD @ 2024. Bản quyền thuộc về KINGFOOD.
      </div>
      <div className={styles.giiThiuV}>GIỚI THIỆU VỀ KINGFOOD</div>
      <div className={styles.chngTiL}>Chúng tôi là ai</div>
      <div className={styles.blog}>Blog</div>
      <div className={styles.hpTcVi}>Hợp tác với chúng tôi</div>
      <div className={styles.ngDngDnh}>Ứng dụng dành cho bạn</div>
      <div className={styles.lmVicVi}>Làm việc với chúng tôi</div>
      <div className={styles.nhUT}>Nhà đầu tư</div>
      <div className={styles.chnhSchBo}>Chính sách bảo mật</div>
      <div className={styles.boMt}>Bảo mật</div>
      <div className={styles.iuKhonV}>Điều khoản và điều kiện</div>
      <div className={styles.bnWebsite}>Bản đồ website</div>
      <div className={styles.boCoVi}>Báo cáo vi phạm</div>
      <div className={styles.bCngC}>Bộ công cụ báo chí</div>
      <div className={styles.linH}>Liên hệ</div>
      <div className={styles.dnhChoNh}>DÀNH CHO NHÀ HÀNG</div>
      <div className={styles.tmHiuThm}>TÌM HIỂU THÊM</div>
      <div className={styles.linKtMng}>Liên kết mạng xã hội</div>
      <div className={styles.remixIconsfilllogosyoutube} />
      <img className={styles.groupIcon3} alt="" src="/group5.svg" />
      <TypeBlackWhite
        typeBlackWhiteTypeBlackWh="/google-play1.svg"
        typeBlackWhiteWidth="7%"
        typeBlackWhiteHeight="7.8%"
        typeBlackWhitePosition="absolute"
        typeBlackWhiteTop="50%"
        typeBlackWhiteRight="16.18%"
        typeBlackWhiteBottom="42.2%"
        typeBlackWhiteLeft="76.82%"
        typeBlackWhiteMaxHeight="100%"
      />
      <TypeDefault
        typeDefaultTypeDefault="/app-store.svg"
        typeDefaultIconWidth="8.75%"
        typeDefaultIconHeight="9.76%"
        typeDefaultIconPosition="absolute"
        typeDefaultIconTop="51.02%"
        typeDefaultIconRight="14.43%"
        typeDefaultIconBottom="39.23%"
        typeDefaultIconLeft="76.82%"
        typeDefaultIconMaxHeight="100%"
      />
    </div>
  );
};

export default Footer;
