import { memo } from "react"
import styles from "./Button.module.css"

function Button({ children, handleClick = () => {}, className}) {
    return (
        <button className={ styles[className] } onClick={() => handleClick(children)}>{children}</button>
    )
}

export default memo(Button)