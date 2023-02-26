import React from "react";
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
    <div className="carousel w-5/6 h-auto mx-auto md:w-1/3 lg:w-1/3">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={imageOne} className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide8" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={imageTwo} className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={imageThree} className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={imageFour} className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide5" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide5" className="carousel-item relative w-full">
        <img src={imageFive} className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide6" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide6" className="carousel-item relative w-full">
        <img src={imageSix} className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide5" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide7" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide7" className="carousel-item relative w-full">
        <img src={imageSeven} className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide6" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide8" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide8" className="carousel-item relative w-full">
        <img src={imageEight} className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide7" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide9" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide9" className="carousel-item relative w-full">
        <img src={imageNine} className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide8" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default PhotoCarousel;