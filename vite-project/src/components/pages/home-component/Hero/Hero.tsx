import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import style from "./styles.module.css";
import IMAGES from "/mock-images/img/hero.png";
// import required modules
import { Pagination, Navigation } from "swiper/modules";

export const Hero: React.FC = () => {
  return (
    <div>
      {" "}
      <>
        <Swiper
          pagination={{
            type: "progressbar",
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className={style.mySwiper}
        >
          <SwiperSlide className={style.swiperSS}>
            <img src={IMAGES} alt='IMAGES' />
          </SwiperSlide>
          <SwiperSlide className={style.swiperSS}>
            <img src={IMAGES} alt='IMAGES' />
          </SwiperSlide>
          <SwiperSlide className={style.swiperSS}>
            <img src={IMAGES} alt='IMAGES' />
          </SwiperSlide>
          <SwiperSlide className={style.swiperSS}>
            <img src={IMAGES} alt='IMAGES' />
          </SwiperSlide>
          <SwiperSlide className={style.swiperSS}>
            <img src={IMAGES} alt='IMAGES' />
          </SwiperSlide>
          <SwiperSlide className={style.swiperSS}>
            <img src={IMAGES} alt='IMAGES' />
          </SwiperSlide>
          <SwiperSlide className={style.swiperSS}>
            <img src={IMAGES} alt='IMAGES' />
          </SwiperSlide>
          <SwiperSlide className={style.swiperSS}>
            <img src={IMAGES} alt='IMAGES' />
          </SwiperSlide>
          <SwiperSlide className={style.swiperSS}>
            <img src={IMAGES} alt='IMAGES' />
          </SwiperSlide>
        </Swiper>
      </>
    </div>
  );
};
