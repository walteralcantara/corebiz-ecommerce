import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100%;
  background: #fff;
  position: fixed;
  z-index: 100;
  transition: border-bottom 0.3s ease;

  &.scrolling-active {
    background: #fff;
    border-bottom: 4px solid #000;
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  max-width: 1360px;
  margin: 0 auto;
  padding: 1rem;

  font-family: 'Nunito', sans-serif;

  .logo {
    min-width: 16rem;
  }

  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 2fr;
    padding: .5rem;

    .burger, .logo, .cart {
      grid-row: 1;
    }
    
    .logo {
      flex: 1;
      justify-self: center;
    }

    .cart {
      justify-self: end;
    }

    > div:nth-child(3) {
      margin: 1rem 0;
      grid-column: 1 / 4;
      width: 100% !important;
    }
  }
`;

export const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
  z-index: 1;
  display: none;

  div {
    width: 2.22rem;
    height: .25rem;
    background-color: #000;
    transform-origin: 1px;
    transition: 0.3s ease;
    
    &:nth-child(1) {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }
    &:nth-child(2) {
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

export const Nav = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  flex-flow: row nowrap;
  text-align: center;
  padding: 0.875rem;
  margin: 0px;
  font-weight: 700;
  
  li a {
    font-weight: bold;
    color: #000;
    transition: 0.7s ease;
    display: flex;
    align-items: center;
    font-size: 1.3rem;

    svg {
      min-width: 2rem;
      min-height: 2rem;
      margin: 0 .5rem;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    background: #ffe;
    position: fixed;
    filter: brightness(0.95);
    border-right: .15rem solid #000;
    transform: ${({ open }) => (open ? 'translateX(-0)' : 'translateX(-100%)')};
    top: 0;
    left: 0;
    height: 100vh;
    width: 200px;
    transition: transform 0.3s ease-in-out;
    padding-top: 1rem;
    
    li:first-child {
      margin-top: 6rem;
    }

    li {
      padding: 0rem;
      width: 100%;

      a {
        justify-content: center;
        padding: 1rem 0;
        background: #000;
        color: #fff;
        border-radius: .5rem;
        svg path {
          fill: #fff;
        }
      }
    }
  }
`;

export const SearchBarContainer = styled.div`
  position: relative;
  width: 60%;
  padding: 0 1rem;
  
  input {
    border: 0;
    border-bottom: 1px solid #000;
    width: 100%;
    padding: .5rem 0;
    ::placeholder {
      opacity: .7;
    }
  }

  button {
    position: absolute;
    border: none;
    background: transparent;
    right: 1.5rem;
    bottom: .5rem;
    cursor: pointer;
  }
`;

export const Cart = styled.a`
  font-weight: bold;
  color: #000;
  transition: 0.7s ease;
  display: flex;
  align-items: center;
  font-size: 1.3rem;

  img {
    min-width: 2.5rem;
    min-height: 2.5rem;
    padding: 0 .25rem;
  }
  
  .cout {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    background: #F8475F;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    font-weight: 700;
  }
`;
