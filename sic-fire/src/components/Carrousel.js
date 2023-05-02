import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import DesktopImage1 from '../assets/images/Banners/11.png';
import DesktopImage2 from '../assets/images/Banners/12.png';
import MobileImage1 from '../assets/images/Banners/android/1_1.png';
import MobileImage2 from '../assets/images/Banners/android/2_2.png';
import { isMobile } from 'react-device-detect';

const Carousel = () => {
  const [isMobileDevice, setIsMobileDevice] = useState(false);

  // Detecta si el usuario está en un dispositivo móvil
  if (isMobile && !isMobileDevice) {
    setIsMobileDevice(true);
  } else if (!isMobile && isMobileDevice) {
    setIsMobileDevice(false);
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div>
      <Slider {...settings}>
        <div>
          <a href="https://www.example.com">
            <img src={isMobileDevice ? MobileImage1 : DesktopImage1} alt="Imagen 1" />
          </a>
        </div>
        <div>
          <a href="https://www.example.com">
            <img src={isMobileDevice ? MobileImage2 : DesktopImage2} alt="Imagen 2" />
          </a>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
