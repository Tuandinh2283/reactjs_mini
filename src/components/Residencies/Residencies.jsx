import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./Residencies.css";
import data from "../../utils/slider.json";
import { sliderSettings } from "../../utils/common";

const Residencies = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);

  return (
    <div className="r-wrapper">
      <div className="r-container">
        <div className="r-head">
          <span className="orangeText">Best Choices</span>
          <span className="primaryText">Popular Residencies</span>
        </div>

        {/* Nút điều hướng */}
        {swiperInstance && <SliderButtons swiper={swiperInstance} />}

        <Swiper {...sliderSettings} onSwiper={setSwiperInstance}>
          {data.map((card, i) => (
            <SwiperSlide key={i}>
              <div className="r-card">
                <img src={card.image} alt={card.name} />
                <span className="secondaryText r-price">
                  <span>$</span>
                  <span style={{ color: "orange" }}>{card.price}</span>
                </span>
                <span className="primaryText">{card.name}</span>
                <span className="secondaryText">{card.detail}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Residencies;

// Nhận prop swiper
const SliderButtons = ({ swiper }) => {
  return (
    <div className="flexCenter r-buttons">
      <button onClick={() => swiper.slidePrev()} className="nav-button">
        &lt;
      </button>
      <button onClick={() => swiper.slideNext()} className="nav-button">
        &gt;
      </button>
    </div>
  );
};
