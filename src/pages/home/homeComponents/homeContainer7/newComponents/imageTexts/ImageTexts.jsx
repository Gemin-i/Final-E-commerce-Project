import { Link } from "react-router-dom";
import styles from "./ImageTexts.module.css";

function ImageTexts({title, description}) {
  return (
    <div className={styles.container1}>
      <div className={styles.texts}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
      </div>
      <Link className={styles.buy} to="view">
        Shop Now
      </Link>
    </div>
  );
}

export default ImageTexts;
