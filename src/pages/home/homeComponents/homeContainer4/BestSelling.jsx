import { memo } from "react";
import Texts from "../../../../components/texts/Texts";
import styles from "./BestSelling.module.css"

function BestSelling() {
    return (
      <div className={styles.container}>
        <Texts texts={{blackText: "Best Selling Products", redText: "This Month"}}/>
      </div>
    );
}

export default memo(BestSelling)