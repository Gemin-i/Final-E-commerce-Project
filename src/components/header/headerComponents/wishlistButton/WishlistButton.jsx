import { Link } from 'react-router-dom';
import styles from './WishlistButton.module.css';
import { memo } from 'react';

import heart from '../../../../assets/imgs/header/heart.svg';

function WishlistButton() {
    return (
        <Link to='/wishlist' className={styles.wishButton}>
            <img src={heart} alt="wishlist" className={styles.heart}/>
            <div className={styles.amount}>4</div>
        </Link>
    )
}

export default memo(WishlistButton);