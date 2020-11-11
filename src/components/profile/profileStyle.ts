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
  ${flexbox("column")};
  ${sizesForEachScreens(
    [3200, 2900, 2500, 1500, 750],
    [130, 115, 90, 70, 30],
    "margin-top",
    "px"
  )};
`;

export const HeaderProfileStyle = styled.div`
  display: grid;
  grid-template-columns: 75% 25%;
  ${widthContainer()};
  justify-content: center;
  align-items: flex-start;

  .divOne {
    ${flexbox("row", "flex-start", "flex-start")};
  }

  .divSecond {
    width: 100%;
    height: 100%;
    ${flexbox("row", "flex-end", "center")};
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
  background: #fdfdfe;
  width: auto;
  padding-top: 6px;
  padding-bottom: 6px;
  padding-left: 15px;
  padding-right: 30px;
  border: 1px solid rgba(0, 0, 0, 0.1);

  ${sizesForEachScreens(
    [3000, 2500, 1700],
    [13, 12.5, 10],
    "border-radius",
    "px"
  )};

  .smplTxt {
    font-size: 27pt;
    ${getFont("Medium")};
    margin-top: 3px;

    ${sizesForEachScreens(
      [3200, 3000, 2500, 1930, 1700, 1500, 1390],
      [25, 21, 18, 16, 13, 12, 10],
      "font-size",
      "pt"
    )};
  }
`;

export const NumbersOfUserRates = styled(UserNameProfile)`
  color: ${colorsApp.roxo};
  ${getFont("Medium")};
  ${flexbox("row", "flex-start", "center")};
  font-size: 13pt;
  margin-top: 0;
  width: 100%;

  span {
    ${getFont("Bold")};
    margin-right: 5px;
    margin-left: 5px;
    margin-top: 0;
  }

  img {
    width: 27px;
    height: 27px;
  }
`;

export const ProfileContainerGrid = styled.div`
  ${widthContainer()};
  display: grid;
  grid-template-columns: 35% 65%;
  height: auto;
  grid-template-rows: grid-auto-columns;
  margin-top: 30px;

  .divOne,
  .divSecond {
    width: 100%;
    height: 100%;
  }
`;

export const MenuProfile = styled.ul`
  width: 100%;
  height: auto;
  ${flexbox("column")};
  list-style: none;
  margin-bottom: 10px;
`;

export const MenuItemProfile = styled.li`
  width: 100;
  font-size: 11pt;
  ${getFont("Medium")};
  text-align: left;
  width: 100%;
  cursor: pointer;
  color: ${({ active }) =>
    active ? `${colorsApp.orange}` : `${colorsApp.textSecundary}`};

  &:hover {
    color: ${colorsApp.orange};
  }
`;

export const FormDataInfo = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: repeat(7, auto);
`;

export const FormGroupUserData = styled.div``;

export const FormSelectData = styled.div``;

export const FormGroupPassword = styled.div``;

export const OnlinePresence = styled.div`
  width: 100%;
  grid-column: 1/2;
`;

export const DivBtnSaveDatas = styled.div`
  width: 100%;
  grid-column: 1/2;
`;

export const BtnSaveDatas = styled.button``;

export const FormSenha = styled.div`
  width: 100%;
`;
