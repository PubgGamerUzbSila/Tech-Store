import React from "react";
import { NewProducts } from "../../../../data";
import check from "/mock-images/svg/check.svg";
import style from "./Products.module.css";
import phone from "/mock-images/svg/phone.svg";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
// import required modules
import { Pagination } from "swiper/modules";
import star from "/mock-images/svg/star.svg";
export const Products: React.FC = () => {
  return (
    <div>
      <div className={style.newProduct}>
        <h2>New Products</h2>
        <Link to={"/#12"}>See All New Products</Link>
      </div>
      <div className={style.cards}>
        <Swiper
          slidesPerView={5}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className={style.mySwiper}
        >
          {NewProducts.map((product) => (
            <SwiperSlide>
              <div className={style.cart} key={product.id}>
                {product.typeof == "in_stock" && (
                  <div className={style.otp}>
                    {" "}
                    <img className={style.imgimg} src={check} alt='' />
                    <p className='text-green-500 text-[10px] font-normal font-["Poppins"] leading-[21px]'>
                      in stock
                    </p>
                  </div>
                )}
                {product.typeof == "check_availability" && (
                  <div className={style.top}>
                    <img src={phone} alt='' />
                    <p>check availability</p>
                  </div>
                )}
                <img
                  className={style.IMG}
                  src={product.imgUrl}
                  alt={product.name}
                />
                <p className={style.productName}>{product.name}</p>
                <div className={style.stars}>
                  {Array.from({ length: product.stars }, (_, index) => (
                    <img
                      key={index}
                      src={star}
                      alt='star'
                      className={style.starIcon}
                    />
                  ))}
                </div>
                <p className={style.countP}>{product.count}</p>
                <p className={style.discountP}>{product.discount}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
