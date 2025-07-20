import styles from './LoadAll.module.css';
import { memo } from 'react';

function LoadAll() {
    return (
      <div className={styles.container}>
        <div className={styles.loadAllDiv}>
          <button className={styles.loadAll}>
            <p>View More Products</p>
          </button>
        </div>
        <div className={styles.border}></div>
      </div>
    );
}

export default memo(LoadAll);