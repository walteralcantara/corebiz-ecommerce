import styled from 'styled-components';

export const ShelfContainer = styled.section`
  width: 100%;
  max-width: 1360px;
  margin: 0 auto;
  padding: 3rem 1rem;

  h1 {
    font-weight: 900;
    font-family: inherit;

    &:after {
      content: '';
      display: block;
      width: 5rem;
      height: 5px;
      background: #ccc;
      margin: .5rem 0;
    }
  }

  .slick-track > div {
    padding: 0 .5rem;
  }

  .slick-dots {
    visibility: hidden;
  }

  @media (max-width: 768px) {
    padding: 3rem .5rem;
    .slick-prev,
    .slick-next {
      display: none !important;
    }

    .slick-dots {
      visibility: visible;
      bottom: -35px !important;
      li { 
        margin: unset !important;
      }
    }    
  }
`;

export const ShelfItem = styled.div`
  width: 100vw;
  position: relative;
  text-align: center;

  min-height: 335px;
  max-width: 250px;

  cursor: pointer;
  
  .offPrice {
    text-decoration: line-through;
  }

  .offTag {
    position: absolute;
    top: 0; 
    right: 0;
  }

  .product-description {
    p {
      font-size: 1.2rem;
      line-height: 2.5rem;
      &:not(:last-child){
        font-weight: 600;
      }
    }

    button {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      display: block;
      background: #000;
      color: #fff;
      font-weight: 700;
      padding: 1rem 0;
      border-radius: .5rem;
      font-size: 1.6rem;
    }

    @media (max-width: 768px) {
      margin: 0 30px;
      p {
        font-size: 1.2rem;
      }
    }

    @media (max-width: 425px) {
      margin: unset;
    }
  }

`;
