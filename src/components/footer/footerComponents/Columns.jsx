import { useState } from "react";
import styles from "./Columns.module.css";
import { Link } from "react-router-dom";

function Columns({ data }) {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className={styles.container1}>
      <div className={styles.col1}>
        <div className={styles.col1Texts}>
          <div className={styles.col1Titles}>
            <Link to={'/exclusive'} className={styles.logo}>{data[0].firstColumn.title}</Link>
            <Link to={'/subscribe'} className={styles.subTitle}>{data[0].firstColumn.subTitle}</Link>
          </div>
          <p className={styles.text}>{data[0].firstColumn.text}</p>
        </div>
        <div className={styles.inputDiv}>
          <input
            type="text"
            placeholder="Enter your email"
            className={styles.input}
            value={inputValue}
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <img className={styles.send} src={data[0].firstColumn.img} alt="" />
        </div>
      </div>
      {data[1].centerColumns.map((column, index) => (
        <div className={styles.centerColumn} key={column.title}>
          <h1 className={styles.title}>{column.title}</h1>
          <div className={styles.centerColTexts}>
            {column.rows.map((row, index) => (
            <p className={styles.text} key={row}>
              {row}
            </p>
            ))}
          </div>
        </div>
      ))}
      <div>
        <div className={styles.lastColTexts}>
          <h1 className={styles.title}>{data[2].lastColumn.title}</h1>
          <p className={styles.lastColText}>{data[2].lastColumn.text}</p>
        </div>
        <div className={styles.imgContainer}>
          <img src={data[2].lastColumn.imgs.qrCode} alt="" />
          <div className={styles.imgContainer2}>
            <img src={data[2].lastColumn.imgs.appStore} alt="" />
            <img src={data[2].lastColumn.imgs.googlePlay} alt="" />
          </div>
            
        </div>
        <div className={styles.iconsContainer}>
          <div className={styles.icons}>
            <img src={data[2].lastColumn.icons.facebook} alt="" />
            <img src={data[2].lastColumn.icons.twitter} alt="" />
            <img src={data[2].lastColumn.icons.instagram} alt="" />
            <img src={data[2].lastColumn.icons.linkedin} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Columns;
