import styles from "./Carousel.module.css";
import { memo } from "react";

import leftArrow from "../../../../../assets/imgs/home/homeContainer2/glide/leftArrow.svg";
import rightArrow from "../../../../../assets/imgs/home/homeContainer2/glide/rightArrow.svg";

function Carousel() {
  const categories = [
    { name: "Phones", image: "https://via.placeholder.com/150" },
    { name: "Computers", image: "https://via.placeholder.com/150" },
    { name: "SmartWatch", image: "https://via.placeholder.com/150" },
    { name: "Camera", image: "https://via.placeholder.com/150" },
    { name: "HeadPhones", image: "https://via.placeholder.com/150" },
    { name: "Gaming", image: "https://via.placeholder.com/150" },
  ];

  return (
    <div className="glide">
      <div className="glide__track" data-glide-el="track">
        <ul className="glide__slides">
          {categories.map((category, index) => (
            <li key={category} className="glide__slide">
              <img src="" alt="" />
              <p></p>
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
