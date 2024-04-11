import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./TypeDefault.module.css";

export type TypeDefaultType = {
  typeDefaultTypeDefault?: string;

  /** Style props */
  typeDefaultIconWidth?: CSSProperties["width"];
  typeDefaultIconHeight?: CSSProperties["height"];
  typeDefaultIconPosition?: CSSProperties["position"];
  typeDefaultIconTop?: CSSProperties["top"];
  typeDefaultIconRight?: CSSProperties["right"];
  typeDefaultIconBottom?: CSSProperties["bottom"];
  typeDefaultIconLeft?: CSSProperties["left"];
  typeDefaultIconMaxHeight?: CSSProperties["maxHeight"];
};

const TypeDefault: FunctionComponent<TypeDefaultType> = ({
  typeDefaultTypeDefault,
  typeDefaultIconWidth,
  typeDefaultIconHeight,
  typeDefaultIconPosition,
  typeDefaultIconTop,
  typeDefaultIconRight,
  typeDefaultIconBottom,
  typeDefaultIconLeft,
  typeDefaultIconMaxHeight,
}) => {
  const typeDefaultIconStyle: CSSProperties = useMemo(() => {
    return {
      width: typeDefaultIconWidth,
      height: typeDefaultIconHeight,
      position: typeDefaultIconPosition,
      top: typeDefaultIconTop,
      right: typeDefaultIconRight,
      bottom: typeDefaultIconBottom,
      left: typeDefaultIconLeft,
      maxHeight: typeDefaultIconMaxHeight,
    };
  }, [
    typeDefaultIconWidth,
    typeDefaultIconHeight,
    typeDefaultIconPosition,
    typeDefaultIconTop,
    typeDefaultIconRight,
    typeDefaultIconBottom,
    typeDefaultIconLeft,
    typeDefaultIconMaxHeight,
  ]);

  return (
    <img
      className={styles.typedefaultIcon}
      alt=""
      src={typeDefaultTypeDefault}
      style={typeDefaultIconStyle}
    />
  );
};

export default TypeDefault;
