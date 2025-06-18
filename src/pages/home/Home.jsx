import { memo } from "react";
import styles from "./Home.module.css";
import Container1 from "./homeComponents/homeContainer1/Container1";
import FlashSales from "./homeComponents/homeContainer2/flashSales";

function Home() {
  return (
    <div className={styles.homeDiv}>
      <Container1/>
      <FlashSales/>
    </div>
  );
}

export default memo(Home);
