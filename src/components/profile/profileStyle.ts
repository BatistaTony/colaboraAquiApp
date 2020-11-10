import styled from "styled-components";
import {
  colorsApp,
  flexbox,
  getFont,
  sizesForEachScreens,
} from "../layout/layoutStyle";
import {
  ConsumerAvatar,
  ConsumerName,
} from "../rateCompany/companySuggestionAndRateStyle";

const widthContainer = () => `
width:65%;
${sizesForEachScreens([1500, 1170, 900], [75, 80, 90], "width", "%")};
`;

export const ProfileContent = styled.div`
  margin-top: 150px;
  width: 100%;
  ${flexbox()};
  ${sizesForEachScreens(
    [3200, 2900, 2500, 1500, 750],
    [130, 115, 90, 70, 30],
    "margin-top",
    "px"
  )};
`;

export const HeaderProfileStyle = styled.div`
  display: grid;
  grid-template-columns: 90% 10%;
  ${widthContainer()};
  justify-content: center;
  align-items: flex-start;

  .divOne {
    ${flexbox("row", "flex-start", "flex-start")};
  }
`;

export const UserAvatarProfile = styled(ConsumerAvatar)`
  width: 115px;
  height: 115px;
  font-size: 50pt;

  ${sizesForEachScreens(
    [3200, 3000, 2500, 2000, 1700, 1600, 1490, 1000],
    [110, 105, 95, 80, 75, 65, 50, 40],
    "width",
    "px"
  )};
  ${sizesForEachScreens(
    [3200, 3000, 2500, 2000, 1700, 1600, 1490, 1000],
    [110, 105, 95, 80, 75, 65, 50, 40],
    "height",
    "px"
  )};

  ${sizesForEachScreens(
    [3000, 2500, 2000, 1700, 1500, 1490, 1000],
    [40, 35, 33, 29, 24, 21, 15],
    "font-size",
    "pt"
  )};
`;

export const UserInfoContainer = styled.div`
  ${flexbox("column", "flex-start", "flex-start")};

  padding-left: 35px;
  box-sizing: border-box;

  ${sizesForEachScreens(
    [3000, 2500, 2000, 1500, 750],
    [30, 25, 20, 15, 10],
    "padding-left",
    "px"
  )}

  .name_div_and_sgdry_THfdhf {
    ${flexbox()};
  }
`;

const marginTop = () => `
margin-top: 6px;


`;

export const UserNameProfile = styled(ConsumerName)`
  font-size: 45pt;
  ${getFont("SemiBold")};
  color: ${colorsApp.textPrimary};
  ${marginTop()};

  ${sizesForEachScreens(
    [3000, 2500, 2000, 1700, 1500, 1490, 1000],
    [35, 30, 28, 25, 20, 16.5, 13],
    "font-size",
    "pt"
  )};
`;

export const ActionTitleProfile = styled(UserNameProfile)`
  ${getFont("Medium")};
  color: ${colorsApp.textPrimary};

  span {
    width: 19px;
    height: 19px;
    background: ${colorsApp.orange};
    border-radius: 100%;
    margin-right: 20px;
    margin-left: 20px;

    @media (max-width: 1500px) {
      margin-right: 10px;
      margin-left: 10px;
    }

    ${sizesForEachScreens([3000, 2000, 1500], [16, 13, 7], "width", "px")};
    ${sizesForEachScreens([3000, 2000, 1500], [16, 13, 7], "height", "px")};
  }
`;

export const InfoWorning = styled.p`
  font-size: 27pt;
  ${getFont("Medium")};
  color: ${colorsApp.textPrimary};
  ${marginTop()};

  ${sizesForEachScreens(
    [3200, 3000, 2500, 1930, 1700, 1500, 1390],
    [25, 21, 18, 16, 13, 12, 10],
    "font-size",
    "pt"
  )};
`;

export const RatesMadeByUser = styled.div`
  border-radius: 15px;

  background: white;
  border: 1px solid ${colorsApp.textPrimary};
  width: auto;

  ${sizesForEachScreens(
    [3000, 2500, 1700],
    [13, 12.5, 10],
    "border-radius",
    "px"
  )};
`;

export const NumbersOfUserRates = styled(UserNameProfile)`
  color: ${colorsApp.roxo};
  ${getFont("Medium")};
  span {
    ${getFont("Bold")};
  }
`;
