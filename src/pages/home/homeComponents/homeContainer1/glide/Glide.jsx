import { memo, useEffect, useState } from "react";
import Glide from "@glidejs/glide";
import "@glidejs/glide/dist/css/glide.core.min.css";
import styles from "./Glide.module.css";

function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const glide = new Glide(".glide", {
      type: "carousel",
      autoplay: 3000,
      animationDuration: 1000,
      hoverpause: true,
      gap: 20,
    });

    glide.on("run", () => {
      setCurrentSlide(glide.index);
    });

    glide.mount();

    return () => {
      glide.destroy();
    };
  }, []);

  const imgSources = ["0", "1", "2", "3", "4"];

  return (
    <div
      className={`glide ${styles.size} ${styles.carousel}`}
      data-glide-el="root"
    >
      <div className={`glide__track ${styles.size}`} data-glide-el="track">
        <ul className={`glide__slides ${styles.size}`}>
          {imgSources.map((src, index) => (
            <li key={src} className={`glide__slide ${styles.size} ${styles.slide}`}>
              <img src={src} alt={index} />
            </li>
          ))}
        </ul>
      </div>
      <div
        className={`glide__bullets ${styles.bulletsDiv}`}
        data-glide-el="controls[nav]"
      >
        {imgSources.map((_, index) => (
          <button
            key={index}
            className={`glide__bullet ${styles.circleSize
              
            }`}
            data-glide-dir={`=${index}`}
          >
            <div className={currentSlide === index ? styles.active : styles.inactive}></div>
          </button>
        ))}
      </div>
    </div>
  );
}

export default memo(Carousel);
