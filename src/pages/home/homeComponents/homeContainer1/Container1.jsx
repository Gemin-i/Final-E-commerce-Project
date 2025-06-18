import Carousel from "./glide/Glide";
import ProductTitles from "./productTitles/ProductTitles";
import styles from "./Container1.module.css";
import { memo } from "react";

function Container1() {
    return (
      <div className={styles.titleSlider}>
        <ProductTitles />
        <Carousel />
      </div>
    );
}

export default memo(Container1);
