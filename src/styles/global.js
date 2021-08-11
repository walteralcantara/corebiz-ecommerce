import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  img {
    max-width: 100%;
    display: block;
  }

  body {
    font: 400 16px 'Nunito', sans-serif;
  }

  html {
    font-size: 62.5%; // 62.5% because, 1rem is equal to 10px, so 1.6rem is 16px.
    scroll-behavior: smooth;
  }

  a {
    text-decoration: none;
  }

  button {
    border: 0;
    cursor: pointer;
  }
`;
