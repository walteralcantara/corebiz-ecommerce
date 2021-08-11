import styled from 'styled-components';

export const NewsContainer = styled.section`
  
  width: 100%;

  background: #f2f2f2;
  font-family: 'Lato', sans-Arial, Helvetica, sans-serif;

  h1 {
    font-family: inherit;
    text-align: center;
  }

  @media (max-width: 768px) {
    padding: 3rem 0.5rem;
  }

  @media (max-width: 425px) {
    h1 {
      text-align: left;
    }
  }
  `;

export const NewsContent = styled.div`
  max-width: 1360px;
  margin: 0 auto;
  padding: 3rem 1rem;
`;

export const Form = styled.form`

  display: grid;
  align-items: flex-start;
  grid-template-columns: repeat(2, 1fr) minmax(100px, 225px);
  gap: 1rem;
  max-width: 960px;
  margin: 0 auto;
  font-family: inherit;
  
  button {
    width: 50%;
    height: 100%;
    max-height: 50px;
    background: #000;
    color: #fff;
    font-family: inherit;
    font-weight: 700;
    font-size: 1.6rem;
    margin: 1rem 0;
    border-radius: .3rem;

    &:disabled {
      opacity: .2;
      cursor:not-allowed;
    }
  }

  @media (max-width: 768px) {
    div:nth-child(1), 
    div:nth-child(2) {
      grid-column: 1 / 4;
    }

    button {
      grid-column: 1 / 4;
      width: 100%;
    }
  }
`;

export const Success = styled.div`
  padding: 2rem;
  color: #000;
  text-align: center;

  button {
    width: 40%;
    height: 100%;
    max-height: 50px;
    background: #000;
    color: #fff;
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    font-size: 1.6rem;
    margin: 1rem 0;
    border-radius: .5rem;
    padding: 2rem 0rem;
  }

  .Toastify__toast--info {
    background: #87CC62;
    color: #fff;
    font-weight: 700;
    box-shadow: rgb(0 0 0 / 15%) 0px 4px 8px 0px, rgb(0 0 0 / 20%) 0px 6px 15px 0px;

    div[role^="progressbar"] {
      background: #53A547;
    }

    button {
      width: unset;
      padding: unset;
      background: transparent;
      color: #fff;
    }
  }

  @media (max-width: 768px) {
    button {
      width: 100%;
    }
  }
`
