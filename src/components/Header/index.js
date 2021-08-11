import React, { useState, useEffect } from 'react';

import { setScrolling } from '../../utils/setScrolling';

import { ReactComponent as UserIcon } from '../../images/userIcon.svg';

import CorebizLogo from '../../images/corebiz.svg';
import SearchIcon from '../../images/searchIcon.svg'
import CartIcon from '../../images/cartIcon.svg';

import { useContextAPI } from '../../context/ContextAPI';

import {
  HeaderContainer,
  HeaderContent,
  StyledBurger,
  Nav,
  SearchBarContainer,
  Cart
} from './styled';

export default function Header() {
  const [open, setOpen] = useState(false);
  const { totalProducts } = useContextAPI();

  useEffect(() => {
    if (window !== undefined) {
      setScrolling('header');
    }
  }, []);

  return (
    <HeaderContainer>
      <HeaderContent>
        <StyledBurger open={open} onClick={() => setOpen(!open)} className="burger">
          <div />
          <div />
          <div />
        </StyledBurger>

        <div className="logo">
          <img src={CorebizLogo} alt="Corebiz." />
        </div>

        <SearchBarContainer>
          <input
            type="text"
            placeholder="O que está procurando?"
          />
          <button>
            <img src={SearchIcon} alt="Pesquisar" />
          </button>
        </SearchBarContainer>

        <Nav open={open}>
          <li>
            <a href='#minhaconta'>
              <UserIcon />
              <span>Minha Conta</span>
            </a>
          </li>
        </Nav>

        <Cart href='#carrinho' className="cart">
          <img src={CartIcon} alt="Meu Carrinho" />
          <span className="cout">{totalProducts}</span>
        </Cart>
      </HeaderContent>
    </HeaderContainer>
  );
}
