import styles from "./Texts.module.css";
import redRectangle from "../../assets/imgs/home/redRectangle.svg";
import { memo } from "react";

function Texts( {texts} ) {
  return (
    <div className={styles.textContainer}>
      <div className={styles.text1Div}>
        <div>
          <img src={redRectangle} alt="" />
        </div>
        <p>{texts.redText}</p>
      </div>
      <p className={styles.text2}>{texts.blackText}</p>
    </div>
  );
}

export default memo(Texts);
