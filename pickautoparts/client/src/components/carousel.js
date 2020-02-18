import React from "react";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import AwesomeSliderStyles from "react-awesome-slider/dist/styles.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";


import image_1 from "../images/bmw1.jpg";
import image_2 from "../images/bmw2.jpg";
import image_3 from "../images/Acura1.jpg";
import image_4 from "../images/Acura2.jpg";
import image_5 from "../images/Audi1.jpg";
import image_6 from "../images/Audi2.jpg";
import image_7 from "../images/lexus1.jpg";
import image_8 from "../images/lexus2.jpg";
import image_9 from "../images/merc1.jpg";
import image_10 from "../images/merc2.jpg";


const AutoplaySlider = withAutoplay(AwesomeSlider);

const Slider = () => {

  return (
    <div className="slider">
      <AutoplaySlider
        play={true}
        cancelOnInteraction={false}
        interval={4000}
        showArrows={false}
        animation="cubeAnimation"
        cssModule={AwesomeSliderStyles}
      >
        <div data-src={image_1} />
        <div data-src={image_2} />
        <div data-src={image_3} />
        <div data-src={image_4} />
        <div data-src={image_5} />
        <div data-src={image_6} />
        <div data-src={image_7} />
        <div data-src={image_8} />
        <div data-src={image_9} />
        <div data-src={image_10} />
        {/* <div data-src={image_3} /> */}
        {/* <div data-src={image_4} /> */}
        {/* <div data-src="/path/to/image-1.png" />
    <div data-src="/path/to/image-2.jpg" /> */}
      </AutoplaySlider>
    </div>
  );
};

export default Slider;