import styles from "./Search.module.css";
import { memo, useState } from "react";
import search from "../../../../assets/imgs/header/search.svg";

function Search() {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className={styles.searchBackgroundDiv}>
      <div className={styles.searchDiv}>
        <input
          type="text"
          value={inputValue}
          placeholder="What are you looking for?"
          className={styles.searchBar}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <img src={search} alt="searchIcon" className={styles.searchIcon} />
      </div>
    </div>
  );
}

export default memo(Search);
