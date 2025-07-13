import { memo } from "react";

import styles from "./Details.module.css"
import { Link } from "react-router-dom"
import Rating from "../rating/Rating";



function Details({product, homeContainer2=false, homeContainer6=false}) {
    
    return (
      <>
        <Link className={styles.link2} to={`product/${product.id}`}>
          <p className={styles.productName}>{product.name}</p>
        </Link>
        <div className={styles.prices}>
          <p className={styles.priceAfter}>{product.price}</p>
          {product.pastPrice && (
            <p className={styles.priceBefore}>{product.pastPrice}</p>
          )}
          {homeContainer6 && <Rating />}
        </div>
        {homeContainer2 && <Rating />}
      </>
    );
}

export default memo(Details)