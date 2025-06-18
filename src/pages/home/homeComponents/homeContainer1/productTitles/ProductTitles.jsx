import { memo } from "react";
import styles from "./ProductTitles.module.css";
import arrow from "../../../../../assets/imgs/home/homeContainer1/sections/arrow.svg";
import { Link } from "react-router-dom";

function ProductTitles() {

    const fashions = ["Women's Fashion", "Men's Fashion"]
    const fashionsRoutes = [
        "/womens-fashion",
        "/mens-fashion",
    ]; 
    const sections = [
      "Electronics",
      "Home & Lifestyle",
      "Medicine",
      "Sports & Outdoor",
      "Babies & Toys",
      "Groceries & Pets",
      "Health & Beauty",
    ];
    const sectionsRoutes = [
      "/electronics",
      "/home-lifestyle",
      "/medicine",
      "/sports-outdoor",
      "/babies-toys",
      "/groceries-pets",
      "/health-beauty",
    ];

    return (
      <div className={styles.titlesDiv}>
        <div className={styles.titlesDiv2}>
          <ul className={styles.fashions}>
            {fashions.map((title, index) => (
              <li  className={styles.li} key={title}>
                <Link to={fashionsRoutes[index]} className={styles.link}>
                  <p className={styles.titles}>{title}</p>
                  <div className={styles.imgDiv}>
                    <img src={arrow} alt="arrow" />
                  </div>
                </Link>
              </li>
            ))}
            {sections.map((section, index) => (
              <li key={section}>
                <Link to={sectionsRoutes[index]} className={styles.link}>
                  <p className={styles.titles}>{section}</p>
                </Link>
              </li>
            ))}
          </ul>
          <div></div>
        </div>
      </div>
    );
}

export default memo(ProductTitles);