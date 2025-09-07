import Glide from "@glidejs/glide";
import "@glidejs/glide/dist/css/glide.core.min.css";
import { memo, use, useEffect, useState } from "react";
import styles from "./Products.module.css";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import joystick from "../../../../../assets/imgs/home/homeContainer2/glide/products/joystick.svg";
import keyboard from "../../../../../assets/imgs/home/homeContainer2/glide/products/keyboard.svg";
import monitor from "../../../../../assets/imgs/home/homeContainer2/glide/products/monitor.svg";
import chair from "../../../../../assets/imgs/home/homeContainer2/glide/products/chair.svg";
import leftArrow from "../../../../../assets/imgs/home/homeContainer2/glide/leftArrow.svg";
import rightArrow from "../../../../../assets/imgs/home/homeContainer2/glide/rightArrow.svg";
import LoadAll from "./glideComponents/LoadAll";
import Product from "./glideComponents/products/Product";
import jacket from "../../../../../assets/imgs/home/homeContainer6/jacket.svg";
import sneakers from "../../../../../assets/imgs/home/homeContainer6/sneakers.svg";

function Products({}) {
  const perview = (window.innerWidth - 210) / 300;

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
    {
      name: "Quilted Satin Jacket",
      img: jacket,
      new: false,
      percent: "-15%",
      pastPrice: "$164",
      price: "$139",
      id: 11,
      colorOptions: false,
    },
    {
      name: "Jr. Zoom Soccer Cleats",
      img: sneakers,
      new: false,
      percent: "-21%",
      pastPrice: "$100",
      price: "$79",
      id: 12,
      colorOptions: ["#EEFF61", "#DB4444"],
    },
  ];

  return (
    <div className={styles.container1}>
      <div className={styles.controls}>
        <button className={`button-prev ${styles.control}`}>
          <img src={leftArrow} alt="back" />
        </button>
        <button className={`button-next ${styles.control}`}>
          <img src={rightArrow} alt="forwards" />
        </button>
      </div>
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: ".button-next",
          prevEl: ".button-prev",
        }}
        loop
        spaceBetween={30}
        slidesPerView={perview}
        className={styles.glide2}
      >
        {products.map((product) => (
          <SwiperSlide
            key={product.id}
            className={`glide__slide ${styles.slide}`}
          >
            <Product product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
      <LoadAll />
    </div>
  );
}

export default memo(Products);
