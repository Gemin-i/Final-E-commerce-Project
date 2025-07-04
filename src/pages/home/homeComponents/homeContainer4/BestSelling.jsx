import { memo } from "react";
import Texts from "../../../../components/texts/Texts";
import styles from "./BestSelling.module.css";
import Products from "./products/Products";

function BestSelling() {
  return (
    <div className={styles.container}>
      <Texts
        texts={{
          blackText: "Best Selling Products",
          redText: "This Month",
        }}
      />
      <Products />
    </div>
  );
}

export default memo(BestSelling);
