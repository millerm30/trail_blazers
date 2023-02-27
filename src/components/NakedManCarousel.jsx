import React from "react";
import CarouselSlider from "./CarouselSlide"
import imageOne from "../assets/nakedman_beach/photo1.jpg";
import imageTwo from "../assets/nakedman_beach/photo2.jpg";
import imageThree from "../assets/nakedman_beach/photo3.jpg";
import imageFour from "../assets/nakedman_beach/photo4.jpg";

const PhotoCarousel = () => {
  return (
    <div className="carousel w-11/12 mx-auto my-4 md:w-1/2 lg:w-1/3">
      <CarouselSlider slideNumber={"slide1"} imageSrc={imageOne} slideBack={"#slide4"} slideAhead={"#slide2"} />
      <CarouselSlider slideNumber={"slide2"} imageSrc={imageTwo} slideBack={"#slide1"} slideAhead={"#slide3"} />
      <CarouselSlider slideNumber={"slide3"} imageSrc={imageThree} slideBack={"#slide2"} slideAhead={"#slide4"} />
      <CarouselSlider slideNumber={"slide4"} imageSrc={imageFour} slideBack={"#slide3"} slideAhead={"#slide1"} />
    </div>
  );
};

export default PhotoCarousel;