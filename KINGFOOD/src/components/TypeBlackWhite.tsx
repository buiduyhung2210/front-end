import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./TypeBlackWhite.module.css";

export type TypeBlackWhiteType = {
  typeBlackWhiteTypeBlackWh?: string;

  /** Style props */
  typeBlackWhiteWidth?: CSSProperties["width"];
  typeBlackWhiteHeight?: CSSProperties["height"];
  typeBlackWhitePosition?: CSSProperties["position"];
  typeBlackWhiteTop?: CSSProperties["top"];
  typeBlackWhiteRight?: CSSProperties["right"];
  typeBlackWhiteBottom?: CSSProperties["bottom"];
  typeBlackWhiteLeft?: CSSProperties["left"];
  typeBlackWhiteMaxHeight?: CSSProperties["maxHeight"];
};

const TypeBlackWhite: FunctionComponent<TypeBlackWhiteType> = ({
  typeBlackWhiteTypeBlackWh,
  typeBlackWhiteWidth,
  typeBlackWhiteHeight,
  typeBlackWhitePosition,
  typeBlackWhiteTop,
  typeBlackWhiteRight,
  typeBlackWhiteBottom,
  typeBlackWhiteLeft,
  typeBlackWhiteMaxHeight,
}) => {
  const typeBlackWhiteStyle: CSSProperties = useMemo(() => {
    return {
      width: typeBlackWhiteWidth,
      height: typeBlackWhiteHeight,
      position: typeBlackWhitePosition,
      top: typeBlackWhiteTop,
      right: typeBlackWhiteRight,
      bottom: typeBlackWhiteBottom,
      left: typeBlackWhiteLeft,
      maxHeight: typeBlackWhiteMaxHeight,
    };
  }, [
    typeBlackWhiteWidth,
    typeBlackWhiteHeight,
    typeBlackWhitePosition,
    typeBlackWhiteTop,
    typeBlackWhiteRight,
    typeBlackWhiteBottom,
    typeBlackWhiteLeft,
    typeBlackWhiteMaxHeight,
  ]);

  return (
    <img
      className={styles.typeblackWhite}
      alt=""
      src={typeBlackWhiteTypeBlackWh}
      style={typeBlackWhiteStyle}
    />
  );
};

export default TypeBlackWhite;
