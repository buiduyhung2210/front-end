import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Group.module.css";

export type GroupType = {
  groupGroup13?: string;

  /** Style props */
  groupIconOverflow?: CSSProperties["overflow"];
  groupIconPosition?: CSSProperties["position"];
  groupIconTop?: CSSProperties["top"];
  groupIconLeft?: CSSProperties["left"];
};

const Group: FunctionComponent<GroupType> = ({
  groupGroup13,
  groupIconOverflow,
  groupIconPosition,
  groupIconTop,
  groupIconLeft,
}) => {
  const groupIcon2Style: CSSProperties = useMemo(() => {
    return {
      overflow: groupIconOverflow,
      position: groupIconPosition,
      top: groupIconTop,
      left: groupIconLeft,
    };
  }, [groupIconOverflow, groupIconPosition, groupIconTop, groupIconLeft]);

  return (
    <img
      className={styles.groupIcon}
      alt=""
      src={groupGroup13}
      style={groupIcon2Style}
    />
  );
};

export default Group;
