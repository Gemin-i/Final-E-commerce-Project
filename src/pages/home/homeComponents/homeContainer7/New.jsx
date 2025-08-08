import { memo } from "react"
import Texts from "../../../../components/texts/Texts"

import styles from "./New.module.css"
import Images from "./newComponents/newImgs/Images"
import Guarantee from "./newComponents/guarantees/Guarantee"

function New() {
    return (
        <div className={styles.container1}>
          <Texts  texts={{redText: "Featured", blackText: "New Arrival"}}/>  
          <div className={styles.container2}>
            <Images />
            <Guarantee />
          </div>
        </div>
    )
}

export default memo(New);