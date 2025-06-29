import Texts from "../../../../components/texts/Texts";
import Carousel from "./carousel/carousel";
import styles from "./Categories.module.css";
import { memo } from "react";

function Categories() {
    return (
        <div className={styles.container}>
            <Texts texts={{redText: "Categories", blackText: "Browse By Category"}}/>
            <Carousel />
        </div>
    )
}

export default memo(Categories);