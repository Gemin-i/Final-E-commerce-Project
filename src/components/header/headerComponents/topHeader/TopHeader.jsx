import { memo } from "react";
import { Link } from "react-router-dom";

import styles from "./TopHeader.module.css";
import arrow from "../../../../assets/imgs/header/downArrow.svg";

function TopHeader() {
  return (
    <div className={styles.topHeader}>
      <div className={styles.topTextDiv}>
        <div>
          <p className={styles.text1}>
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </p>
        </div>
        <Link to="">
          <p className={styles.text2}>ShopNow</p>
        </Link>
      </div>
      <div className={styles.language}>
        <p>English</p>
        <img src={arrow} alt="Drop Down" />
      </div>
    </div>
  );
}

export default memo(TopHeader);
