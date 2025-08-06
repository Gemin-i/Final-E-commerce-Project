import Glide from "@glidejs/glide";
import "@glidejs/glide/dist/css/glide.core.min.css";
import { memo, use, useEffect, useState } from "react";
import styles from "./Products.module.css";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import heart from "../../../../../assets/imgs/home/heart.svg";
import eye from "../../../../../assets/imgs/home/eye.svg";
import joystick from "../../../../../assets/imgs/home/homeContainer2/glide/products/joystick.svg";
import keyboard from "../../../../../assets/imgs/home/homeContainer2/glide/products/keyboard.svg";
import monitor from "../../../../../assets/imgs/home/homeContainer2/glide/products/monitor.svg";
import chair from "../../../../../assets/imgs/home/homeContainer2/glide/products/chair.svg";
import leftArrow from "../../../../../assets/imgs/home/homeContainer2/glide/leftArrow.svg";
import rightArrow from "../../../../../assets/imgs/home/homeContainer2/glide/rightArrow.svg";
import LoadAll from "./glideComponents/LoadAll";
import Details from "../productDetails/Details";
import Button from "../../../../../components/button/Button";
import Product from "./glideComponents/products/Product";
import jacket from "../../../../../assets/imgs/home/homeContainer6/jacket.svg";
import sneakers from "../../../../../assets/imgs/home/homeContainer6/sneakers.svg";

function Products({}) {
  const perview = (window.innerWidth - 210) / 300;

  // useEffect(() => {
  //   const glide = new Glide(".glide2", {
  //     type: "carousel",
  //     gap: 30,
  //     perView: perview,
  //     startAt: 0,
  //     clone: false,
  //   });

  //   glide.mount();

  //   return () => {
  //     glide.destroy();
  //   };
  // }, []);

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
    // <div>
    //   <div className={`glide2 ${styles.glide2}`}>
    //     <div className="glide__track" data-glide-el="track">
    //       <ul className={`glide__slides ${styles.slides}`}>
    //         {products.map((product, index) => (
    //           <li key={product.id} className={`glide__slide ${styles.slide}`}>
    // <div className={styles.imgContainer}>
    //   <div className={styles.imgContainer2}>
    //     <img
    //       className={styles.productImg}
    //       src={product.img}
    //       alt={product.name}
    //     />
    //   </div>
    //   <div className={styles.addToCart}>
    //     <p>Add To Cart</p>
    //   </div>
    //   <div className={styles.discountPercent}>
    //     <p>{product.percent}</p>
    //   </div>
    //   <div className={styles.buttons}>
    //     <Button route={"/wishlist"} className={"heart"}>
    //       {heart}
    //     </Button>
    //     <Button route={"/quickView"} className={"eye"}>
    //       {eye}
    //     </Button>
    //   </div>
    // </div>
    // <div>
    //   <Details product={product} homeContainer2={true} />
    // </div>
    //           </li>
    //         ))}
    //       </ul>
    //     </div>
    //     <div className={styles.controls} data-glide-el="controls">
    //       <button className={styles.control} data-glide-dir="<">
    //         <img src={leftArrow} alt="back" />
    //       </button>
    //       <button className={styles.control} data-glide-dir=">">
    //         <img src={rightArrow} alt="forwards" />
    //       </button>
    //     </div>
    //   </div>
    //   <LoadAll />
    // </div>
  );
}

export default memo(Products);
