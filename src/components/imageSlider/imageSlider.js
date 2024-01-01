import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './styling.css'


const ImageSlider = ({paths}) => {

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    height: '300px' 
  };

  return (
      <Slider {...sliderSettings}>
        {paths.map((image, index) => (
          <div 
           key={index}
           className='slickContentContainer'
           >
            <img src={image} alt={`Slide ${index + 1}`} style={{   height:'300px'}}/>
          </div>
        ))}
      </Slider>
  );
};

export default ImageSlider;
