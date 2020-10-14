import styled from "styled-components";
import {
  colorsApp,
  flexbox,
  getFont,
  sizesForEachScreens,
  NormalFontSize,
} from "../layout/layoutStyle";

export const ContentCompanies = styled.div`
  width: 100%;
  height: auto;
  ${flexbox("column")};
`;

export const TextCompanies = styled.p`
  width: 40%;
  height: auto;
  font-size: 15pt;
  ${getFont()};
  text-align: center;

  span {
    ${getFont("Bold")};
    color: ${colorsApp.roxo};
  }
`;

export const FilterStyled = styled.div`
  width: 100%;
  height: auto;
  position: relative;
  ${flexbox("column")};
  margin-top: 30px;

  .filter_1_ {
    ${flexbox("row")};
    width: 100%;
    height: 100px;
    position: relative;

    ${sizesForEachScreens(
      [3200, 2500, 1930, 1500, 1370],
      [90, 70, 60, 50, 40],
      "height",
      "px"
    )}
  }

  .filter_status {
    width: 100%;
    height: auto;
    ${flexbox("row")};
    list-style: none;
    margin-top: 30px;

    li {
      font-size: 30pt;
      ${getFont()};
      margin-left: 20px;
      padding: 10px;
      padding-top: 3px;
      padding-bottom: 5px;
      border-radius: 5px;
      cursor: default;
      transition: 0.5s;

      ${sizesForEachScreens(
        [3200, 3000, 2500, 1930, 1500],
        [26, 22, 19, 17, 11],
        "font-size",
        "pt"
      )};
      &:hover {
        background: ${colorsApp.orange};
      }
    }

    .activeItem {
      background: ${colorsApp.orange};
    }
  }
`;

export const SearchStyled = styled.div`
  width: 500px;
  display: grid;
  height: 100%;
  border-radius: 5px;
  grid-template-columns: 10% 90%;
  background: white;
  box-shadow: 0 0 3px ${colorsApp.orange};
  padding-left: 10px;

  input {
    font-size: 30pt;
    height: 100%;
    ${getFont()};
    color: ${colorsApp.soDark};
    border: none;
    outline: none;
    background: transparent;
    box-sizing: border-box;
    text-align: left;

    &::placeholder {
      color: ${colorsApp.soDark};
    }

    ${sizesForEachScreens(
      [3200, 3000, 2500, 1930, 1500],
      [26, 22, 19, 17, 12],
      "font-size",
      "pt"
    )};
  }
`;

export const ButtonSuggest = styled.button`
  width: auto;
  height: auto;
  background: ${colorsApp.roxo};
  color: white;
  font-size: 25pt;
  height: 100%;
  position: absolute;
  right: 7%;
  border-radius: 5px;
  border: none;
  outline: none;
  padding-left: 14px;
  padding-right: 14px;

  ${getFont()};
  ${sizesForEachScreens(
    [3200, 3000, 2500, 1930, 1500],
    [26, 22, 19, 17, 12],
    "font-size",
    "pt"
  )};
`;

export const CompanyList = styled.div`
  width: 100%;
  height: 270px;
  margin-top: 40px;
  ${flexbox("row", "center", "center")};
  position: relative;
`;

export const GroupCard = styled.div`
  width: 70%;
  height: auto;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-gap: 30px;
  align-items: center;
`;

export const Card = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background-color: ${colorsApp.roxo};
  ${flexbox("column")};
  padding: 20px;
  box-sizing: border-box;

  .header_card {
    display: grid;
    width: 100%;
    grid-template-columns: 50% 50%;
    align-items: center;

    .div1_er_ {
      ${flexbox("row")};

      .company_info_ {
        margin-left: 16px;
      }
    }

    .stars_rt_cmpy {
      ${flexbox("row", "center", "flex-end")};
    }
  }
`;

export const CompanyLogo = styled.div`
  width: 75px;
  height: 75px;
  border-radius: 100%;
  background: white;
  ${flexbox()};
  overflow: hidden;

  img {
    width: 3.8rem;
  }
`;

export const CompanyName = styled.h1`
  font-size: 13pt;
  ${getFont("Bold")};
  color: white;
`;

export const CompanyRateNumbers = styled.p`
  font-size: 30pt;
  ${getFont()};
  color: white;

  span {
    ${getFont("Bold")};
  }

  ${NormalFontSize};
`;

export const StarsRated = styled.div`
  padding: 10px;
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.3);
  height: 100%;
  position: relative;
  width: 70%;
`;

export const StarRate = styled.div`
  background-color: red;
  width: 30px;
  height: 30px;
`;

export const DescriptionCard = styled.p`
  font-size: 30pt;
  ${getFont()};
  color: white;
  width: 95%;
  margin-top: 15px;

  ${sizesForEachScreens(
    [3200, 3000, 2500, 1930, 1500],
    [26, 22, 19, 17, 11],
    "font-size",
    "pt"
  )};
`;

export const ButtonControl = styled.div`
  width: 100%;
  ${flexbox("row", "space-between", "center")};
  position: absolute;
  padding-left: 50px;
  padding-right: 50px;
  box-sizing: border-box;

  button {
    width: 40px;
    height: 40px;
    border: 2px solid gray;
    outline: none;
    ${flexbox()};
    border-radius: 100%;
    background: transparent;

    img {
      width: 30px;
      height: 30px;
    }
  }
`;
