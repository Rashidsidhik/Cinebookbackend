import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css";
import "./Banner.scss";
import React, { useEffect, useState } from "react";
import "./Banner.scss";
import axios from "../../utils/axios";
import { toast, ToastContainer } from "react-toastify";


function UncontrolledExample() {
  const generateError = (error) =>
    toast.error(error, {
      position: "top-right",
    });

  

  SwiperCore.use([Autoplay]);

  return (
    <>
      <Swiper
        modules={[Autoplay]}
        grabCursor={true}
        spaceBetween={0}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        autoplay={{ delay: 3000 }}
      >

          <SwiperSlide >
            <HeroSlideItem  />
          </SwiperSlide>

      </Swiper>
      <ToastContainer />
    </>
  );
}

export default UncontrolledExample;

const HeroSlideItem = () => {
  return (

      <div
        className="hero-slide__item"
        style={{ backgroundImage: `url("https://img.freepik.com/premium-vector/vintage-pop-art-red-banner-background_175838-452.jpg?w=996")` }}
      >
        <div className="hero-slide__item__content container">
          <div className="hero-slide__item__content__info">
            <h2 className="title">title</h2>
            <div className="overview">review</div>
            <div className="btns"></div>
          </div>
          <div className="hero-slide__item__content__poster">
            <img
              src="https://i.pinimg.com/originals/88/39/53/883953fddc1dbc9e2a16e1eda4f26dad.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
   
  );
};
