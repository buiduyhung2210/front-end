import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Component.module.css";

export type ComponentType = {
  componentComponent14?: string;

  /** Style props */
  component14IconOverflow?: CSSProperties["overflow"];
  component14IconPosition?: CSSProperties["position"];
  component14IconTop?: CSSProperties["top"];
  component14IconLeft?: CSSProperties["left"];
};

const Component: FunctionComponent<ComponentType> = ({
  componentComponent14,
  component14IconOverflow,
  component14IconPosition,
  component14IconTop,
  component14IconLeft,
}) => {
  const component14IconStyle: CSSProperties = useMemo(() => {
    return {
      overflow: component14IconOverflow,
      position: component14IconPosition,
      top: component14IconTop,
      left: component14IconLeft,
    };
  }, [
    component14IconOverflow,
    component14IconPosition,
    component14IconTop,
    component14IconLeft,
  ]);

  return (
    <img
      className={styles.component14Icon}
      alt=""
      src={componentComponent14}
      style={component14IconStyle}
    />
  );
};

export default Component;
