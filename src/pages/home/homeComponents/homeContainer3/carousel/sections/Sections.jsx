import { Link } from "react-router-dom";
import { memo } from "react";
import styles from "./Sections.module.css";

function Sections({ category }) {
  return (
    <Link
      className={styles.route}
      to={`/category/${category.name.toLocaleLowerCase()}`}
    >
      <img src={category.image} alt={category.name} className={styles.imgs} />
      <img src={category.image2} alt="" className={styles.image2} />
      <p className={styles.categories}>{category.name}</p>
    </Link>
  );
}

export default memo(Sections);

