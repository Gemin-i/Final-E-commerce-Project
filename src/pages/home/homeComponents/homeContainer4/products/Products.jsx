import Button from "../../../../../components/button/Button";
import styles from "./Products.module.css";
import { memo } from "react";

import coat from "../../../../../assets/imgs/home/homeContainer4/coat.svg";
import bag from "../../../../../assets/imgs/home/homeContainer4/bag.svg";
import cooler from "../../../../../assets/imgs/home/homeContainer4/cooler.svg";
import bookShelf from "../../../../../assets/imgs/home/homeContainer4/bookshelf.svg";

import eye from "../../../../../assets/imgs/home/eye.svg";
import heart from "../../../../../assets/imgs/home/heart.svg";
import Details from "../../productDetails/Details";
import Rating from "../../rating/Rating";

function Products() {
  let products = [
    {
      name: "The North Coat",
      img: coat,
      price: "$260",
      pastPrice: "$360",
      id: 5,
    },
    {
      name: "Gucci Duffle Bag",
      img: bag,
      price: "$960",
      pastPrice: "$1160",
      id: 6,
    },
    {
      name: "RGB Liquid CPU Cooler",
      img: cooler,
      price: "$160",
      pastPrice: "$170",
      id: 7,
    },
    {
      name: "Small BookShelf",
      img: bookShelf,
      price: "$360",
      pastPrice: false,
      id: 8,
    },
  ];

  const elements = Math.floor((window.innerWidth - 210) / 300);
  products = products.slice(0, elements);

  return (
    <div>
      <ul className={styles.container}>
        {products.map((product) => (
          <li key={product.id}>
            <div className={styles.product}>
              <img src={product.img} alt="" />
              <div className={styles.buttons}>
                <Button route={"/wishlist"} className={"heart"}>
                  {heart}
                </Button>
                <Button route={"/quickView"} className={"eye"}>
                  {eye}
                </Button>
              </div>
            </div>
            <Details homeContainer2={true} product={product} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default memo(Products);
