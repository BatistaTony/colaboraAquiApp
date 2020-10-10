import styled from "styled-components";
import { colorsApp, flexbox, getFont } from "../layout/layoutStyle";
import { sizesForEachScreens } from "./../layout/layoutStyle";

export const MyNavbar = styled.div`
  width: 100%;
  height: 100%;
  ${flexbox("row", "space-between", "center")};
  padding-left: 6%;
  padding-right: 8%;
  box-sizing: border-box;

  @media (max-width: 750px) {
    height: 70px;
  }

  @media (max-height: 633px) {
    height: 100px;
  }

  @media (max-width: 1230px) {
    padding-left: 4%;
    padding-right: 4%;
  }
`;

export const Menu = styled.ul`
  width: auto;
  height: auto;
  list-style: none;
  ${flexbox()};

  @media (max-width: 750px) {
    height: 100vh;
    background: white;
    width: 100%;

    display: ${({ mobile }) => (mobile ? flexbox("column") : "none")};
  }
`;

export const ItemMenu = styled.li`
  padding: 5px;
  font-size: 17pt;
  ${getFont("Medium")};
  transition: 0.5s;
  cursor: default;
  margin-right: 10px;

  color: ${({ active }) => (active ? colorsApp.orange : "gray")};

  &:hover {
    color: ${colorsApp.orange};
  }

  @media (max-width: 2000px) {
    font-size: 15pt;
  }

  @media (max-width: 1500px) {
    font-size: 13pt;
  }

  @media (max-width: 1300px) {
    font-size: 12pt;
  }

  @media (max-width: 750px) {
    padding: 5px;
    margin-right: 0;
    font-size: 11pt;
  }
`;

export const Logo = styled.div`
  width: auto;
  height: auto;
  transition: 0.5s;

  img {
    width: 27rem;

    ${sizesForEachScreens([2000, 1500, 750], [24, 21, 15.5], "width", "rem")};
  }
`;

export const ButtonLogin = styled.button`
  height: 50px;
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
  font-size: 17pt;

  &:hover {
    background: ${colorsApp.roxo};
  }

  @media (max-width: 2000px) {
    font-size: 15pt;
    height: 40px;
  }

  @media (max-width: 1500px) {
    font-size: 12pt;
    height: 35px;
  }

  @media (max-width: 750px) {
    margin-left: 0;
    margin-top: 15px;
    font-size: 11pt;
  }
`;

export const UserName = styled.h5`
  font-size: 16pt;
  ${getFont()};
  color: black;
  cursor: default;
  ${flexbox()};

  span {
    width: 10px;
    height: 10px;
    background: ${colorsApp.orange};
    border-radius: 100%;
    margin-right: 7px;
  }

  svg {
    fill: ${colorsApp.orange};
    width: 50px;
    height: 50px;
    margin-left: 5px;
  }

  @media (max-width: 2000px) {
    font-size: 14pt;

    span {
      width: 6px;
      height: 6px;
      margin-right: 5px;
    }

    svg {
      width: 40px;
      height: 40px;
      margin-left: 5px;
    }
  }

  @media (max-width: 1500px) {
    font-size: 12pt;

    span {
      width: 5px;
      height: 5px;
      margin-right: 5px;
    }

    svg {
      width: 30px;
      height: 30px;
      margin-left: 5px;
    }
  }

  @media (max-width: 1350px) {
    font-size: 11pt;
  }
`;

export const DivUser = styled.div`
  width: auto;
  height: auto;
  ${flexbox("column")};
  position: relative;
  margin-left: 30px;
`;

export const MenuUser = styled.ul`
  width: 200px;
  height: auto;
  box-shadow: 0 0 5px black;
  border-radius: 3px;
  background: white;
  list-style: none;
  overflow: hidden;
  position: absolute;
  left: 0;
  top: 50px;

  @media (max-width: 1500px) {
    top: 35px;
  }

  @media (max-width: 750px) {
    position: relative;
    top: 0;
    margin-top: 10px;
  }

  li {
    width: 100%;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 10px;
    padding-right: 10px;
    color: ${colorsApp.darkGray};
    ${getFont("Medium")};
    font-size: 15pt;
    ${flexbox("row", "flex-start", "center")};
    cursor: default;
    transition: 0.5s;

    &:nth-child(1) {
      border-bottom: 0.5px solid rgb(0, 0, 0, 0.3);
    }

    &:hover {
      background: rgba(0, 0, 0, 0.1);
    }

    img {
      width: 30px;
      height: 30px;
      margin-right: 8px;
    }

    @media (max-width: 2000px) {
      font-size: 15pt;

      img {
        width: 25px;
        height: 25px;
      }
    }

    @media (max-width: 1500px) {
      font-size: 12pt;

      img {
        width: 20px;
        height: 20px;
      }
    }

    @media (max-width: 1300px) {
      font-size: 11pt;
    }
  }
`;

export const ButtonMobile = styled.div`
  @media (min-width: 750px) {
    display: none;
  }

  ${flexbox("column")};
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
    ${flexbox()};
    box-sizing: border-box;
  }
`;
