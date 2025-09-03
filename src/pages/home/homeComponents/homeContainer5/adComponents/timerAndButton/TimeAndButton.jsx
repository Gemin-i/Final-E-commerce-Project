import { memo, useEffect, useState } from "react";
import styles from "./TimerAndButton.module.css";
import { Link } from "react-router-dom";

function TimerAndButton() {
  const [updateTime, setUpdateTime] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setUpdateTime((prev) => !prev);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [updateTime]);

  const endTime = new Date("2025-09-23T00:00:01Z").getTime();
  const now = Date.now();
  const timeLeft = endTime - now;
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
  const timeName = ["Days", "Hours", "Minutes", "Seconds"];
  const time = [days, hours, minutes, seconds];

  return (
    <div className={styles.container1}>
      <div className={styles.timer}>
        {timeName.map((name, index) => (
          <div className={styles.timeDiv} key={name}>
            <div className={styles.timeAndNameDiv}>
              <p className={styles.time}>
                {time[index] < 10 ? `0${time[index]}` : time[index]}
              </p>
              <p className={styles.timeName}>{name}</p>
            </div>
          </div>
        ))}
      </div>
      <Link className={styles.buy} to="/view"> <p>Buy Now!</p> </Link>
    </div>
  );
}

export default memo(TimerAndButton);
