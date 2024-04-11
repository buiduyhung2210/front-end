import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./MenuALL.module.css";

export type MenuALLType = {
  tmDng?: string;

  /** Style props */
  menuALLPosition?: CSSProperties["position"];
  menuALLTop?: CSSProperties["top"];
  menuALLLeft?: CSSProperties["left"];
  tmDngColor?: CSSProperties["color"];
};

const MenuALL: FunctionComponent<MenuALLType> = ({
  tmDng,
  menuALLPosition,
  menuALLTop,
  menuALLLeft,
  tmDngColor,
}) => {
  const menuALLStyle: CSSProperties = useMemo(() => {
    return {
      position: menuALLPosition,
      top: menuALLTop,
      left: menuALLLeft,
    };
  }, [menuALLPosition, menuALLTop, menuALLLeft]);

  const tmDngStyle: CSSProperties = useMemo(() => {
    return {
      color: tmDngColor,
    };
  }, [tmDngColor]);

  return (
    <div className={styles.menuAll} style={menuALLStyle}>
      <div className={styles.menuAllChild} />
      <b className={styles.pht}>10 phút</b>
      <b className={styles.vnSet}>1.300.000 Vnđ / Set</b>
      <div className={styles.menuAllItem} />
      <b className={styles.b}>4.2</b>
      <img className={styles.menuAllInner} alt="" src="/group-262.svg" />
      <div className={styles.rectangleDiv} />
      <b className={styles.pht1}>10 phút</b>
      <b className={styles.snSng}>Sẵn sàng</b>
      <b className={styles.tmDng}>Tạm dừng</b>
      <div className={styles.menuAllChild1} />
      <img
        className={styles.rectangleIcon}
        alt=""
        src="/rectangle-206@2x.png"
      />
      <img
        className={styles.menuAllChild2}
        alt=""
        src="/rectangle-208@2x.png"
      />
      <img
        className={styles.menuAllChild3}
        alt=""
        src="/rectangle-207@2x.png"
      />
      <b className={styles.luBV}>Lẩu bò vị Thái</b>
      <b className={styles.lu2Ngn}>Lẩu 2 ngăn</b>
      <b className={styles.lu2Ngn1}>Lẩu 2 ngăn</b>
      <b className={styles.vnSet1}>1.200.000 Vnđ / Set</b>
      <b className={styles.nNhanh}>Đồ ăn nhanh</b>
      <b className={styles.luCuaSng}>Lẩu cua sông</b>
      <b className={styles.burgerKing}>Burger King</b>
      <div className={styles.menuAllChild4} />
      <b className={styles.off}>50% OFF</b>
      <div className={styles.menuAllChild5} />
      <b className={styles.off1}>20% OFF</b>
      <div className={styles.menuAllChild6} />
      <b className={styles.b1}>4.2</b>
      <div className={styles.menuAllChild7} />
      <b className={styles.off2}>10% OFF</b>
      <img
        className={styles.remixIconsfillsystemstarS}
        alt=""
        src="/remixiconsfillsystemstarsfill.svg"
      />
      <div className={styles.menuAllChild8} />
      <b className={styles.b2}>4.2</b>
      <b className={styles.vnSet2}>55.000 Vnđ / Set</b>
      <b className={styles.pht2}>15 phút</b>
      <b className={styles.snSng1}>Sẵn sàng</b>
      <div className={styles.menuAllChild} />
      <b className={styles.pht}>10 phút</b>
      <b className={styles.vnSet}>1.300.000 Vnđ / Set</b>
      <div className={styles.menuAllItem} />
      <b className={styles.b}>4.2</b>
      <img className={styles.menuAllInner} alt="" src="/group-262.svg" />
      <div className={styles.rectangleDiv} />
      <b className={styles.pht1}>10 phút</b>
      <b className={styles.snSng}>Sẵn sàng</b>
      <b className={styles.tmDng}>Tạm dừng</b>
      <div className={styles.menuAllChild1} />
      <img
        className={styles.rectangleIcon}
        alt=""
        src="/rectangle-206@2x.png"
      />
      <img
        className={styles.menuAllChild2}
        alt=""
        src="/rectangle-208@2x.png"
      />
      <img
        className={styles.menuAllChild3}
        alt=""
        src="/rectangle-207@2x.png"
      />
      <b className={styles.luBV}>Lẩu bò vị Thái</b>
      <b className={styles.lu2Ngn}>Lẩu 2 ngăn</b>
      <b className={styles.lu2Ngn1}>Lẩu 2 ngăn</b>
      <b className={styles.vnSet1}>1.200.000 Vnđ / Set</b>
      <b className={styles.nNhanh}>Đồ ăn nhanh</b>
      <b className={styles.luCuaSng}>Lẩu cua sông</b>
      <b className={styles.burgerKing}>Burger King</b>
      <div className={styles.menuAllChild4} />
      <b className={styles.off}>50% OFF</b>
      <div className={styles.menuAllChild5} />
      <b className={styles.off1}>20% OFF</b>
      <div className={styles.menuAllChild6} />
      <b className={styles.b1}>4.2</b>
      <div className={styles.menuAllChild7} />
      <b className={styles.off2}>10% OFF</b>
      <img
        className={styles.remixIconsfillsystemstarS}
        alt=""
        src="/remixiconsfillsystemstarsfill.svg"
      />
      <div className={styles.menuAllChild8} />
      <b className={styles.b2}>4.2</b>
      <b className={styles.vnCi}>55.000 Vnđ / Cái</b>
      <b className={styles.pht2}>15 phút</b>
      <b className={styles.snSng1}>Sẵn sàng</b>
      <img
        className={styles.remixIconsfillsystemstarS2}
        alt=""
        src="/remixiconsfillsystemstarsfill.svg"
      />
      <div className={styles.menuAllChild21} />
      <b className={styles.pht6}>10 phút</b>
      <b className={styles.vnSet5}>1.300.000 Vnđ / Set</b>
      <div className={styles.menuAllChild22} />
      <b className={styles.b6}>4.2</b>
      <img className={styles.groupIcon1} alt="" src="/group-262.svg" />
      <div className={styles.menuAllChild23} />
      <b className={styles.pht7}>10 phút</b>
      <b className={styles.snSng4}>Sẵn sàng</b>
      <b className={styles.tmDng2}>Tạm dừng</b>
      <div className={styles.menuAllChild24} />
      <img
        className={styles.menuAllChild25}
        alt=""
        src="/rectangle-206@2x.png"
      />
      <img
        className={styles.menuAllChild26}
        alt=""
        src="/rectangle-208@2x.png"
      />
      <img
        className={styles.menuAllChild27}
        alt=""
        src="/rectangle-207@2x.png"
      />
      <b className={styles.domPerignonVintage}>Lẩu bò vị Thái</b>
      <b className={styles.ung}>Lẩu 2 ngăn</b>
      <b className={styles.combo}>Lẩu 2 ngăn</b>
      <b className={styles.vnSet6}>1.200.000 Vnđ / Set</b>
      <b className={styles.nhngLu}>Đồ ăn nhanh</b>
      <b className={styles.luCuaSng2}>Lẩu cua sông</b>
      <b className={styles.nhnLuB}>Burger King</b>
      <div className={styles.menuAllChild28} />
      <b className={styles.off6}>50% OFF</b>
      <div className={styles.menuAllChild29} />
      <b className={styles.off7}>20% OFF</b>
      <div className={styles.menuAllChild30} />
      <b className={styles.b7}>4.2</b>
      <div className={styles.menuAllChild31} />
      <b className={styles.off8}>10% OFF</b>
      <img
        className={styles.remixIconsfillsystemstarS3}
        alt=""
        src="/remixiconsfillsystemstarsfill.svg"
      />
      <div className={styles.menuAllChild32} />
      <b className={styles.b8}>4.2</b>
      <b className={styles.vnSet7}>55.000 Vnđ / Set</b>
      <b className={styles.pht8}>15 phút</b>
      <b className={styles.snSng5}>Sẵn sàng</b>
      <div className={styles.menuAllChild21} />
      <b className={styles.pht9}>5 phút</b>
      <b className={styles.vnSet8}>11.100.000 Vnđ / Set</b>
      <div className={styles.menuAllChild22} />
      <b className={styles.b6}>4.2</b>
      <img className={styles.groupIcon1} alt="" src="/group-262.svg" />
      <div className={styles.menuAllChild23} />
      <b className={styles.pht7}>10 phút</b>
      <b className={styles.snSng4}>Sẵn sàng</b>
      <b className={styles.tmDng2} style={tmDngStyle}>
        {tmDng}
      </b>
      <div className={styles.menuAllChild24} />
      <img
        className={styles.menuAllChild25}
        alt=""
        src="/rectangle-243@2x.png"
      />
      <img
        className={styles.menuAllChild26}
        alt=""
        src="/rectangle-244@2x.png"
      />
      <img
        className={styles.menuAllChild27}
        alt=""
        src="/rectangle-245@2x.png"
      />
      <b className={styles.domPerignonVintage}>Dom Perignon Vintage 2002</b>
      <b className={styles.ung}>Đồ uống</b>
      <b className={styles.combo}>Combo</b>
      <b className={styles.vnSet6}>1.500.000 Vnđ / Set</b>
      <b className={styles.nhngLu}>Đồ nhúng lẩu</b>
      <b className={styles.combo6Ngi}>Combo 6 người</b>
      <b className={styles.nhnLuB}>Nhân lẩu bò thập cẩm</b>
      <div className={styles.menuAllChild28} />
      <b className={styles.off6}>50% OFF</b>
      <div className={styles.menuAllChild29} />
      <b className={styles.off7}>20% OFF</b>
      <div className={styles.menuAllChild30} />
      <b className={styles.b7}>4.2</b>
      <div className={styles.menuAllChild31} />
      <b className={styles.off8}>10% OFF</b>
      <img
        className={styles.remixIconsfillsystemstarS3}
        alt=""
        src="/remixiconsfillsystemstarsfill.svg"
      />
      <div className={styles.menuAllChild32} />
      <b className={styles.b8}>4.2</b>
      <b className={styles.vnSet10}>345.000 Vnđ / Set</b>
      <b className={styles.pht8}>15 phút</b>
      <b className={styles.snSng5}>Sẵn sàng</b>
      <img
        className={styles.remixIconsfillsystemstarS5}
        alt=""
        src="/remixiconsfillsystemstarsfill.svg"
      />
      <div className={styles.menuAllChild45} />
      <b className={styles.pht12}>10 phút</b>
      <b className={styles.vnSet11}>1.300.000 Vnđ / Set</b>
      <div className={styles.menuAllChild46} />
      <b className={styles.b12}>4.2</b>
      <img className={styles.groupIcon3} alt="" src="/group-262.svg" />
      <div className={styles.menuAllChild47} />
      <b className={styles.pht13}>10 phút</b>
      <b className={styles.snSng8}>Sẵn sàng</b>
      <b className={styles.tmDng4}>Tạm dừng</b>
      <div className={styles.menuAllChild48} />
      <img
        className={styles.menuAllChild49}
        alt=""
        src="/rectangle-206@2x.png"
      />
      <img
        className={styles.menuAllChild50}
        alt=""
        src="/rectangle-208@2x.png"
      />
      <img
        className={styles.menuAllChild51}
        alt=""
        src="/rectangle-207@2x.png"
      />
      <b className={styles.thtBGiang}>Lẩu bò vị Thái</b>
      <b className={styles.lu2Ngn6}>Lẩu 2 ngăn</b>
      <b className={styles.lu2Ngn7}>Lẩu 2 ngăn</b>
      <b className={styles.vnSet12}>1.200.000 Vnđ / Set</b>
      <b className={styles.nNhanh3}>Đồ ăn nhanh</b>
      <b className={styles.combo7Ngi}>Lẩu cua sông</b>
      <b className={styles.burgerKing3}>Burger King</b>
      <div className={styles.menuAllChild52} />
      <b className={styles.off12}>50% OFF</b>
      <div className={styles.menuAllChild53} />
      <b className={styles.off13}>20% OFF</b>
      <div className={styles.menuAllChild54} />
      <b className={styles.b13}>4.2</b>
      <div className={styles.menuAllChild55} />
      <b className={styles.off14}>10% OFF</b>
      <img
        className={styles.remixIconsfillsystemstarS6}
        alt=""
        src="/remixiconsfillsystemstarsfill.svg"
      />
      <div className={styles.menuAllChild56} />
      <b className={styles.b14}>4.2</b>
      <b className={styles.vnSet13}>55.000 Vnđ / Set</b>
      <b className={styles.pht14}>15 phút</b>
      <b className={styles.snSng9}>Sẵn sàng</b>
      <div className={styles.menuAllChild45} />
      <b className={styles.pht12}>10 phút</b>
      <b className={styles.vnSet11}>1.300.000 Vnđ / Set</b>
      <div className={styles.menuAllChild46} />
      <b className={styles.b12}>4.2</b>
      <img className={styles.groupIcon3} alt="" src="/group-262.svg" />
      <div className={styles.menuAllChild47} />
      <b className={styles.pht13}>10 phút</b>
      <b className={styles.snSng8}>Sẵn sàng</b>
      <b className={styles.tmDng4}>Tạm dừng</b>
      <div className={styles.menuAllChild48} />
      <img
        className={styles.menuAllChild49}
        alt=""
        src="/rectangle-267@2x.png"
      />
      <img
        className={styles.menuAllChild50}
        alt=""
        src="/rectangle-268@2x.png"
      />
      <img
        className={styles.menuAllChild51}
        alt=""
        src="/rectangle-269@2x.png"
      />
      <b className={styles.thtBGiang}>Thịt bò giang Mỹ nhúng lẩu</b>
      <b className={styles.lu2Ngn6}>Đồ nhúng lẩu</b>
      <b className={styles.lu2Ngn7}>Combo</b>
      <b className={styles.vnSet12}>1.700.000 Vnđ / Set</b>
      <b className={styles.nNhanh3}>Đồ uống</b>
      <b className={styles.combo7Ngi}>Combo 7 người</b>
      <b className={styles.burgerKing3}>Dom Perignon Vintage 2012</b>
      <div className={styles.menuAllChild52} />
      <b className={styles.off12}>50% OFF</b>
      <div className={styles.menuAllChild53} />
      <b className={styles.off13}>20% OFF</b>
      <div className={styles.menuAllChild54} />
      <b className={styles.b13}>4.2</b>
      <div className={styles.menuAllChild55} />
      <b className={styles.off14}>10% OFF</b>
      <img
        className={styles.remixIconsfillsystemstarS6}
        alt=""
        src="/remixiconsfillsystemstarsfill.svg"
      />
      <div className={styles.menuAllChild56} />
      <b className={styles.b14}>4.2</b>
      <b className={styles.vnSet16}>6.678.940 Vnđ / Set</b>
      <b className={styles.pht17}>5 phút</b>
      <b className={styles.snSng9}>Sẵn sàng</b>
      <img
        className={styles.remixIconsfillsystemstarS8}
        alt=""
        src="/remixiconsfillsystemstarsfill.svg"
      />
      <div className={styles.menuAllChild69} />
      <b className={styles.pht18}>10 phút</b>
      <b className={styles.vnSet17}>1.300.000 Vnđ / Set</b>
      <div className={styles.menuAllChild70} />
      <b className={styles.b18}>4.2</b>
      <img className={styles.groupIcon5} alt="" src="/group-262.svg" />
      <div className={styles.menuAllChild71} />
      <b className={styles.pht19}>10 phút</b>
      <b className={styles.snSng12}>Sẵn sàng</b>
      <b className={styles.tmDng6}>Tạm dừng</b>
      <div className={styles.menuAllChild72} />
      <img
        className={styles.menuAllChild73}
        alt=""
        src="/rectangle-206@2x.png"
      />
      <img
        className={styles.menuAllChild74}
        alt=""
        src="/rectangle-208@2x.png"
      />
      <img
        className={styles.menuAllChild75}
        alt=""
        src="/rectangle-207@2x.png"
      />
      <b className={styles.cristalChampagneBrut}>Lẩu bò vị Thái</b>
      <b className={styles.lu2Ngn8}>Lẩu 2 ngăn</b>
      <b className={styles.lu2Ngn9}>Lẩu 2 ngăn</b>
      <b className={styles.vnSet18}>1.200.000 Vnđ / Set</b>
      <b className={styles.bnhTrngCun}>Đồ ăn nhanh</b>
      <b className={styles.luCuaSng4}>Lẩu cua sông</b>
      <b className={styles.mnCunTm}>Burger King</b>
      <div className={styles.menuAllChild76} />
      <b className={styles.off18}>50% OFF</b>
      <div className={styles.menuAllChild77} />
      <b className={styles.off19}>20% OFF</b>
      <div className={styles.menuAllChild78} />
      <b className={styles.b19}>4.2</b>
      <div className={styles.menuAllChild79} />
      <b className={styles.off20}>10% OFF</b>
      <img
        className={styles.remixIconsfillsystemstarS9}
        alt=""
        src="/remixiconsfillsystemstarsfill.svg"
      />
      <div className={styles.menuAllChild80} />
      <b className={styles.b20}>4.2</b>
      <b className={styles.vnSet19}>55.000 Vnđ / Set</b>
      <b className={styles.pht20}>15 phút</b>
      <b className={styles.snSng13}>Sẵn sàng</b>
      <div className={styles.menuAllChild69} />
      <b className={styles.pht18}>10 phút</b>
      <b className={styles.vnSet20}>10.514.500 Vnđ / Set</b>
      <div className={styles.menuAllChild70} />
      <b className={styles.b18}>4.2</b>
      <img className={styles.groupIcon5} alt="" src="/group-262.svg" />
      <div className={styles.menuAllChild71} />
      <b className={styles.pht19}>10 phút</b>
      <b className={styles.snSng12}>Sẵn sàng</b>
      <b className={styles.tmDng6}>Tạm dừng</b>
      <div className={styles.menuAllChild72} />
      <img
        className={styles.menuAllChild73}
        alt=""
        src="/rectangle-206@2x.png"
      />
      <img
        className={styles.menuAllChild74}
        alt=""
        src="/rectangle-292@2x.png"
      />
      <img
        className={styles.menuAllChild75}
        alt=""
        src="/rectangle-293@2x.png"
      />
      <b className={styles.cristalChampagneBrut}>Cristal Champagne Brut 2014</b>
      <b className={styles.lu2Ngn8}>Đồ uống</b>
      <b className={styles.lu2Ngn9}>Lẩu 2 ngăn</b>
      <b className={styles.vnSet18}>1.200.000 Vnđ / Set</b>
      <b className={styles.bnhTrngCun}>Bánh tráng cuốn</b>
      <b className={styles.luCuaSng4}>Lẩu cua sông</b>
      <b className={styles.mnCunTm}>Món cuốn tôm thịt</b>
      <div className={styles.menuAllChild76} />
      <b className={styles.off18}>50% OFF</b>
      <div className={styles.menuAllChild77} />
      <b className={styles.off19}>20% OFF</b>
      <div className={styles.menuAllChild78} />
      <b className={styles.b19}>4.2</b>
      <div className={styles.menuAllChild79} />
      <b className={styles.off20}>10% OFF</b>
      <img
        className={styles.remixIconsfillsystemstarS9}
        alt=""
        src="/remixiconsfillsystemstarsfill.svg"
      />
      <div className={styles.menuAllChild80} />
      <b className={styles.b20}>4.2</b>
      <b className={styles.vnSet22}>200.000 Vnđ / Set</b>
      <b className={styles.pht20}>15 phút</b>
      <b className={styles.snSng13}>Sẵn sàng</b>
      <img
        className={styles.remixIconsfillsystemstarS11}
        alt=""
        src="/remixiconsfillsystemstarsfill.svg"
      />
    </div>
  );
};

export default MenuALL;
