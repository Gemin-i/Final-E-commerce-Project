import { memo } from "react";
import styles from "./Home.module.css";
import Container1 from "./homeComponents/homeContainer1/Container1";
import FlashSales from "./homeComponents/homeContainer2/FlashSales";
import Categories from "./homeComponents/homeContainer3/Categories";
import BestSelling from "./homeComponents/homeContainer4/BestSelling";
import Explore from "./homeComponents/homeContainer6/Explore";
import Advertisement from "./homeComponents/homeContainer5/Advertisement";
import New from "./homeComponents/homeContainer7/New";

function Home() {
  return (
    <div className={styles.homeDiv}>
      <Container1 />
      <FlashSales />
      <Categories />
      <BestSelling />
      <Advertisement />
      <Explore />
      <New />
    </div>
  );
}

export default memo(Home);
