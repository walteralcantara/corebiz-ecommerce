import React from 'react';

import { ReactComponent as MailIcon } from '../../images/mailIcon.svg'
import { ReactComponent as ConsultingIcon } from '../../images/consultingIcon.svg'

import corebizFoo from '../../images/corebizFoo.svg'
import vtexFoo from '../../images/vtexFoo.svg'

import { FooterContainer, FooterContent } from './styled';

export default function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <div className="address">
          <h3>Localização</h3>
          <p>Avenida Andrômeda, 2000. Bloco 6 e 8</p>
          <p>Alphaville SP</p>
          <a href="mailto:brasil@corebiz.ag">
            brasil@corebiz.ag
          </a>
          <a href="tel:551130901039">+55 11 3090 1039</a>
        </div>

        <div className="contact-us">
          <a href="#contato">
            <MailIcon />
            <span>Entre em contato</span>
          </a>
          <a href="#faleconosco">
            <ConsultingIcon />
            Fale com o nosso consultor online
          </a>
        </div>

        <div className="development">
          <div>
            <span>Created by</span>
            <img src={corebizFoo} alt="corebiz." />
          </div>
          <div>
            <span>Powered by</span>
            <img src={vtexFoo} alt="VTEX" />
          </div>
        </div>
      </FooterContent>

      <p className="walter">Made with ❤ by
        <a href="https://github.com/wmalcantara" target='_blank' rel="noreferrer">
          Walter
        </a>
      </p>
    </FooterContainer>
  );
}
