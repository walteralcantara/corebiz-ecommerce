import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { formatPrice } from 'vtex-api';
import head from 'vtex-api/lib/utils/head';

import { corebiz } from '../../../../services/api';
import { useContextAPI } from '../../../../context/ContextAPI';

import Rating from './components/Rating';

import offTagIcon from '../../../../images/offTagIcon.png'

import { ShelfContainer, ShelfItem } from './styled';

const settingsShelf = {
  className: 'center',
  centerMode: true,
  infinite: true,
  centerPadding: '1px',
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 4,
  dots: true,
  speed: 1500,
  autoplay: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 3,
        infinite: true,
      },
    },
    {
      breakpoint: 425,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    }
  ],
};

export default function Shelf() {
  const [productList, setProductList] = useState([]);
  const { addToCart } = useContextAPI();

  useEffect(() => {
    const getProducts = async () => {
      const { data } = await corebiz.get('api/v1/products')
      setProductList(data);
    }
    getProducts();
  }, [])

  return productList.length && (
    <ShelfContainer>
      <h1>Mais Vendidos</h1>
      <Slider {...settingsShelf}>
        {productList.map((shelfItem) => {
          return (
            <ShelfItem className="shelfItem" key={shelfItem.productId}>

              {shelfItem.listPrice && (
                <span className="offTag">
                  <img src={offTagIcon} alt="Oferta" />
                </span>
              )}

              <img src={shelfItem.imageUrl} alt={shelfItem.productName} />
              <div className="product-description">
                <Rating rating={shelfItem.stars} />
                <p>{shelfItem.productName}</p>

                {shelfItem.listPrice && (
                  <p className="offPrice">
                    de {formatPrice(shelfItem.listPrice)}
                  </p>
                )}

                <h3>por {formatPrice(shelfItem.price)}</h3>
                {head(shelfItem.installments) && (
                  <p>
                    ou em {head(shelfItem.installments).quantity}x
                    de {formatPrice(head(shelfItem.installments).value)}
                  </p>
                )}

                <button onClick={addToCart}>COMPRAR</button>
              </div>
            </ShelfItem>
          );
        })}
      </Slider>
    </ShelfContainer>
  );
}
