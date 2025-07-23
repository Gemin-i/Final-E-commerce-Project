import { memo, useState } from "react";
import styles from "./Product.module.css";
import Details from "../../../../containerComponents/productDetails/Details";
import Button from "../../../../../../../components/button/Button";

import heart from "../../../../../../../assets/imgs/home/heart.svg";
import eye from "../../../../../../../assets/imgs/home/eye.svg";
import ColorOption from "../../../../containerComponents/colorOption/ColorOption";

function Product({product, }) {

  const firstImg = product.colorOptions && product.colorOptions[0]
  const [img, setImg] = useState(firstImg)

  return (
    <div className={styles.item} key={product.id}>
      <div className={styles.imgContainer}>
        <div className={styles.imgContainer2}>
          <div>
            {!product.colorOptions ? (
              <img
                className={styles.productImg}
                src={product.img}
                alt={product.name}
              />
            ) : (
              <img
                className={styles.productImg}
                src={product.img[img]}
                alt={product.name}
              />
            )}
          </div>
        </div>

        <div className={styles.addToCart}>
          <p>Add To Cart</p>
        </div>
        {product.new && (
          <div className={styles.new}>
            <p>NEW</p>
          </div>
        )}
        <div className={styles.buttons} onClick={() => console.log("yes")}>
          <Button route={"/wishlist"} className={"heart"}>
            {heart}
          </Button>
          <Button route={"/view"} className={"eye"}>
            {eye}
          </Button>
        </div>
      </div>
      <Details product={product} homeContainer6={true} />
      {product.colorOptions && (
        <ColorOption setImg={setImg} colors={product.colorOptions} />
      )}
    </div>
  );
}

export default memo(Product);