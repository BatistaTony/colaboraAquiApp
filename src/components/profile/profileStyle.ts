import styled from "styled-components";
import {
  colorsApp,
  flexbox,
  getFont,
  NormalFontSize,
  sizesForEachScreens,
} from "../layout/layoutStyle";
import {
  ConsumerAvatar,
  ConsumerName,
} from "../rateCompany/companySuggestionAndRateStyle";
import { DivCheckBox } from "../rateCompany/modalStyle";
import { FormGroup } from "../signUp/signUpStyle";

const widthContainer = () => `
width:75%;
${sizesForEachScreens([1170, 900], [90, 87], "width", "%")};
`;

export const ProfileContent = styled.div`
  width: 100%;
  ${flexbox("column")};
  padding-bottom: 120px;
  margin-top: 18rem;

  ${sizesForEachScreens(
    [3000, 2500, 2000, 1700, 1500],
    [16, 13, 10, 8, 5],
    "margin-top",
    "rem"
  )}

  @media (max-width:1400px) {
    margin-top: 50px;
  }

  @media (max-width: 1300px) {
    margin-top: 40px;
  }

  @media (max-width: 1000px) {
    margin-top: 20px;
  }

  ${sizesForEachScreens(
    [3200, 2900, 2500, 1500, 750],
    [110, 95, 70, 50, 10],
    "padding-bottom",
    "px"
  )};
`;

export const HeaderProfileStyle = styled.div`
  display: grid;
  grid-template-columns: 72% 28%;
  ${widthContainer()};
  justify-content: center;
  align-items: flex-start;

  @media (max-width: 908px) {
    grid-template-columns: 100%;
    grid-template-rows: auto auto;
  }

  .divOne {
    ${flexbox("row", "flex-start", "flex-start")};

    @media (max-width: 650px) {
      width: 100%;
    }

    @media (max-width: 570px) {
      position: relative;
      grid-template-columns: auto auto;
    }
  }

  .divSecond {
    width: 100%;
    height: 100%;
    ${flexbox("row", "flex-end", "center")};

    @media (max-width: 908px) {
      margin-top: 15px;
    }

    @media (max-width: 870px) {
      justify-content: flex-start;
    }

    @media (max-width: 530px) {
      grid-row: 1/1;
      margin-bottom: 20px;
    }
  }
`;

export const UserAvatarProfile = styled(ConsumerAvatar)`
  width: 115px;
  height: 115px;
  font-size: 50pt;

  ${sizesForEachScreens(
    [3200, 3000, 2500, 2000, 1700, 1600, 1490, 1000, 570],
    [110, 105, 95, 80, 75, 65, 50, 40, 35],
    "width",
    "px"
  )};
  ${sizesForEachScreens(
    [3200, 3000, 2500, 2000, 1700, 1600, 1490, 1000, 570],
    [110, 105, 95, 80, 75, 65, 50, 40, 35],
    "height",
    "px"
  )};

  ${sizesForEachScreens(
    [3000, 2500, 2000, 1700, 1500, 1490, 1000, 570],
    [40, 35, 33, 29, 24, 21, 15, 13],
    "font-size",
    "pt"
  )};

  @media (max-width: 550px) {
    width: 30px !important;
    height: 30px !important;
    position: absolute;
  }
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

  @media (max-width: 570px) {
    margin-left: 30px;
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
    [3000, 2500, 2000, 1700, 1500, 1490, 1000, 600],
    [35, 30, 28, 25, 20, 16.5, 13, 12],
    "font-size",
    "pt"
  )};

  @media (max-width: 650px) {
    width: auto;
  }

  @media (max-width: 570px) {
    width: 90%;
    margin-top: 0;
  }
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

  @media (max-width: 650px) {
    width: 80%;
  }

  @media (max-width: 550px) {
    width: 100%;
  }
`;

export const RatesMadeByUser = styled.div`
  border-radius: 30px;
  background: #fdfdfe;
  width: auto;
  padding: 20px;
  padding-left: 30px;
  padding-right: 50px;
  border: 1px solid rgba(0, 0, 0, 0.1);

  ${sizesForEachScreens(
    [3000, 2500, 1700, 1500],
    [25, 20, 15, 10],
    "border-radius",
    "px"
  )};

  ${sizesForEachScreens([2500, 1900, 1700], [17, 15, 14], "padding", "px")};

  ${sizesForEachScreens(
    [3000, 2500, 1700, 1570],
    [27, 22, 19, 15],
    "padding-left",
    "px"
  )};
  ${sizesForEachScreens([2500, 1700], [30, 25], "padding-right", "px")};

  @media (max-width: 1500px) {
    padding: 6px;
    padding-left: 15px;
    padding-right: 30px;
  }

  .smplTxt {
    font-size: 27pt;
    ${getFont("Medium")};
    color: ${colorsApp.textPrimary};

    @media (max-width: 1500px) {
      margin-top: 3px;
    }

    @media (max-width: 530px) {
      margin-top: 7px;
    }

    ${sizesForEachScreens(
      [3200, 3000, 2500, 1930, 1700, 1500, 1390],
      [25, 21, 18, 16, 13, 12, 10],
      "font-size",
      "pt"
    )};
  }

  @media (max-width: 870px) {
    align-self: flex-start;
  }

  @media (max-width: 530px) {
    width: 100%;
    margin-top: 0;
    box-sizing: border-box;
    padding: 15px;
    padding-top: 17px;
    padding-bottom: 17px;
    border-radius: 15px;
  }
`;

export const SimpleTxtOfRates = styled.p`
  font-size: 27pt;
  ${getFont("Medium")};
  color: ${colorsApp.textPrimary};

  @media (max-width: 1500px) {
    margin-top: 3px;
  }

  @media (max-width: 530px) {
    margin-top: 7px;
  }

  ${sizesForEachScreens(
    [3200, 3000, 2500, 1930, 1700, 1500, 1390],
    [25, 21, 18, 16, 13, 12, 10],
    "font-size",
    "pt"
  )};
`;

export const NumbersOfUserRates = styled(UserNameProfile)`
  color: ${colorsApp.roxo};
  ${getFont("Medium")};
  ${flexbox("row", "flex-start", "center")};
  font-size: 32pt;
  height: 100%;
  margin-top: 0;
  width: 100%;

  ${sizesForEachScreens(
    [3000, 2500, 2050, 1800, 1570, 1390],
    [26, 20, 18, 16, 14, 12.5],
    "font-size",
    "pt"
  )};

  .btnLabel_hsd_d {
    margin-left: 10px;

    ${sizesForEachScreens([3000, 2500, 1500], [8, 6, 4], "margin-left", "px")}
  }

  span {
    ${getFont("Bold")};
    margin-top: 0;
  }

  img {
    width: 58px;
    height: 58px;

    ${sizesForEachScreens(
      [3000, 2500, 2000, 1800, 1670, 1500, 1390],
      [54, 47, 43, 38, 35, 31, 30],
      "width",
      "px"
    )};
    ${sizesForEachScreens(
      [3000, 2500, 2000, 1800, 1670, 1500, 1390],
      [54, 47, 43, 38, 35, 31, 30],
      "height",
      "px"
    )};
  }
`;

export const ProfileContainerGrid = styled.div`
  ${widthContainer()};
  display: grid;
  grid-template-columns: 35% 65%;
  height: auto;
  grid-template-rows: auto;
  margin-top: 150px;

  ${sizesForEachScreens(
    [3200, 2900, 2500, 1500, 750],
    [130, 115, 90, 70, 30],
    "margin-top",
    "px"
  )};

  @media (max-width: 2100px) {
    grid-template-columns: 30% 70%;
  }

  @media (max-width: 1500px) {
    grid-template-columns: 35% 65%;
  }

  @media (max-width: 870px) {
    grid-template-columns: 100%;
    grid-template-rows: auto;
  }

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

  @media (max-width: 870px) {
    display: none;
  }
`;

export const MenuSelectProfile = styled.div`
  display: none;
  width: 100%;
  margin-bottom: 30px;

  @media (max-width: 870px) {
    ${flexbox("row", "center", "center")};

    .customSelect {
      width: auto;
    }

    .selectProfile {
      margin-left: 0;
      width: auto;
      height: auto;
      margin-left: 0;
      ${flexbox("row", "center", "center")};

      button {
        text-align: center;
        align-self: center;
        justify-self: center;
        width: 100%;

        span {
          padding-right: 5px;
          color: ${colorsApp.orange};
          text-align: center;

          @media (max-width: 550px) {
            font-size: 12pt;
          }
        }
      }
    }

    .list-select {
      width: 250px;
      @media (max-width: 870px) {
        top: 28px;
      }

      li {
        padding-left: 15px;
      }
    }
  }
`;

export const MenuItemProfile = styled.li`
  width: 100;
  font-size: 30pt;
  ${getFont("Medium")};
  text-align: left;
  width: 100%;
  cursor: pointer;
  color: ${({ active }) =>
    active ? `${colorsApp.orange}` : `${colorsApp.textSecundary}`};
  margin-bottom: 15px;

  ${sizesForEachScreens([2000, 1500], [10, 7], "margin-bottom", "px")};

  &:hover {
    color: ${colorsApp.orange};
  }

  ${NormalFontSize()};
`;

export const FormDataInfo = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: 48% 48%;
  grid-template-rows: repeat(7, auto);
  grid-row-gap: 50px;
  justify-content: space-between;

  ${sizesForEachScreens(
    [3000, 2500, 1500, 800],
    [40, 35, 30, 40],
    "grid-row-gap",
    "px"
  )}

  @media (max-width:700px) {
    ${flexbox("column", "flex-start", "center")};
    padding-bottom: 50px;
  }
`;

export const DivOfFormGroup = styled.div`
  width: 100%;
  height: auto;
  ${flexbox("column", "space-between", "flex-start")};
  height: 230px;

  ${sizesForEachScreens(
    [3300, 3000, 2500, 1700, 1500],
    [205, 185, 160, 150, 100],
    "height",
    "px"
  )}

  &:first-child {
    grid-column: 1/3;
  }

  .currentPassword {
    @media (min-width: 870px) {
      grid-template-columns: 95% 5%;
    }
  }

  &[data-type="fullName"] {
    @media (max-width: 600px) {
      height: 115px;
    }
  }

  label {
    font-size: 30pt;
    ${getFont("Medium")};
    color: ${colorsApp.textPrimary};

    ${sizesForEachScreens(
      [3200, 3000, 2500, 1930, 1700, 1500, 1390],
      [27, 23, 20, 18, 15, 11, 10.5],
      "font-size",
      "pt"
    )};
  }

  &[data-type="select"] {
    @media (max-width: 870px) {
      height: 80px;

      .simple_text {
        display: none;
      }
    }

    .simple_text {
      opacity: 0;
    }
  }

  .txtError {
    display: block;
    opacity: 1;
    color: ${colorsApp.error};
  }
`;

export const SimpleTextForm = styled.p`
  ${getFont()};
  color: ${({ isError }) =>
    isError ? `${colorsApp.error}` : `${colorsApp.textSecundary}`};
  font-size: 23pt;
  ${sizesForEachScreens(
    [3000, 2500, 1930, 1700, 1500, 1390],
    [20, 17, 15, 13, 10.5, 9.5],
    "font-size",
    "pt"
  )};
`;

export const FormGroupUserData = styled(FormGroup)`
  grid-template-columns: 100%;
  margin: 0;
`;

export const OnlinePresence = styled.div`
  width: 100%;
  grid-column: 1/3;
  position: relative;

  .presentTitle {
    width: 100%;
    padding-bottom: 10px;
    border-bottom: 0.5px solid rgba(0, 0, 0, 0.1);
    font-size: 30pt;
    ${getFont()};
    color: ${colorsApp.textPrimary};
    ${NormalFontSize()};
  }

  .label_checckboc {
    color: ${colorsApp.textPrimary};
  }

  .simple_text {
    margin-left: 5rem;
    margin-top: 10px;

    ${sizesForEachScreens(
      [3000, 2700, 2000, 1500, 1000, 900],
      [4.5, 4, 3.5, 2.7, 2.2, 2],
      "margin-left",
      "rem"
    )}
  }
`;

export const DivCheckBoxProfile = styled(DivCheckBox)``;

export const DivBtnSaveData = styled.div`
  width: 100%;
  grid-column: 1/3;
  ${flexbox("row", "flex-end", "flex-end")}
  justify-content: flex-end;
  align-items: flex-end;
  margin-top: 50px;

  ${sizesForEachScreens(
    [3200, 2900, 2500, 1500],
    [30, 20, 15, 10],
    "margin-top",
    "px"
  )};
`;

export const BtnSaveData = styled.button`
  color: ${colorsApp.textPrimary};
  background-color: ${colorsApp.orange};
  width: auto;
  height: auto;
  font-size: 25pt;
  border-radius: 18px;
  border: none;
  outline: none;
  padding: 20px;
  padding-left: 65px;
  padding-right: 65px;
  cursor: pointer;

  ${getFont("Medium")};

  ${sizesForEachScreens(
    [3500, 2500, 1500],
    [15, 10, 7],
    "border-radius",
    "px"
  )};

  ${sizesForEachScreens(
    [3200, 3000, 2500, 1930, 1500, 850],
    [26, 22, 19, 17, 12, 11],
    "font-size",
    "pt"
  )};

  ${sizesForEachScreens([2500, 2000, 1500], [15, 13, 10], "padding", "px")};

  ${sizesForEachScreens(
    [3200, 2500, 2000, 1500, 900, 850],
    [55, 45, 40, 35, 30],
    "padding-left",
    "px"
  )};

  ${sizesForEachScreens(
    [3200, 2500, 2000, 1500, 900, 850],
    [55, 45, 40, 35, 30],
    "padding-right",
    "px"
  )};
`;
