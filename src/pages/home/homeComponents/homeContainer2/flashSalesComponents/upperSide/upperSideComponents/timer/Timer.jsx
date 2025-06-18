import styles from './Timer.module.css';
import { memo, use, useEffect, useState } from 'react';


function Timer() {

  const [updateTime, setUpdateTime] = useState(1);

    useEffect(() => {
      updateTime && setTimeout(() => {
        setUpdateTime(prev => prev + 1)
      }, 1000)

      return () => setUpdateTime(0)

    }, [updateTime])

    const endTime = new Date('2025-06-21T23:59:59Z').getTime(); 
    const now = Date.now() 
    const timeLeft = endTime - now;
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));  
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
    const timeName = ['Days', 'Hours', 'Minutes', 'Seconds'];
    const time = [days, hours, minutes, seconds]

    return (
          <div className={styles.timer}>
            {timeName.map((name, index) => (
                <>
                    <div className={styles.timeDiv}>
                        <p className={styles.timeName}>{name}</p>
                        <p className={styles.time}>{time[index] < 10? `0${time[index]}` : time[index]}</p>
                    </div>
                    <div>{index < 3 ? <p className={styles.colon}>:</p> : ''}</div>
                </>
            ))}
            
          </div>
        
    );
}

export default memo(Timer);