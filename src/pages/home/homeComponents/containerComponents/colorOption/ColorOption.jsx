import { memo, useState } from "react";
import styles from "./ColorOption.module.css";

function ColorOption({ colors, setImg }) {
  const [currentOption, setCurrentOption] = useState(colors[0]);

  const handleClick = (color) => {
    setCurrentOption(color);
    setImg(color);
  };

  return (
    <div className={styles.container}>
      {colors.map((color, index) =>
        color === currentOption ? (
          <div key={color} className={styles.currentBorder}>
            <div
              className={styles.currentOption}
              style={{ backgroundColor: color }}
            ></div>
          </div>
        ) : (
          <div
            key={index}
            className={styles.option}
            style={{ backgroundColor: color }}
            onClick={() => handleClick(color)}
          ></div>
        )
      )}
    </div>
  );
}

export default memo(ColorOption);
