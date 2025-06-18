import { memo } from "react";
import styles from "./ProfileDropdown.module.css";

import user from "../../../../../assets/imgs/header/user/whiteUser.svg";
import orders from "../../../../../assets/imgs/header/user/orders.svg";
import cancel from "../../../../../assets/imgs/header/user/cancel.svg";
import reviews from "../../../../../assets/imgs/header/user/reviews.svg";
import logout from "../../../../../assets/imgs/header/user/logout.svg";
import { Link } from "react-router-dom";

function Dropdown() {
  const options = [
    "Manage My Account",
    "My Orders",
    "My Cancellations",
    "My Reviews",
    "Logout",
  ];
  const icons = [user, orders, cancel, reviews, logout];
  const routes = [
    "/profile",
    "/orders",
    "/cancellations",
    "/reviews",
    "/logout",
  ];

  return (
    <div className={styles.dropdownDiv}>
      <ul className={styles.options}>
        {options.map((option, index) => (
          <Link to={routes[index]} className={styles.optionsDiv} key={option}>
            <div
              className={styles.iconDiv}
            >
              <img src={icons[index]} alt={icons[index]} />
            </div>
            <li key={option}>{option}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default memo(Dropdown);
