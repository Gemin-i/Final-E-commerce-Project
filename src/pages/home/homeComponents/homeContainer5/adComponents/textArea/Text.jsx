32
import Dropdown from "./dropdown/Dropdown";
import styles from "./Text.module.css";

function Text() {
    return (
      <div className={styles.texts}>
        <Dropdown />
        <p className={styles.text2}>Enhance Your Music Experience</p>
      </div>
    );
}

export default Text;