import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext
} from "pure-react-carousel";
import Banner1 from "../../images/banner1.jpg";
import Banner2 from "../../images/banner2.jpg";
import Banner3 from "../../images/banner3.jpg";
import { ChevronRight, ChevronLeft } from "react-bootstrap-icons";
import "pure-react-carousel/dist/react-carousel.es.css";
import "./carousel.scss";

function Carousel(props) {    

    return (
      <div className="row">
        <div className="col-md-12">
          <div className="carousel-main">
            <CarouselProvider
              naturalSlideWidth={100}
              naturalSlideHeight={125}
              totalSlides={3}
            >
              <Slider>
                <Slide index={0}>
                  <a href="#">
                    <img src={Banner1} alt="Imagem de banner." />
                  </a>
                </Slide>
                <Slide index={1}>
                  <a href="#">
                    <img src={Banner2} alt="Imagem de banner." />
                  </a>
                </Slide>
                <Slide index={2}>
                  <a href="#">
                    <img src={Banner3} alt="Imagem de banner." />
                  </a>
                </Slide>
              </Slider>
              <ButtonBack className="nav nav--prev">
                <ChevronLeft />
              </ButtonBack>
              <ButtonNext className="nav nav--next">
                <ChevronRight />
              </ButtonNext>
            </CarouselProvider>
          </div>
        </div>
      </div>
    );

}

export default Carousel;