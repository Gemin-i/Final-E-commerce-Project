import { memo } from "react";
import Texts from "../../../../components/texts/Texts";
import styles from "./BestSelling.module.css";
import Products from "./products/Products";
import LoadAll from "./loadAll/LoadAll";

function BestSelling() {
  return (
    <div className={styles.container}>
      <Texts
        texts={{
          blackText: "Best Selling Products",
          redText: "This Month",
        }}
      />
      <div className={styles.container2}>
        <Products />
        <LoadAll />
      </div>
    </div>
  );
}

export default memo(BestSelling);
