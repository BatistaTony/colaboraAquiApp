import styled from "styled-components";
import { colorsApp, flexbox, getFont } from "../layout/layoutStyle";
import { sizesForEachScreens } from "../layout/layoutStyle";

export const MyNavbar = styled.div`
  width: 100%;
  height: 100%;
  ${flexbox("row", "space-between", "center")};
  padding-left: 6%;
  padding-right: 8%;
  box-sizing: border-box;
  z-index: 14;

  @media (max-width: 750px) {
    height: 70px;
    padding-top: 3%;
  }

  @media (max-height: 633px) {
    height: 80px;
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

    display: ${({ mobile }) =>
      mobile ? flexbox("column", "flex-start", "center") : "none"};
  }
`;

export const ItemMenu = styled.li`
  padding: 5px;
  font-size: 27pt;
  ${getFont("Medium")};
  transition: 0.5s;
  cursor: default;
  margin-right: 10px;

  color: ${({ active }) => (active ? colorsApp.orange : "gray")};

  &:hover {
    color: ${colorsApp.orange};
  }

  ${sizesForEachScreens(
    [3200, 3000, 2500, 1930, 1500],
    [23, 22, 19, 17, 12],
    "font-size",
    "pt"
  )};

  @media (max-width: 750px) {
    padding: 10px;
    margin-right: 0;
    font-size: 11pt;
    width: 100%;
    text-align: center;
  }
`;

export const Logo = styled.div`
  width: auto;
  height: auto;
  transition: 0.5s;

  @media (max-width: 700px) {
    margin-top: 10px;
  }

  img {
    width: 40rem;

    ${sizesForEachScreens(
      [3200, 2500, 2000, 1500, 1370, 750],
      [34, 27, 24, 20, 17, 14],
      "width",
      "rem"
    )};
  }
`;

export const ButtonLogin = styled.button`
  height: 70px;
  padding-left: 50px;
  padding-right: 50px;
  background: ${colorsApp.soDark};
  border-radius: 5px;
  transition: 0.5s;
  margin-left: 20px;
  color: white;
  border: none;
  outline: none;
  ${getFont("Medium")};
  font-size: 25pt;

  &:hover {
    background: ${colorsApp.roxo};
  }
  @media (max-width: 3200px) {
    font-size: 20pt;
    height: 60px;
    padding-left: 40px;
    padding-right: 40px;
  }

  @media (max-width: 2500) {
    font-size: 18pt;
    height: 55px;
    padding-left: 30px;
    padding-right: 30px;
  }

  @media (max-width: 2000px) {
    font-size: 15pt;
    height: 50px;
    padding-left: 25px;
    padding-right: 25px;
  }

  @media (max-width: 1500px) {
    font-size: 12pt;
    height: 40px;
  }

  @media (max-width: 750px) {
    margin-left: 0;
    margin-top: 15px;
    font-size: 11pt;
    width: 100%;
    text-align: center;
    border-radius: 0;
  }
`;

export const UserName = styled.h5`
  font-size: 25pt;
  ${getFont()};
  color: black;
  cursor: default;
  ${flexbox()};

  ${sizesForEachScreens(
    [3200, 3000, 2500, 1930, 1500],
    [26, 22, 19, 17, 12],
    "font-size",
    "pt"
  )}

  span {
    width: 20px;
    height: 20px;
    background: ${colorsApp.orange};
    border-radius: 100%;
    margin-right: 10px;

    ${sizesForEachScreens([3200, 3000, 2500], [17, 12, 7], "width", "px")}
    ${sizesForEachScreens([3200, 3000, 2500], [17, 12, 7], "height", "px")}
  }

  svg {
    fill: ${colorsApp.orange};
    width: 70px;
    height: 70px;
    margin-left: 5px;

    ${sizesForEachScreens(
      [3200, 3000, 2500, 1930, 1500],
      [60, 50, 40, 30, 25],
      "width",
      "px"
    )}
    ${sizesForEachScreens(
      [3200, 3000, 2500, 1930, 1500],
      [60, 50, 40, 30, 25],
      "height",
      "px"
    )}
  }

  @media (min-width: 750px) {
    width: 100%;
  }
`;

export const DivUser = styled.div`
  width: auto;
  height: auto;
  ${flexbox("column")};
  position: relative;
  margin-left: 30px;

  @media (min-width: 750px) {
    width: 100%;
  }

  ${sizesForEachScreens([3000, 2500, 1930], [20, 15, 10], "margin-left", "px")};
`;

export const MenuUser = styled.ul`
  width: ${({ nameLength }) => (nameLength > 25 ? "100%" : "300px")};
  height: auto;
  box-shadow: 0 0 5px black;
  border-radius: 3px;
  background: white;
  list-style: none;
  overflow: hidden;
  position: absolute;
  left: 0;
  top: 70px;
  z-index: 9;

  @media (max-width: 3200px) {
    top: 60px;
  }

  @media (max-width: 2500px) {
    top: 50px;
  }

  @media (max-width: 1930px) {
    width: ${({ nameLength }) => (nameLength > 25 ? "100%" : "250px")};
  }

  @media (max-width: 1500px) {
    top: 40px;
    width: ${({ nameLength }) => (nameLength > 25 ? "100%" : "200px")};
  }

  @media (max-width: 750px) {
    position: relative;
    top: 0;
    width: ${({ nameLength }) => (nameLength > 25 ? "100%" : "100%")};
    box-shadow: 0 0 0px;
  }

  li {
    width: 100%;
    padding: 20px;
    padding-right: 10px;
    color: ${colorsApp.darkGray};
    ${getFont("Medium")};
    font-size: 20pt;
    ${flexbox("row", "flex-start", "center")};
    cursor: default;
    transition: 0.5s;

    ${sizesForEachScreens(
      [3200, 2500, 1930, 1500],
      [18, 16, 13, 12, 11],
      "font-size",
      "pt"
    )};

    @media (max-width: 1930px) {
      padding: 15px;
      padding-right: 10px;
    }

    @media (max-width: 1530px) {
      padding: 10px;
    }

    @media (max-width: 750px) {
      padding: 5px;
      border: none;
    }

    &:nth-child(1) {
      border-bottom: 0.5px solid rgb(0, 0, 0, 0.3);

      @media (max-width: 750px) {
        border: none;
      }
    }

    &:hover {
      background: rgba(0, 0, 0, 0.1);
    }

    img {
      width: 40px;
      height: 40px;
      margin-right: 15px;

      ${sizesForEachScreens([3200, 2500, 1930], [35, 25, 20], "width", "px")};
      ${sizesForEachScreens([3200, 2500, 1930], [35, 25, 20], "height", "px")};

      @media (max-width: 750px) {
        margin-right: 7px;
      }
    }
  }
`;

export const ButtonMobile = styled.div`
  @media (min-width: 750px) {
    display: none;
  }

  ${flexbox("column")};
  border-radius: 100%;
  border: 2px solid ${colorsApp.soDark};
  width: 30px;
  height: 30px;
  box-sizing: border-box;
  padding-top: 3px;
  z-index: 3;
  padding-right: ${({ openMenu }) => (openMenu ? "1px" : 0)};

  .line {
    width: 15px;
    border-radius: 25px;
    height: 1.7px;
    background-color: ${colorsApp.soDark};
    margin-bottom: 2px;
    transition: 0.5s;

    &:nth-child(1) {
      transform: ${({ openMenu }) =>
        openMenu ? " rotate(40deg) translate(3px, 2.5px)" : null};
    }

    &:nth-child(2) {
      opacity: ${({ openMenu }) => (openMenu ? "0" : null)};
    }

    &:nth-child(3) {
      transform: ${({ openMenu }) =>
        openMenu ? " rotate(-40deg) translate(3px, -3px)" : null};
    }
  }
`;

export const Overlay = styled.div`
  width: 100%;
  height: 100vh;
  padding-top: 170px;
  background: white;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 2;
  box-sizing: border-box;

  @media (min-width: 750px) {
    display: none;
  }

  .container {
    width: 100%;
    height: 100%;
    ${flexbox()};
    box-sizing: border-box;
  }
`;
