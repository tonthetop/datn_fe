import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./index.css";

// import required modules
import { Pagination, Navigation } from "swiper";
import { Link } from "react-router-dom";

export function ThumbGallery({ productList }) {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={20}
        slidesPerGroup={4}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {productList.map((product) => {
          return (
            <SwiperSlide className="d-flex justify-content-center">
              <Link to={`/product-detail/${product._id}`} alt={product.name}>
                <img
                  src={product?.imgList[0]}
                  alt=""
                  style={{
                    height: "200px",
                    width: "257px",
                  }}
                />
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
