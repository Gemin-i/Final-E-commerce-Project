import Glide from "@glidejs/glide";
import "@glidejs/glide/dist/css/glide.core.min.css";
import { memo, use, useEffect, useState } from "react";
import styles from "./Products.module.css";
import { Link } from "react-router-dom";

import heart from "../../../../assets/imgs/home/heart.svg";
import eye from "../../../../assets/imgs/home/eye.svg";
import joystick from "../../../../assets/imgs/home/homeContainer2/glide/products/joystick.svg";
import keyboard from "../../../../assets/imgs/home/homeContainer2/glide/products/keyboard.svg";
import monitor from "../../../../assets/imgs/home/homeContainer2/glide/products/monitor.svg";
import chair from "../../../../assets/imgs/home/homeContainer2/glide/products/chair.svg";
import leftArrow from "../../../../assets/imgs/home/homeContainer2/glide/leftArrow.svg";
import rightArrow from "../../../../assets/imgs/home/homeContainer2/glide/rightArrow.svg";
import Rating from "../rating/Rating";
import LoadAll from "./glideComponents/LoadAll";
import Details from "../productDetails/Details";
import Button from "../../../../components/button/Button";

function Products() {
  const perview = (window.innerWidth - 210) / 300;
  console.log(perview);

  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const glide = new Glide(".glide-2", {
      type: "carousel",
      gap: 30,
      perView: perview,
      startAt: 0,
      clone: false,
    });

    glide.mount();

    return () => {
      glide.destroy();
    };
  }, []);

  const products = [
    {
      name: "HAVIT HV-G92 Gamepad",
      img: joystick,
      percent: "-40%",
      pastPrice: "$160",
      price: "$96",
      id: 0,
    },
    {
      name: "IPS LCD Gaming Monitor",
      img: monitor,
      percent: "-30%",
      pastPrice: "$400",
      price: "$280",
      id: 1,
    },
    {
      name: "S-Series Comfort Chair",
      img: chair,
      percent: "-25%",
      pastPrice: "$320",
      price: "$240",
      id: 2,
    },
    {
      name: "AK-900 Wired Keyboard",
      img: keyboard,
      percent: "-35%",
      pastPrice: "$840",
      price: "$546",
      id: 3,
    },
    {
      name: "S-Series Comfort Chair",
      img: chair,
      percent: "-25%",
      pastPrice: "$320",
      price: "$240",
      id: 4,
    },
  ];

  return (
    <div>
      <div className={`glide-2 ${styles.glide2}`}>
        <div className="glide__track" data-glide-el="track">
          <ul className={`glide__slides ${styles.slides}`}>
            {products.map((product, index) => (
              <li key={product.id} className={`glide__slide ${styles.slide}`}>
                <div className={styles.imgContainer}>
                  <div className={styles.link}>
                    <img
                      className={styles.productImg}
                      src={product.img}
                      alt={product.name}
                    />
                  </div>
                  <div className={styles.addToCart}>
                    <p>Add To Cart</p>
                  </div>
                  <div className={styles.discountPercent}>
                    <p>{product.percent}</p>
                  </div>
                  <div className={styles.buttons}>
                    <Button className={"heart"}>{heart}</Button>
                    <Button className={"eye"}>{eye}</Button>
                  </div>
                </div>
                <Details product={product} />
                <Rating />
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.controls} data-glide-el="controls">
          <button className={styles.control} data-glide-dir="<">
            <img src={leftArrow} alt="back" />
          </button>
          <button className={styles.control} data-glide-dir=">">
            <img src={rightArrow} alt="forwards" />
          </button>
        </div>
      </div>
      <LoadAll />
    </div>
  );
}

export default memo(Products);
