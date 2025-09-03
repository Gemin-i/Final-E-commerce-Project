import { useState } from "react";
import styles from "./Columns.module.css";

function Columns({ data }) {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className={styles.container1}>
      <div>
        <h1 className={styles.title}>{data[0].firstColumn.title}</h1>
        <h3 className={styles.subTitle}>{data[0].firstColumn.subTitle}</h3>
        <p className={styles.text}>{data[0].firstColumn.text}</p>
        <input
          type="text"
          placeholder="Enter your email"
          value={inputValue}
          onChange={(e) => {
            handleChange(e);
          }}
        />
      </div>
      {data[1].centerColumns.map((column, index) => (
        <div key={column.title}>
          <h1 className={styles.title}>{column.title}</h1>
          {column.rows.map((row, index) => (
            <p className={styles.text} key={row}>
              {row}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Columns;
