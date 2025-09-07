import { memo } from "react";
import styles from "./Product.module.css";

import Button from "../../../../../../../components/button/Button";
import Details from "../../../../containerComponents/productDetails/Details";

import heart from "../../../../../../../assets/imgs/home/heart.svg";
import eye from "../../../../../../../assets/imgs/home/eye.svg";
import LoadAll from "../LoadAll";
import { Link } from "react-router-dom";


function Product({product}) {

  return (
    <div className={styles.invisDiv}>
      <div className={styles.imgContainer}>
        <Link className={styles.imgContainer2} to={`/view/${product.id}`}>
          <img
            className={styles.productImg}
            src={product.img}
            alt={product.name}
          />
        </Link>
        <div className={styles.addToCart}>
          <p>Add To Cart</p>
        </div>
        <div className={styles.discountPercent}>
          <p>{product.percent}</p>
        </div>
        <div className={styles.buttons}>
          <Button route={"/wishlist"} className={"heart"}>
            {heart}
          </Button>
          <Button route={"/quickView"} className={"eye"}>
            {eye}
          </Button>
        </div>
      </div>
      <div>
        <Details product={product} homeContainer2={true} />
      </div>

    </div>
  );
}

export default memo(Product);
