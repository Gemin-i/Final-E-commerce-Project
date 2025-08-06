import fullStar from "../../../../../assets/imgs/home/homeContainer2/glide/fullStar.svg";
import firstHalfStar from "../../../../../assets/imgs/home/homeContainer2/glide/firstHalfStar.svg";
import secondHalfStar from "../../../../../assets/imgs/home/homeContainer2/glide/secondHalfStar.svg";
import emptyStar from "../../../../../assets/imgs/home/homeContainer2/glide/emptyStar.svg";
import styles from "./Rating.module.css";
import { memo } from "react";

function Rating() {
  const personCount = Math.floor(Math.random() * 100) + 1;
  let totalRating = 0;
  const people = [];
  for (let i = 0; i < personCount; i++) {
    const rating = Math.floor(Math.random() * 10 + 0.5) / 2;
    totalRating += rating;
    people.push({
      id: i,
      rating: rating,
    });
  }

  const averageRating = totalRating / personCount;
  const roundedRating = Math.round(averageRating * 10) / 10;

  const fullStars = Math.floor(roundedRating);
  const halfStars = roundedRating % 1 >= 0.5 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStars;

  return (
    <div className={styles.rating}>
      <div className={styles.stars}>
        {[...Array(fullStars)].map(
          (_, index) =>
            fullStars > 0 && <img src={fullStar} key={index} alt="full star" />
        )}
        {halfStars > 0 && (
          <div className={styles.halfStars}>
            <img
              src={firstHalfStar}
              className={styles.halfStar1}
              alt="half star"
            />
            <img
              src={secondHalfStar}
              className={styles.halfStar2}
              alt="half star"
            />
          </div>
        )}
        {[...Array(emptyStars)].map(
          (_, index) =>
            emptyStars > 0 && (
              <img src={emptyStar} key={index} alt="empty star" />
            )
        )}
      </div>
      <div>
        <p className={styles.count}>({personCount})</p>
      </div>
    </div>
  );
}
export default memo(Rating);
