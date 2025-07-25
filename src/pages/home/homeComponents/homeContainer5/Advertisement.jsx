import { memo } from "react"
import styles from "./Advertisement.module.css"
import Text from "./adComponents/textArea/Text";
import TimeAndButton from "./adComponents/timerAndButton/TimeAndButton";
import Product from "./adComponents/imageArea/Product";

function Advertisement() { 
    return (
      <div className={styles.container1}>
        <div className={styles.container2}>
            <div className={styles.leftSide}>
                <Text />
                <TimeAndButton />
            </div>
            <Product />
        </div>
      </div>
    );
}

export default memo(Advertisement);