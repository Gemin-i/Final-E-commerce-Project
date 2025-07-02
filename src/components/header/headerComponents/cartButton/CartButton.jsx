import { Link } from "react-router-dom";
import cart from "../../../../assets/imgs/header/cart.svg";
import styles from "./CartButton.module.css";
import { memo } from "react";

function CartButton() {
    return (
        <Link to='/cart' className={styles.cartButton}>
            <img src={cart} alt="cart" className={styles.cartImg}/>
            <div className={styles.amount}>2</div>
        </Link>  
    )
}

export default memo(CartButton);