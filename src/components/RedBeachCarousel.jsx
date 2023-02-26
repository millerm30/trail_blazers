import React from "react";
import CarouselSlider from "./CarouselSlide"
import imageOne from "../assets/red_beach/photo1.jpg";
import imageTwo from "../assets/red_beach/photo2.jpg";
import imageThree from "../assets/red_beach/photo3.jpg";
import imageFour from "../assets/red_beach/photo4.jpg";
import imageFive from "../assets/red_beach/photo5.jpg";
import imageSix from "../assets/red_beach/photo6.jpg";
import imageSeven from "../assets/red_beach/photo7.jpg";
import imageEight from "../assets/red_beach/photo8.jpg";
import imageNine from "../assets/red_beach/photo9.jpg";

const PhotoCarousel = () => {
  return (
    <div className="carousel w-5/6 mx-auto my-4 md:w-1/3 lg:w-1/3">
      <CarouselSlider slideNumber={"slide1"} imageSrc={imageOne} slideBack={"#slide9"} slideAhead={"#slide2"} />
      <CarouselSlider slideNumber={"slide2"} imageSrc={imageTwo} slideBack={"#slide1"} slideAhead={"#slide3"} />
      <CarouselSlider slideNumber={"slide3"} imageSrc={imageThree} slideBack={"#slide2"} slideAhead={"#slide4"} />
      <CarouselSlider slideNumber={"slide4"} imageSrc={imageFour} slideBack={"#slide3"} slideAhead={"#slide5"} />
      <CarouselSlider slideNumber={"slide5"} imageSrc={imageFive} slideBack={"#slide4"} slideAhead={"#slide6"} />
      <CarouselSlider slideNumber={"slide6"} imageSrc={imageSix} slideBack={"#slide5"} slideAhead={"#slide7"} />
      <CarouselSlider slideNumber={"slide7"} imageSrc={imageSeven} slideBack={"#slide6"} slideAhead={"#slide8"} />
      <CarouselSlider slideNumber={"slide8"} imageSrc={imageEight} slideBack={"#slide7"} slideAhead={"#slide9"} />
      <CarouselSlider slideNumber={"slide9"} imageSrc={imageNine} slideBack={"#slide8"} slideAhead={"#slide1"} />
    </div>
  );
};

export default PhotoCarousel;