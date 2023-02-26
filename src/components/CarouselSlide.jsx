import React from 'react'

const CarouselSlide = ({slideNumber,imageSrc, slideBack, slideAhead }) => {
  return (
    <div id={slideNumber} className="carousel-item relative w-full">
      <img src={imageSrc} className="w-full rounded-xl" />
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href={slideBack} className="btn btn-circle">
          ❮
        </a>
        <a href={slideAhead} className="btn btn-circle">
          ❯
        </a>
      </div>
    </div>
  );
}

export default CarouselSlide