import styled from 'styled-components';

export const CarouselContainer = styled.section`
  width: 100%;
  margin-top: 55px;
  cursor: grab;

  .slick-prev,
  .slick-next {
    display: none !important;
  }
  
  @media (max-width: 768px) {
    margin-top: 100px;
  }
  `;

export const BannerItem = styled.div`
  width: 100vw;
  position: relative;
  
  .images {
    display: flex;
    width: 100%;

    img:nth-child(1) {
      width: 50%;
    }

    img:nth-child(2) {
      margin-left: -100px;
      z-index: -1;
      width: auto;
    }

    @media (max-width: 768px) {
      height: 40vh;
      
      img:nth-child(1) {
        display: none;
        width: unset;
      }

      img:nth-child(2) {
        width: 100%;
        margin: unset;
        object-fit: cover;
      }

      //filter
      &:after {
        position: absolute;
        content: '';
        display: block;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.25);
        z-index: 10;
        top: 0;
      }
    }
  }

  .carousel-info {
    position: absolute;
    z-index: 100;
    top: 0;
    color: #fff;
    max-width: 400px;
    margin: 6rem 0 0 4rem;
    text-align: left;

    h1 {
      font-size: 4rem;
      font-weight: 700;
    }

    h3 {
      font-weight: 400;
      font-size: 2rem;
    }

    @media (max-width: 768px) {
      display: block;
      text-align: center;
      vertical-align: middle;
      width: 100%;
      height: 100%;
      max-width: unset;
      margin: 20% 0;

      h1 {
        font-size: 2.5rem;
      }
      h3 {
        font-size: 1.5rem;
      }
    }
    
    @media (max-width: 425px) {
      text-align: left;
      margin: unset;
      padding: 1.5rem;
    }
  }
`;
