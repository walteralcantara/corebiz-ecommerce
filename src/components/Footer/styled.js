import styled from 'styled-components';

export const FooterContainer = styled.footer`
  width: 100%;
  color: #fff;
  background: #000;
  font-family: 'Nunito', sans-serif;

  .walter {
    display: block;
    text-align: center;
    padding: 5rem 0 0 0;

    a {
      text-decoration: underline;
      color: #fff;
      margin: 0 1rem;
    }
  }
`;

export const FooterContent = styled.div`
  max-width: 1360px;
  margin: 0 auto;
  padding: 3rem 1rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  .address {
    h3:after {
        content: '';
        display: block;
        width: 5rem;
        height: 5px;
        background: #fff;
        margin: 2rem 0;
    }
    p, a {
     line-height: 1.8;
    }
    a {
      display: block;
      color: inherit;
    }
  }

  .contact-us {
    a {
      display: flex !important;
      align-items: center;
      background: #fff;
      color: #000;
      display: block;
      margin: 2rem 0;
      padding: 1rem 1.5rem;
      max-width: 250px;
      border-radius: .5rem;
      font-size: 16px;
      text-transform: uppercase;
      font-weight: 700;

      svg {
        min-width: 30px;
        min-height: 30px;
        margin: 0 1rem;
      }
    }

  }

  .development {
    display: flex;
    align-items: center;

    div {
      margin: 1rem;
      > img {
        min-height: 3rem;
      }
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1rem;

    .address {
      width: 100%;
    }

    .development {
      justify-content: space-between;
      width: 100%;
    }
  }
`;
