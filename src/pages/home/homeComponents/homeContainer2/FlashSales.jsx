import styles from "./flashSales.module.css";
import { memo } from "react";

import Products from "../productsGlide/Products";
import UpperSide from "./flashSalesComponents/upperSide/UpperSide";

function FlashSales() {
  return (
    <div className={styles.container}>
      <UpperSide />
      <Products/>
    </div>
  );
}

export default memo(FlashSales);
