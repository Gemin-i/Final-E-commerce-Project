import { memo } from 'react';
import styles from './Images.module.css';
import ImageTexts from '../imageTexts/ImageTexts';

import pS5 from '../../../../../../assets/imgs/home/homeContainer7/newArrival/PS5.svg';
import woman from '../../../../../../assets/imgs/home/homeContainer7/newArrival/womanWithHat.svg'
import speakers from '../../../../../../assets/imgs/home/homeContainer7/newArrival/speakers.svg';
import perfume from '../../../../../../assets/imgs/home/homeContainer7/newArrival/perfume.svg';

const newArrival = [
  {
    image: pS5,
    title: "PlayStation 5",
    description: "Black and White version of the PS5 coming out on sale.",
  },
  {
    image: woman,
    title: "Women’s Collections",
    description: "Featured woman collections that give you another vibe.",
  },
  { image: speakers, title: "", description: "" },
  { image: perfume, title: "", description: "" },
]; // Placeholder for actual data

function Images() {
    return (
      <div className={styles.container1}>
        <div className={styles.img1}>
          <img src={newArrival[0].image} alt={newArrival[0].title} />
          <div className={styles.texts}>
            <ImageTexts
              title={newArrival[0].title}
              description={newArrival[0].description}
            />
          </div>
        </div>
        <div className={styles.container2}>
          <div className={styles.img2}>
            <img src={newArrival[1].image} alt="" />
            <div className={styles.texts}>
              <ImageTexts
                title={newArrival[1].title}
                description={newArrival[1].description}
              />
            </div>
          </div>
          <div className={styles.container3}>
            <div className={styles.img3}>
              <img src="1" alt="" />
              <div className={styles.texts}>
                <ImageTexts
                  title={newArrival[2].title}
                  description={newArrival[2].description}
                />
              </div>
            </div>
            <div className={styles.img3}>
              <img src="1" alt="" />
              <div className={styles.texts}>
                <ImageTexts
                  title={newArrival[3].title}
                  description={newArrival[3].description}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default memo(Images);