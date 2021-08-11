import React from 'react';

import Carousel from './components/Carousel';
import Shelf from './components/Shelf';
import News from './components/News';

import { CorebizMainContainer } from './styled';

export default function Corebiz() {
  return (
    <CorebizMainContainer>
      <Carousel />
      <Shelf />
      <News />
    </CorebizMainContainer>
  );
}
