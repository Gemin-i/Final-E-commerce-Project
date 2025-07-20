import { memo } from "react"
import styles from "./Button.module.css"
import { Link } from "react-router-dom"

function Button({ children, handleClick = () => {}, className, route}) {
    return (
        <Link to={route} className={ styles.link } onClick={() => handleClick()}>
          <img className={styles[ className ]} src={children} alt={children} />
        </Link>
    )
}

export default memo(Button)