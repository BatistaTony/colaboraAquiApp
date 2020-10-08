import styled from "styled-components";
import { colorsApp, Flexbox, getFont } from "../layout/layoutStyle";

export const MyNavbar = styled.div`
  width: 100%;
  height: auto;
  ${Flexbox("row", "space-between", "center")};
  padding-left: 6%;
  padding-right: 8%;
  padding-top: 3%;
  padding-bottom: 3%;
  box-sizing: border-box;

  @media (max-width: 1230px) {
    padding-left: 4%;
    padding-right: 4%;
  }

  .my-node {
    @media (min-width: 750px) {
      display: none;
    }
  }

  .my-node-enter {
    opacity: 0;
    display: block;
  }

  .my-node-enter-active {
    opacity: 1;
    transition: opacity 200ms;
  }

  .my-node-exit {
    opacity: 1;
  }

  .my-node-exit-active {
    opacity: 0;
    display: none;
  }
`;

export const Menu = styled.ul`
  width: auto;
  height: auto;
  list-style: none;
  ${Flexbox()};

  @media (max-width: 750px) {
    height: 100vh;
    background: white;
    width: 100%;

    display: ${({ mobile }) => (mobile ? Flexbox("column") : "none")};
  }
`;

export const ItemMenu = styled.li`
  padding: 5px;
  font-size: 12.5pt;
  ${getFont("Medium")};
  transition: 0.5s;
  cursor: default;
  margin-right: 10px;

  color: ${({ active }) => (active ? colorsApp.orange : "gray")};

  &:hover {
    color: ${colorsApp.orange};
  }

  @media (max-width: 750px) {
    padding: 5px;

    margin-right: 0;
  }
`;

export const Logo = styled.div`
  width: auto;
  height: auto;

  img {
    width: 17rem;
  }
`;

export const ButtonLogin = styled.button`
  height: 35px;
  padding-left: 26px;
  padding-right: 26px;
  background: ${colorsApp.soDark};
  border-radius: 5px;
  transition: 0.5s;
  margin-left: 20px;
  color: white;
  border: none;
  outline: none;
  ${getFont("Medium")};
  font-size: 12pt;

  &:hover {
    background: ${colorsApp.roxo};
  }

  @media (max-width: 750px) {
    margin-left: 0;
    margin-top: 15px;
  }
`;

export const ButtonMobile = styled.div`
  @media (min-width: 750px) {
    display: none;
  }

  ${Flexbox("column")};
  border-radius: 5px;
  border: 2px solid ${colorsApp.orange};
  width: 38px;
  height: 33px;
  box-sizing: border-box;
  padding-top: 3px;
  z-index: 99;
  position: fixed;
  right: 4%;

  .line {
    width: 25px;
    border-radius: 10px;
    height: 4px;
    background-color: ${colorsApp.soDark};
    margin-bottom: 3px;
    transition: 0.5s;

    &:nth-child(1) {
      transform: ${({ openMenu }) =>
        openMenu ? " rotate(40deg) translate(5px, 6px)" : null};
    }

    &:nth-child(2) {
      opacity: ${({ openMenu }) => (openMenu ? "0" : null)};
    }

    &:nth-child(3) {
      transform: ${({ openMenu }) =>
        openMenu ? " rotate(-40deg) translate(4px, -5px)" : null};
    }
  }
`;

export const Overlay = styled.div`
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9;
  box-sizing: border-box;

  @media (min-width: 750px) {
    display: none;
  }

  .container {
    width: 100%;
    height: 100vh;
    ${Flexbox()};
    box-sizing: border-box;
  }
`;
