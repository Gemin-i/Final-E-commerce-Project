import { memo } from "react";
import styles from "./UpperSide.module.css";
import Texts from "./upperSideComponents/texts/Texts";
import Timer from "./upperSideComponents/timer/timer";

function UpperSide() {
  return (
    <div className={styles.container}>
      <div className={styles.container2}>
        <Texts />
        <Timer />
      </div>
    </div>
  );
}

export default memo(UpperSide);
