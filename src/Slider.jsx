// src/Slider.jsx
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import chickenImg1 from './images/chicken1.jpg';
import chickenImg2 from './images/veggie1.jpg';
import veggieImg1 from './images/veggie1.jpg';
import veggieImg2 from './images/logo2.jpg';

const SliderComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <Slider {...settings}>
      <div>
        <img src={chickenImg1} alt="Chicken Burger 1" className="mx-auto" />
      </div>
      <div>
        <img src={chickenImg2} alt="Chicken Burger 2" className="mx-auto" />
      </div>
      <div>
        <img src={veggieImg1} alt="Vegetarian Burger 1" className="mx-auto" />
      </div>
      <div>
        <img src={veggieImg2} alt="Vegetarian Burger 2" className="mx-auto" />
      </div>
    </Slider>
  );
};

export default SliderComponent;
