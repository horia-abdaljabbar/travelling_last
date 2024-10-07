// ImageSlider.js
import React ,{useEffect} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../slider/slider.css";
import { useTranslation } from "react-i18next";


const ImageSlider = () => {
  const { t, i18n } = useTranslation();
// const {language} =useContext(LanguageContext);
const l=localStorage.getItem('lang');
console.log(l+"slider");

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
  };

  const images = [
    {
      src: "11.jpg",
      caption: t('sliderImg1Caption')

    },
    {
      src: "2.jpg",
      caption: t('sliderImg2Caption')

    },
    {
      src: "3.jpg",
      caption: t('sliderImg3Caption')

    },
    {
      src: "4.jpg",
      caption: t('sliderImg4Caption')


    },
    {
      src: "5.jpg",
      caption: t('sliderImg5Caption')

    }
  ];
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="slide">
            <img src={image.src} alt={`Slide ${index + 1}`} className="slide-image"/>
            <h1 className="caption">{image.caption}</h1> {/* Caption text */}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;

