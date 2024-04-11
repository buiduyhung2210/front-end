import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./GroupComponent.module.css";

export type GroupComponentType = {
  group?: string;
  group1?: string;

  /** Style props */
  groupDivWidth?: CSSProperties["width"];
  groupDivHeight?: CSSProperties["height"];
  groupDivPosition?: CSSProperties["position"];
  groupDivTop?: CSSProperties["top"];
  groupDivLeft?: CSSProperties["left"];
  groupDivBoxShadow?: CSSProperties["boxShadow"];
  ellipseDivBackgroundColor?: CSSProperties["backgroundColor"];
  groupIconWidth?: CSSProperties["width"];
  groupIconLeft?: CSSProperties["left"];
  groupIconHeight?: CSSProperties["height"];
  groupIconWidth1?: CSSProperties["width"];
  groupIconTop?: CSSProperties["top"];
  groupIconRight?: CSSProperties["right"];
};

const GroupComponent: FunctionComponent<GroupComponentType> = ({
  group,
  group1,
  groupDivWidth,
  groupDivHeight,
  groupDivPosition,
  groupDivTop,
  groupDivLeft,
  groupDivBoxShadow,
  ellipseDivBackgroundColor,
  groupIconWidth,
  groupIconLeft,
  groupIconHeight,
  groupIconWidth1,
  groupIconTop,
  groupIconRight,
}) => {
  const groupDivStyle: CSSProperties = useMemo(() => {
    return {
      width: groupDivWidth,
      height: groupDivHeight,
      position: groupDivPosition,
      top: groupDivTop,
      left: groupDivLeft,
      boxShadow: groupDivBoxShadow,
    };
  }, [
    groupDivWidth,
    groupDivHeight,
    groupDivPosition,
    groupDivTop,
    groupDivLeft,
    groupDivBoxShadow,
  ]);

  const ellipseDivStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: ellipseDivBackgroundColor,
    };
  }, [ellipseDivBackgroundColor]);

  const groupIconStyle: CSSProperties = useMemo(() => {
    return {
      width: groupIconWidth,
      left: groupIconLeft,
    };
  }, [groupIconWidth, groupIconLeft]);

  const groupIcon1Style: CSSProperties = useMemo(() => {
    return {
      height: groupIconHeight,
      width: groupIconWidth1,
      top: groupIconTop,
      right: groupIconRight,
    };
  }, [groupIconHeight, groupIconWidth1, groupIconTop, groupIconRight]);

  return (
    <div className={styles.ellipseParent} style={groupDivStyle}>
      <div className={styles.componentChild} style={ellipseDivStyle} />
      <div className={styles.cutlery4}>
        <img
          className={styles.groupIcon}
          alt=""
          src={group}
          style={groupIconStyle}
        />
        <img
          className={styles.groupIcon1}
          alt=""
          src={group1}
          style={groupIcon1Style}
        />
      </div>
    </div>
  );
};

export default GroupComponent;
