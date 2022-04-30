import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import './index.css'


// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";

export default function Carousel() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <>
            <Swiper
                style={{
                    "--swiper-navigation-color": "#fff",
                    "--swiper-pagination-color": "#fff",
                }}
                loop={true}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2"
            >
                <SwiperSlide>
                    <img className="slide-img" src={img1} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="slide-img" src={img2} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="slide-img" src={img3} alt="" />
                </SwiperSlide>
            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                loop={true}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img className="slide-img" src={img1} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="slide-img" src={img2} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="slide-img" src={img3} alt="" />
                </SwiperSlide>
            </Swiper>
        </>
    );
}
