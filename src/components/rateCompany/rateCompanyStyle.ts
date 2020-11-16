import styled from "styled-components";
import {
  colorsApp,
  flexbox,
  getFont,
  sizesForEachScreens,
  NormalFontSize,
} from "../layout/layoutStyle";

export const Container = styled.div`
  width: 100%;
  height: ${({ length }) => (length ? "100vh" : "auto")};
  background: #fff;
  ${flexbox("column", "flex-start", "center")};
  box-sizing: border-box;

  @media (max-height: 790px) {
    height: ${({ length }) => (length ? "150vh" : "auto")};
  }

  @media (max-height: 600px) and (max-width: 900px) {
    height: ${({ length }) => (length ? "170vh" : "auto")};
  }

  @media (max-height: 546px) {
    height: ${({ length }) => (length ? "180vh" : "auto")};
  }

  @media (max-height: 510px) {
    height: ${({ length }) => (length ? "1000px" : "auto")};
  }
`;

const widthContainer = () => `

width:75%;

${sizesForEachScreens([1500, 1170, 900], [75, 80, 90], "width", "%")};

`;

export const Header = styled.div`
  ${widthContainer()};
  height: auto;
  position: relative;
  margin-top: 150px;
  ${flexbox("row", "space-between", "center")};

  ${sizesForEachScreens(
    [3200, 2900, 2500, 1500, 750],
    [130, 115, 90, 70, 30],
    "margin-top",
    "px"
  )};

  @media (max-width: 650px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const HeaderInforCompany = styled.div`
  height: auto;
  ${flexbox("row", "space-between", "center")};

  @media (max-width: 650px) {
    flex-direction: column;
    width: 90%;
  }

  .containerFor_Dgsgdf_Gdfd_df {
    ${flexbox("row", "space-between", "center")};

    @media (max-width: 650px) {
      width: 100%;
      margin-top: 20px;
    }
  }

  .companyInfo {
    margin-left: 30px;

    @media (max-width: 1500px) {
      margin-left: 30px;
    }

    @media (max-width: 700px) {
      margin-left: 15px;
    }

    @media (max-width: 650px) {
      margin-left: 0;
    }
  }

  .starsContainer {
    margin-left: 50px;
    ${sizesForEachScreens(
      [1500, 880, 800, 750, 650],
      [50, 40, 30, 20, 0],
      "margin-left",
      "px"
    )};
  }
`;

export const CompanyLogo = styled.div`
  width: 300px;
  height: 300px;
  background-color: white;
  background-image: ${({ img }) => ` url(${img})`};
  background-size: 70%;
  background-position-y: center;
  background-position-x: center;
  background-repeat: no-repeat;
  border-radius: 100%;
  border: 1px solid rgba(41, 49, 51, 0.1);

  ${sizesForEachScreens(
    [3200, 2700, 2300, 1930, 1500, 1000, 750],
    [250, 200, 180, 150, 120, 110, 100],
    "width",
    "px"
  )};

  ${sizesForEachScreens(
    [3200, 2700, 2300, 1930, 1500, 1000, 750],
    [250, 200, 180, 150, 120, 110, 100],
    "height",
    "px"
  )};
`;

export const NameOfComapny = styled.p`
  color: ${colorsApp.soDark};
  font-size: 45pt;
  ${getFont("Bold")};
  margin-bottom: 5px;

  ${sizesForEachScreens(
    [3200, 2700, 2300, 1930, 1500, 1000, 750, 650, 600],
    [40, 37, 33, 28, 23, 20, 17, 15, 13.5],
    "font-size",
    "pt"
  )};
`;

export const Avaliations = styled.p`
  color: ${colorsApp.textSecundary};
  font-size: 35pt;
  ${getFont()};

  span {
    ${getFont("Bold")};
  }

  ${sizesForEachScreens(
    [3200, 2700, 2300, 1930, 1500, 1000, 750, 650],
    [30, 27, 23, 20, 15, 13, 12, 11.5],
    "font-size",
    "pt"
  )};
`;

export const HeaderAvaliation = styled.div`
  ${flexbox("row", "justify-content", "center")};

  @media (max-width: 650px) {
    width: 90%;
    margin-top: 20px;
  }
`;

export const RateButton = styled.button`
  position: relative;
  background: ${colorsApp.roxo};
  border-radius: 15px;
  border: 0;
  outline: none;
  cursor: pointer;
  text-align: center;
  color: #fff;
  font-size: 30pt;
  ${getFont("Medium")};
  ${flexbox()};
  height: 100px;
  width: 350px;

  -webkit-box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);

  @media (max-width: 3200px) {
    -webkit-box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
    -moz-box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 2500px) {
    -webkit-box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    -moz-box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }

  ${sizesForEachScreens(
    [3000, 2500, 1700],
    [13, 12.5, 10],
    "border-radius",
    "px"
  )};

  @media (max-width: 1500px) {
    height: 35px;
    border-radius: 8px;
    font-size: 14pt;
    width: auto;
    padding-right: 25px;
    padding-left: 25px;
  }

  ${sizesForEachScreens(
    [3000, 2700, 2500, 2000, 1700, 1100],
    [90, 75, 65, 55, 50, 40],
    "height",
    "px"
  )}

  ${sizesForEachScreens(
    [3000, 2700, 2500, 2000, 1700, 1100],
    [300, 280, 250, 200, 180, 170],
    "width",
    "px"
  )};

  ${sizesForEachScreens(
    [3200, 2700, 2200, 1700, 1500, 1100, 750],
    [27, 24, 20, 18, 15, 13, 12],
    "font-size",
    "pt"
  )};

  img {
    width: 50px;
    height: 50px;
    margin-left: 30px;

    ${sizesForEachScreens(
      [3200, 2700, 2200, 1700, 1500, 1000, 750],
      [50, 40, 35, 30, 25, 23, 20, 18],
      "height",
      "px"
    )};

    ${sizesForEachScreens(
      [3200, 2700, 2200, 1700, 1500, 1000, 750],
      [50, 40, 35, 30, 25, 23, 20, 18],
      "width",
      "px"
    )};
  }

  @media (max-width: 650px) {
    width: 100%;
    height: 45px;
    font-size: 13pt;
    ${flexbox()};

    img {
      position: absolute;
      right: 10px;
    }
  }
`;

export const Text = styled.p`
  ${widthContainer()};
  height: auto;
  text-align: justify;
  color: ${colorsApp.darkGreen};
  font-size: 38pt;
  ${getFont()};
  margin-top: 40px;

  ${sizesForEachScreens(
    [3200, 2500, 2000, 1700, 1500, 1300, 900, 690],
    [34, 30, 25, 18, 15, 13.5, 12, 11],
    "font-size",
    "pt"
  )};

  @media (max-width: 650px) {
    margin-top: 30px;
  }
`;
