"use client";
import React, { useRef, useEffect } from "react";
import Swiper from "swiper";
import "swiper/swiper-bundle.css";

const ImageSlider = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current) {
      new Swiper(swiperRef.current, {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          dynamicBullets: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        lazyPreloaderClass: false,
        lazyPreloadPrevNext: true,
      });
    }
  }, []);

  return (
    <div className="swiper-container" ref={swiperRef}>
      <div className="swiper-wrapper">
        <div className="swiper-slide">
          <img src="/carousel/car1.jpg" alt="Slide 1" />
        </div>
        <div className="hidden swiper-slide">
          <img src="/carousel/car2.jpg" alt="Slide 2" />
        </div>
        <div className="swiper-slide">
          <img src="/carousel/car2.jpg" alt="Slide 2" />
        </div>
        <div className="swiper-slide">
          <img src="/carousel/car2.jpg" alt="Slide 2" />
        </div>
        {/* Tambahkan slide lain di sini */}
      </div>
      <div className="swiper-pagination"></div>
      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>
    </div>
  );
};

export default ImageSlider;
