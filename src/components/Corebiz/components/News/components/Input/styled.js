import styled, { css } from "styled-components";

export const InputContainer = styled.div`
  position: relative;

  input {
    width: 100%;
    padding: .5rem;
    font-size: 2rem;
    color: #000;
    background: #fff;
    outline: none;
    border: 0;
    border-radius: .3rem;
    height: 50px;

    &:focus {
      border: 1px solid #000;
      border-radius: .3rem;
    }

    &:focus + span,
    &:valid + span {
        top: -8px;
        left: 5px;
        font-size: 1.3rem;
        padding: 0 10px;
        background: #F2F2F2;
    }

    ${({ error }) => error && css`
      color: #fc5050;
      border: 1px solid #fc5050 !important;
    `}
  }

  span {
    position: absolute;
    top: 8px;
    left: 15px;
    font-size: 1.4rem;
    letter-spacing: .05em;
    pointer-events: none;
    font-weight: bold;
    transition: .4s;
    color: #000;

    ${({ error }) => error && css`
      color: #fc5050;
    `}
  }
`
