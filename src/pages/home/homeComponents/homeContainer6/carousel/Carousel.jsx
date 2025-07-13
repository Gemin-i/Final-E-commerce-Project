import Glide from "@glidejs/glide";
import "@glidejs/glide/dist/css/glide.core.min.css";
import { memo, use, useEffect, useState } from "react";
import styles from "./Carousel.module.css";

import heart from "../../../../../assets/imgs/home/heart.svg";
import eye from "../../../../../assets/imgs/home/eye.svg";
import leftArrow from "../../../../../assets/imgs/home/homeContainer2/glide/leftArrow.svg";
import rightArrow from "../../../../../assets/imgs/home/homeContainer2/glide/rightArrow.svg";
import LoadAll from "./carouselComponents/LoadAll";
import Details from "../../productDetails/Details";
import Button from "../../../../../components/button/Button";

import dogFood from "../../../../../assets/imgs/home/homeContainer6/dogFood.svg";
import camera from "../../../../../assets/imgs/home/homeContainer6/camera.svg";
import computer from "../../../../../assets/imgs/home/homeContainer6/computer.svg";
import curologySet from "../../../../../assets/imgs/home/homeContainer6/curologySet.svg";
import jacket from "../../../../../assets/imgs/home/homeContainer6/jacket.svg";
import joystick from "../../../../../assets/imgs/home/homeContainer6/joystick.svg";
import sneakers from "../../../../../assets/imgs/home/homeContainer6/sneakers.svg";
import toyCar from "../../../../../assets/imgs/home/homeContainer6/toyCar.svg";

function Products({}) {
  const perview = (window.innerWidth - 210) / 300;

  useEffect(() => {
    const glide = new Glide(".glide5", {
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
    [
      {
        name: "Breed Dry Dog Food",
        img: dogFood,
        new: false,
        price: "$9.99",
        id: 9,
        colorOptions: false,
      },
      {
        name: "Curology Product Set",
        img: curologySet,
        new: false,
        price: "$99",
        id: 10,
        colorOptions: false,
      },
    ],
    [
      {
        name: "Quilted Satin Jacket",
        img: jacket,
        new: false,
        price: "$139",
        id: 11,
        colorOptions: true,
      },
      {
        name: "Jr. Zoom Soccer Cleats",
        img: sneakers,
        new: false,
        price: "$79",
        id: 12,
        colorOptions: false,
      },
    ],
    [
      {
        name: "Breed Dry Dog Food",
        img: joystick,
        new: true,
        price: "$110",
        id: 13,
        colorOptions: false,
      },
      {
        name: "ASUS FHD Gaming Laptop",
        img: computer,
        new: false,
        price: "$700",
        id: 14,
        colorOptions: false,
      },
    ],
    [
      {
        name: "CANON EOS DSLR Camera",
        img: camera,
        new: false,
        price: "$249",
        id: 15,
        colorOptions: false,
      },
      {
        name: "Electric Car For Kids",
        img: toyCar,
        new: true,
        price: "$399",
        id: 16,
        colorOptions: false,
      },
    ],
  ];

  return (
    <div>
      <div className={`glide5 ${styles.glide5}`}>
        <div className="glide__track" data-glide-el="track">
          <ul className={`glide__slides ${styles.slides}`}>
            {products.map((product, index) => (
              <li
                key={product[0].id}
                className={`glide__slide ${styles.slide}`}
              >
                {product.map((product, index) => (
                  <div key={product.id}>
                    <div className={styles.imgContainer}>
                      <div className={styles.imgContainer2}>
                        <div>
                          <img
                            className={styles.productImg}
                            src={product.img}
                            alt={product.name}
                          />
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
                      <div className={styles.buttons}>
                        <Button className={"heart"}>{heart}</Button>
                        <Button className={"eye"}>{eye}</Button>
                      </div>
                    </div>
                    <div>
                      <Details product={product} homeContainer6={true} />
                    </div>
                  </div>
                ))}
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
