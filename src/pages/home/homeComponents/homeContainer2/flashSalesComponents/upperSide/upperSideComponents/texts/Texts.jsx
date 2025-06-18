import styles from "./Texts.module.css";
import redRectangle from "../../../../../../../../assets/imgs/home/homeContainer2/timerSection/redRectangle.svg";
import { memo } from "react";

function Texts() {
  return (
    <div className={styles.textContainer}>
      <div className={styles.text1Div}>
        <div>
          <img src={redRectangle} alt="" />
        </div>
        <p>Today's</p>
      </div>
      <p className={styles.text2}>Flash Sales</p>
    </div>
  );
}

export default memo(Texts);
