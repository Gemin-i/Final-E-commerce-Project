import styles from "./flashSales.module.css";
import { memo } from "react";

import Timer from "./flashSalesComponents/upperSide/upperSideComponents/timer/timer";
import Texts from "./flashSalesComponents/upperSide/upperSideComponents/texts/Texts";

function FlashSales() {
  return (
    <div className={styles.container}>
        <div className={styles.container2}>
            <div className={styles.container3}>
                <Texts/>
                <Timer />
            </div>   
        </div>
    </div>
  );
}

export default memo(FlashSales);
