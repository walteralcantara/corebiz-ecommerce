import React from 'react';
import Slider from 'react-slick';

import { banners } from '../../../../services/carousel.json';

import { CarouselContainer, BannerItem } from './styled';

const settingsCarousel = {
  dots: true,
  infinite: true,
  speed: 1500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
};

export default function Carousel() {

  return banners.length && (
    <CarouselContainer>
      <Slider {...settingsCarousel}>
        {banners.map((bannerItem) => {
          return (
            <BannerItem className="banner-item" key={bannerItem.id}>
              <div className="images">
                <img src='/images/vector.png' alt={bannerItem.title} />
                <img src={bannerItem.img} alt={bannerItem.title} className="bannerImage" />
              </div>

              <div className="carousel-info">
                <h3>{bannerItem.subtitle}</h3>
                <h1>{bannerItem.title}</h1>
              </div>
            </BannerItem>
          );
        })}
      </Slider>
    </CarouselContainer>
  );
}
