import Glide from "@glidejs/glide";
import "@glidejs/glide/dist/css/glide.core.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { memo, use, useEffect, useState } from "react";
import styles from "./Carousel.module.css";
import ColorOption from "../../containerComponents/colorOption/ColorOption";

import leftArrow from "../../../../../assets/imgs/home/homeContainer2/glide/leftArrow.svg";
import rightArrow from "../../../../../assets/imgs/home/homeContainer2/glide/rightArrow.svg";
import LoadAll from "./carouselComponents/LoadAll";
import Details from "../../containerComponents/productDetails/Details";
import Button from "../../../../../components/button/Button";

import dogFood from "../../../../../assets/imgs/home/homeContainer6/dogFood.svg";
import camera from "../../../../../assets/imgs/home/homeContainer6/camera.svg";
import computer from "../../../../../assets/imgs/home/homeContainer6/computer.svg";
import curologySet from "../../../../../assets/imgs/home/homeContainer6/curologySet.svg";
import jacket from "../../../../../assets/imgs/home/homeContainer6/jacket.svg";
import joystick from "../../../../../assets/imgs/home/homeContainer6/joystick.svg";
import sneakers from "../../../../../assets/imgs/home/homeContainer6/sneakers.svg";
import redSneakers from "../../../../../assets/imgs/home/homeContainer6/sneakersRed.png";
import toyCar from "../../../../../assets/imgs/home/homeContainer6/toyCar.svg";
import blue from "../../../../../assets/imgs/home/homeContainer6/blue.jpeg";
import joystick2 from "../../../../../assets/imgs/home/homeContainer2/glide/products/joystick.svg";
import keyboard from "../../../../../assets/imgs/home/homeContainer2/glide/products/keyboard.svg";
import monitor from "../../../../../assets/imgs/home/homeContainer2/glide/products/monitor.svg";
import chair from "../../../../../assets/imgs/home/homeContainer2/glide/products/chair.svg";
import Product from "./carouselComponents/product/Product";

function Products({}) {
  const [currentImg, setCurrentImg] = useState("");

  const perview = (window.innerWidth - 210) / 300;

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
        colorOptions: false,
      },
      {
        name: "Jr. Zoom Soccer Cleats",
        img: { "#EEFF61": sneakers, "#DB4444": redSneakers },
        new: false,
        price: "$79",
        id: 12,
        colorOptions: ["#EEFF61", "#DB4444"],
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
        img: { "#FB1314": toyCar, "#0000FF": blue },
        new: true,
        price: "$399",
        id: 16,
        colorOptions: ["#FB1314", "#0000FF"],
      },
    ],
    [
      {
        name: "HAVIT HV-G92 Gamepad",
        img: joystick2,
        price: "$96",
        id: 17,
        colorOptions: false,
        new: false,
      },
      {
        name: "IPS LCD Gaming Monitor",
        img: monitor,
        price: "$280",
        id: 18,
        colorOptions: false,
        new: false,
      },
    ],
    [
      {
        name: "S-Series Comfort Chair",
        img: chair,
        price: "$240",
        id: 19,
        colorOptions: false,
        new: false,
      },
      {
        name: "AK-900 Wired Keyboard",
        img: keyboard,
        price: "$546",
        id: 20,
        colorOptions: false,
        new: false,
      },
    ],
  ];

  return (
    <div className={styles.container1}>
      <div className={styles.controls}>
        <div className={`button-prev ${styles.control}`}>
          <img src={leftArrow} alt="back" />
        </div>
        <div className={`button-next ${styles.control}`}>
          <img src={rightArrow} alt="forwards" />
        </div>
      </div>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation={{
          nextEl: ".button-next",
          prevEl: ".button-prev",
        }}
        pagination={{ clickable: true }}
        spaceBetween={30}
        slidesPerView={perview}
        loop
        className={`swiper ${styles.glide5}`}
      >
        {products.map((product, index) => (
          <SwiperSlide key={product[0].id} className={styles.slide}>
            {product.map((product, index) => (
              <Product key={product.id} product={product} />
            ))}
          </SwiperSlide>
        ))}
      </Swiper>
      <LoadAll />
    </div>
  );
}

export default memo(Products);
