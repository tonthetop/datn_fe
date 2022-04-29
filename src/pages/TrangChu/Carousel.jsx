import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import './index.css'
// Import Swiper styles
import 'swiper/css';
import img1 from './image/slide-img1.webp'
import img2 from './image/slide-img2.webp'
import img3 from './image/slide-img3.webp'
const Carousel = () => {
    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            autoplay
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
        </Swiper>
    )
}

export default Carousel