import { memo } from "react"
import styles from "./LoadAll.module.css"

function LoadAll() {
    return (
        <button className={styles.button}>
            <p>View More</p>
        </button>
    )
}

export default memo(LoadAll)