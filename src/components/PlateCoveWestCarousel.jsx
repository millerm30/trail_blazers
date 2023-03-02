import React from "react";
import CarouselSlider from "./CarouselSlide";
import imageOne from "../assets/platecove_west/photo1.jpg";
import imageTwo from "../assets/platecove_west/photo2.jpg";
import imageThree from "../assets/platecove_west/photo3.jpg";
import imageFour from "../assets/platecove_west/photo4.jpg";
import imageFive from "../assets/platecove_west/photo5.jpg";
import imageSix from "../assets/platecove_west/photo6.jpg";
import imageSeven from "../assets/platecove_west/photo7.jpg";


const PhotoCarousel = () => {
  return (
    <div className="carousel w-11/12 mx-auto my-4 md:w-1/2 lg:w-1/3">
      <CarouselSlider
        slideNumber={"slide1"}
        imageSrc={imageOne}
        slideBack={"#slide7"}
        slideAhead={"#slide2"}
      />
      <CarouselSlider
        slideNumber={"slide2"}
        imageSrc={imageTwo}
        slideBack={"#slide1"}
        slideAhead={"#slide3"}
      />
      <CarouselSlider
        slideNumber={"slide3"}
        imageSrc={imageThree}
        slideBack={"#slide2"}
        slideAhead={"#slide4"}
      />
      <CarouselSlider
        slideNumber={"slide4"}
        imageSrc={imageFour}
        slideBack={"#slide3"}
        slideAhead={"#slide5"}
      />
      <CarouselSlider
        slideNumber={"slide5"}
        imageSrc={imageFive}
        slideBack={"#slide4"}
        slideAhead={"#slide6"}
      />
      <CarouselSlider
        slideNumber={"slide6"}
        imageSrc={imageSix}
        slideBack={"#slide5"}
        slideAhead={"#slide7"}
      />
      <CarouselSlider
        slideNumber={"slide7"}
        imageSrc={imageSeven}
        slideBack={"#slide6"}
        slideAhead={"#slide1"}
      />
    </div>
  );
};

export default PhotoCarousel;
