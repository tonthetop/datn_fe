import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper";
//
import './index.css'
//
import img1 from './image/slide-img1.webp'
import img2 from './image/slide-img2.webp'
import img3 from './image/slide-img3.webp'
const Carousel = () => {
    return (
        <div>
            <Swiper
                         spaceBetween={0}
                         slidesPerView={1}
                         effect={"fade"}
                         autoplay={{
                             delay: 2000,
                             disableOnInteraction: false,
                         }}
                         style={{
                             "--swiper-navigation-color": "#333",
                             "--swiper-pagination-color": "#333",
                         }}
                         modules={[Autoplay, EffectFade, Navigation, Pagination]}
                         navigation={true}
                         pagination={true}
            >
                <SwiperSlide>{

                     <img className="slide-img" src={img1} alt="" />
                }</SwiperSlide>
                <SwiperSlide>{
                     <img className="slide-img" src={img2} alt="" />
                }</SwiperSlide>
                <SwiperSlide>{
                     <img className="slide-img" src={img3} alt="" />
                }</SwiperSlide>
            </Swiper >
        </div>
    )
}

export default Carousel