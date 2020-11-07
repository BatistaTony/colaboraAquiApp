import styled from "styled-components";
import {
  colorsApp,
  flexbox,
  getFont,
  sizesForEachScreens,
} from "../layout/layoutStyle";

export const Container = styled.section`
  width: 100%;
  ${flexbox("column", "flex-start", "center")};
  overflow-y: hidden;
  overflow-x: hidden;
  background: #fff;
  height: auto;
`;

export const StarsDiv = styled.div`
  width: 150px;
  height: 35px;
  align-self: center;

  @media (min-width: 1230px) {
    width: 150px;
    height: 35px;
  }
  @media (min-width: 3230px) {
    width: 200px;
    height: 35px;
  }
`;

export const Image = styled.img`
  width: 90%;
  height: auto;

  @media (min-width: 750px) {
    width: 70%;
  }
  @media (min-width: 1000px) {
    width: 60%;
  }
  @media (min-width: 1230px) {
    width: auto;
    height: auto;
  }
`;
export const Text = styled.p`
  width: 60%;
  height: auto;

  text-align: center;
  color: ${colorsApp.soDark};
  font-size: 45pt;
  ${getFont("Medium")};

  margin-top: 15px;
  ${sizesForEachScreens([1000, 750, 450, 300], [60, 75, 80, 90], "width", "%")};
  ${sizesForEachScreens([1500], [0], "margin-top", "")};
  ${sizesForEachScreens([450], [10], "margin-top", "px")};

  ${sizesForEachScreens(
    [3200, 2500, 2000, 1500, 1300, 450],
    [40, 35, 28, 17, 14, 13],
    "font-size",
    "pt"
  )};
`;

export const Bold = styled.span`
  color: ${colorsApp.roxo};
  ${getFont("bold")};
`;

export const List = styled.div`
  width: 100%;
  height: auto;
  position: relative;
  margin-top: 50px;
  padding-top: 40px;
  ${flexbox("column", "flex-start", "center")};

  @media (max-width: 450px) {
    margin-top: 20px;
  }

  background: rgba(75, 85, 186, 0.01);

  :after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 0;
    height: 0;
    border-top: 80px solid #fff;
    border-left: 50vw solid transparent;
    border-right: 50vw solid transparent;
    border-radius: 0 0 100% 100%;
  }
`;

export const CardRankingContainer = styled.div`
  width: 74%;
  min-height: 130px;
  max-height: 200px;
  position: relative;
  align-self: center;
  z-index: 1;
  padding: 10px 20px;
  margin: 15px auto;
  border-radius: 30px;
  box-sizing: border-box;
  box-shadow: 0px 4px 24px rgba(75, 85, 186, 0.05);

  ${flexbox("column", "space-between", "center")};

  @media (max-width: 450px) {
    height: auto;
  }

  @media (max-width: 750px) {
    height: 200px;
    width: 85%;
    min-height: 200px;
    padding-bottom: 25px;
  }

  @media (min-width: 750px) {
    height: 200px;
    margin: 30px auto;
    min-height: 200px;
  }

  @media (min-width: 1000px) {
    ${flexbox("row", "space-between", "center")};
    margin: 40px auto;
    height: 130px !important;
    min-height: 130px;
  }

  @media (min-width: 1230px) {
    width: 70% !important;
    background: #fff;
  }

  @media (min-width: 1800px) {
    max-width: 1500px;
    height: 200px !important;
    padding: 10px 50px;
    border-radius: 32px;
  }
`;

export const FloatCircle = styled.div`
  width: 40px;
  height: 40px;
  position: absolute;
  top: -20px;
  left: -20px;

  ${flexbox("row", "center", "center")};

  background: #293133;

  border-radius: 100%;
  border: 4px solid #575d5f;

  p {
    color: #fff;
    ${getFont("bold")};
  }
  @media (max-width: 450px) {
    width: 30px;
    height: 30px;
    top: -15px;
    left: -5px;
    border-size: 2px;

    font-size: 14px;
  }
  @media (min-width: 1800px) {
    width: 60px;
    height: 60px;
    top: -30px;
    left: -30px;
    border-size: 6px;

    font-size: 28px;
  }
`;

export const Content = styled.div`
  width: 100%;
  height: auto;
  ${flexbox("row", "space-between", "center")};

  @media (max-width: 390px) {
    ${flexbox("column", "space-between", "flex-start")};
  }

  @media (min-width: 1000px) {
    width: 400px;
  }

  @media (min-width: 1800px) {
    width: 50% !important;
  }
`;
export const DivRow = styled.div`
  width: auto;
  height: auto;
  ${flexbox("row", "flex-start", "center")};

  @media (min-width: 1800px) {
    margin-right: 10px;
  }
`;

export const Row = styled.div`
  width: auto;
  height: auto;
  ${flexbox("column", "flex-start", "center")};

  @media (min-width: 1230px) {
    ${flexbox("row", "space-evenly", "center")};
  }
`;

export const CompanyLogoDiv = styled.div`
  width: 90px;
  height: 90px;
  background-color: #fff;
  background-image: ${({ img }) => ` url(${img})`};
  background-size: 50px;
  background-position-y: center;
  background-position-x: center;
  background-repeat: no-repeat;
  border-radius: 100%;
  border: 3px solid rgba(75, 85, 186, 0.06);
  margin-right: 10px;

  @media (max-width: 480px) {
    width: 60px !important;
    height: 60px !important;
    margin-bottom: 10px;
  }

  @media (min-width: 1800px) {
    width: 120px !important;
    height: 120px !important;
    background-size: 100px;
    border: 6px solid rgba(75, 85, 186, 0.06);
    margin-right: 20px;
  }
`;
export const CompanyName = styled.p`
  font-size: 20px;
  ${getFont("Bold")};
  color: #000;

  @media (max-width: 750px) {
    font-size: 15px;
  }

  @media (min-width: 1800px) {
    font-size: 35px;
  }
`;
export const AllAvaliatiins = styled.p`
  font-size: 12px;
  ${getFont()};
  color: #6e6e6e;
  margin: 5px 0;

  @media (min-width: 1800px) {
    font-size: 27px;
  }

  span {
    ${getFont("Bold")};
  }
`;

export const StarContainer = styled.div`
  width: 150px;
  height: 35px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  box-sizing: border-box;
  align-self: flex-start;
  margin: 20px 0;
`;

export const Description = styled.p`
  width: 90%;
  height: 120px;
  margin-left: 5%;
  max-lines: 3;
  font-size: 18px;
  ${getFont()};
  color: #fff;
`;

export const AvaliationsDiv = styled.div`
  width: 100%;
  height: auto;

  margin-top: 10px;
  margin-left: 10px;
  ${flexbox("column", "flex-start", "flex-start")};
  border-top: solid 1px rgba(112, 112, 112, 0.12);

  @media (max-width: 1000px) {
    margin-left: 0;
  }

  @media (min-width: 1000px) {
    width: 100%;
    border: none;
    width: auto;
    margin-top: 0;

    ${flexbox("column", "flex-end", "flex-end")};
  }
`;

export const Title = styled.p`
  font-size: 14px;
  ${getFont("Medium")};
  color: #6e6e6e;
  margin: 5px 0;
  align-self: flex-start;
  @media (min-width: 1800px) {
    font-size: 27px;
  }
`;
export const CardRow = styled.div`
  width: 350px;
  height: auto;
  grid-column-gap: 15px;
  display: grid;
  grid-template-columns: repeat(3, 0.9fr);

  @media (max-width: 750px) {
    width: 100%;
    grid-column-gap: 20px;

    grid-template-columns: repeat(3, auto);
  }
`;
export const Avaliation = styled.div`
  width: 100%;
  height: auto;
  position: relative;

  background: ${({ color }) =>
    color == "positive"
      ? "rgba(75, 85, 186, 0.11)"
      : color == "normal"
      ? "rgba(252, 190, 10, 0.11)"
      : "rgba(249, 63, 63, 0.11)"};
  padding: 5px;

  border-radius: 6px;
  margin-right: 5px;

  p {
    font-size: 12px;
    ${getFont("Medium")};
    width: 100%;
    text-align: center;

    color: ${({ color }) =>
      color == "positive"
        ? "rgb(75, 85, 186)"
        : color == "normal"
        ? "rgb(252, 190, 10)"
        : "rgb(249, 63, 63)"};
  }

  @media (max-width: 450px) {
    width: 60px;
    height: 40px;
    padding: 0 4px;
  }
  @media (min-width: 1000px) {
    width: auto;
  }
  @media (min-width: 1800px) {
    width: auto;
    margin-right: 10px;
    p {
      font-size: 22px;
    }
  }
`;
