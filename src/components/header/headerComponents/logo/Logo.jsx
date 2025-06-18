import { memo } from "react";
import { Link } from "react-router-dom";
import styles from "./Logo.module.css";

function Logo() {
  return (
    <Link to="/exclusive" className={styles.Logo}>
      Exclusive
    </Link>
  );
}

export default memo(Logo);
