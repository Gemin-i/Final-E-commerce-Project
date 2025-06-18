import { Link, useLocation } from "react-router-dom";
import styles from "./Pages.module.css";
import { memo } from "react";

function Pages() {
  const location = useLocation();
  const currentLoc = location.pathname;
  const names = ["Home", "Contact", "About", "Sign Up"];
  const paths = ["/", "/contact", "/about", "/signUp"];

  return (
    <ul className={styles.ul}>
      {names.map((name, index) => {
        return (
          <li key={name}>
            <Link
              to={paths[index]}
              className={
                currentLoc === paths[index] ? styles.currentRoute : styles.route
              }
            >
              {name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default memo(Pages);
