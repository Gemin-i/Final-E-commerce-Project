import styles from './LoadAll.module.css';
import { memo } from 'react';

function LoadAll() {
    return (
      <div className={styles.container}>
        <div className={styles.loadAllDiv}>
          <div className={styles.loadAll}>
            <p>View All Products</p>
          </div>
        </div>
        <div className={styles.border}></div>
      </div>
    );
}

export default memo(LoadAll);