import { memo } from "react";
import Texts from "../../../../components/texts/Texts";
import styles from "./Explore.module.css"
import Products from "../productsGlide/Products";

function Explore() {
    return (
      <div className={styles.container}>
        <div className={styles.textsContainer}>
          <Texts
            texts={{
              blackText: "Explore Our Products",
              redText: "Our Products",
            }}
          />
        </div>

        <Products />
      </div>
    );
}

export default memo(Explore)