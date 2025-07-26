import React from "react";
import { images } from "./resources/data.js";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import style from "./css/carouseldisplay.module.css";

function CarouselDisplay() {
  return (
    <>
      <div>
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          showIndicators={false}
          showThumbs={false}
        >
          {images.map((image) => {
            return <img src={image} />;
          })}
        </Carousel>
      </div>

      <div className={style.hero_img}></div>
    </>
  );
}

export default CarouselDisplay;
