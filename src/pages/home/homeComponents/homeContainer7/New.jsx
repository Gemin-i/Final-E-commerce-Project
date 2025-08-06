import { memo } from "react"
import Texts from "../../../../components/texts/Texts"

import styles from "./New.module.css"

function New() {
    return (
        <div className={styles.container1}>
          <Texts  texts={{redText: "Featured", blackText: "New Arrival"}}/>  
        </div>
    )
}

export default memo(New);