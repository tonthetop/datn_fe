import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";

import "./index.css";

// import required modules
import { FreeMode, Navigation, Thumbs, Pagination } from "swiper";
const img1 = "https://bizweb.dktcdn.net/100/377/398/products/women-s-air-force-1-white-pendant-dd1525-100-release-date.jpg?v=1646286178000"
const img2 = "https://bizweb.dktcdn.net/thumb/grande/100/377/398/products/women-s-air-force-1-white-pendant-dd1525-100-release-date-c630b781-6dba-4139-8a3f-d106bdafcedd.jpg?v=1646286268000"
export default function ThumbsProduct() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <>
            <Swiper
                style={{
                    "--swiper-navigation-color": "#333",
                    "--swiper-pagination-color": "#333",
                }}
                loop={true}
                spaceBetween={10}
                navigation={true}
                pagination={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[Navigation, Thumbs,Pagination]}
                className="mySwiper2"
            >
                <SwiperSlide>
                    <img src={img1} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img2} />
                </SwiperSlide>


            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={img1} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img2} />
                </SwiperSlide>


            </Swiper>
        </>
    );
}
