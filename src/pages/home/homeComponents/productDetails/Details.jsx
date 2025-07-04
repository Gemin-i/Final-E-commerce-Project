import { memo } from "react";

import styles from "./Details.module.css"
import { Link } from "react-router-dom"



function Details({product}) {
    console.log(product.after);
    
    return (
      <>
        <Link className={styles.link2} to={`product/${product.id}`}>
          <p className={styles.productName}>{product.name}</p>
        </Link>
        <div className={styles.prices}>
          <p className={styles.priceAfter}>{product.price}</p>
          {product.pastPrice && <p className={styles.priceBefore}>{product.pastPrice}</p>}
        </div>
      </>
    );
}

export default memo(Details)