import { memo, useEffect, useState } from "react";
import Glide from "@glidejs/glide";
import "@glidejs/glide/dist/css/glide.core.min.css";


import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


import styles from "./Glide.module.css";



function Carousel() {

  const imgSources = ["0", "1", "2", "3", "4"];

  return (
    <div
      className={styles.carousel}
      style={{ "--slides-count": imgSources.length }}
    >
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{
          clickable: true,
          el: ".swiperPagination",
          renderBullet: (index, className) => {
            return `
              <div class="${styles.circleSize} ${className}">
                <span></span>
              </div>`;
          },
        }}
        spaceBetween={30}
        slidesPerView="auto"
        loop
        speed="1000"
        autoplay={{
          delay: 2000, // time before it changes
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        className={`swiper ${styles.size} ${styles.glide5}`}
      >
        {imgSources.map((src, index) => (
          <SwiperSlide key={src} className={`${styles.size} ${styles.slide}`}>
            <img src={src} alt={index} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={`swiperPagination ${styles.swiperPagination}`}></div>
    </div>
    // <div
    //   className={`glide ${styles.size} ${styles.carousel}`}
    //   data-glide-el="root"
    // >
    //   <div className={`glide__track ${styles.size}`} data-glide-el="track">
    //     <ul className={`glide__slides ${styles.size}`}>
    //       {imgSources.map((src, index) => (
    //         <li
    //           key={src}
    //           className={`glide__slide ${styles.size} ${styles.slide}`}
    //         >
    //           <img src={src} alt={index} />
    //         </li>
    //       ))}
    //     </ul>
    //   </div>
    //   <div
    //     className={`glide__bullets ${styles.bulletsDiv}`}
    //     data-glide-el="controls[nav]"
    //   >
    //     {imgSources.map((_, index) => (
    //       <button
    //         key={index}
    //         className={`glide__bullet ${styles.circleSize}`}
    //         data-glide-dir={`=${index}`}
    //       >
    //         <div
    //           className={
    //             currentSlide === index ? styles.active : styles.inactive
    //           }
    //         ></div>
    //       </button>
    //     ))}
    //   </div>
    // </div>
  );
}

export default memo(Carousel);
