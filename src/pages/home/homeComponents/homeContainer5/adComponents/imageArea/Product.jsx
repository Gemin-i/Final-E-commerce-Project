import styles from "./Product.module.css";
import { memo } from "react";

import speaker from "../../../../../../assets/imgs/home/homeContainer5/speaker.svg";

function Product() {
    return (
        <div className={styles.container1}>
            <div className={styles.blur}></div>
            <img className={styles.img} src={speaker} alt="speaker" />
        </div>
    )
}

export default memo(Product);