import styles from "./Carousel.module.css";
import { memo, useEffect } from "react";
import { Link } from "react-router-dom";

import Glide from "@glidejs/glide";
import "@glidejs/glide/dist/css/glide.core.min.css";

import leftArrow from "../../../../../assets/imgs/home/homeContainer2/glide/leftArrow.svg";
import rightArrow from "../../../../../assets/imgs/home/homeContainer2/glide/rightArrow.svg";
import phone from "../../../../../assets/imgs/home/homeContainer3/phone.svg";
import computer from "../../../../../assets/imgs/home/homeContainer3/computer.svg";
import smartWatch from "../../../../../assets/imgs/home/homeContainer3/watch.svg";
import camera from "../../../../../assets/imgs/home/homeContainer3/camera.svg";
import headphones from "../../../../../assets/imgs/home/homeContainer3/headphones.svg";
import gamepad from "../../../../../assets/imgs/home/homeContainer3/gamepad.svg";

import phoneWhite from "../../../../../assets/imgs/home/homeContainer3/phoneWhite.svg";
import computerWhite from "../../../../../assets/imgs/home/homeContainer3/computerWhite.svg";
import smartWatchWhite from "../../../../../assets/imgs/home/homeContainer3/watchWhite.svg";
import cameraWhite from "../../../../../assets/imgs/home/homeContainer3/cameraWhite.svg";
import headphonesWhite from "../../../../../assets/imgs/home/homeContainer3/headphonesWhite.svg";
import gamepadWhite from "../../../../../assets/imgs/home/homeContainer3/gamepadWhite.svg";



function Carousel() {
  const slides = (window.innerWidth - 210) / 200;

  useEffect(() => {
    const glide = new Glide(".glide3", {
      type: "carousel",
      perView: slides,
      gap: 30,
      startAt: 0,
    });

    glide.mount();

    return () => glide.destroy()

  }, []);
  const categories = [
    { name: "Phones", image: phone, image2: phoneWhite },
    { name: "Computers", image: computer, image2: computerWhite },
    { name: "SmartWatch", image: smartWatch, image2: smartWatchWhite },
    { name: "Camera", image: camera, image2: cameraWhite },
    { name: "HeadPhones", image: headphones, image2: headphonesWhite },
    { name: "Gaming", image: gamepad, image2: gamepadWhite },
  ];

  return (
    <div className={`glide3 ${styles.glide3}`}>
      <div className={`glide__track ${styles.track}`} data-glide-el="track">
        <ul className={`glide__slides ${styles.slides}`}>
          {categories.map((category) => (
            <li key={category.name} className={`glide__slide ${styles.slide}`}>
                <Link className={styles.route} to={`/category/${category.name.toLocaleLowerCase()}`}>
                  <img
                    src={category.image}
                    alt={category.name}
                    className={styles.imgs}
                  />
                  <img src={category.image2} alt="" className={styles.image2} />
                  <p className={styles.categories}>{category.name}</p>
                </Link>
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
  );
}

export default memo(Carousel);
