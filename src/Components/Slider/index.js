// ResponsiveSlider.js
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SliderStyleWrapper } from "./style";

function ResponsiveSlider({ data, renderItem }) {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <SliderStyleWrapper>
      <div className="slider-container">
        <Slider {...settings}>
          {data.map((item, index) => (
            <div key={index} className="slider-item">
              {renderItem(item, index)}
            </div>
          ))}
        </Slider>
      </div>
    </SliderStyleWrapper>
  );
}

export default ResponsiveSlider;
