import styled from "styled-components";
import { colorsApp, Flexbox, getFont } from "../layout/layoutStyle";
import { ButtonLogin, Logo } from "./../navbar/navbarStyle";
export const HeroStyle = styled.div`
  width: 100%;
  height: auto;
  ${Flexbox("column")};
  box-sizing: border-box;

  @media (max-height: 400px) {
    padding-bottom: 20px;
  }
`;

export const LogoHero = styled(Logo)`
  img {
    width: 38rem;

    @media (max-width: 1340px) {
      width: 35rem;
    }

    @media (max-width: 1000px) {
      width: 30rem;
    }

    @media (max-width: 950px) {
      width: 27rem;
    }

    @media (max-width: 700px) {
      width: 24rem;
    }
  }
`;

export const Text = styled.p`
  margin-top: 10px;
  width: 50%;
  height: auto;
  text-align: center;
  color: ${colorsApp.soDark};
  font-size: 20pt;
  ${getFont("Medium")};

  @media (max-width: 1000px) {
    width: 60%;
    font-size: 18pt;
  }

  @media (max-width: 950px) {
    width: 70%;
    font-size: 16pt;
  }

  @media (max-width: 700px) {
    width: 80%;
    font-size: 14pt;
  }
`;

export const ListStep = styled.ul`
  ${Flexbox()};
  margin-top: 30px;
  margin-bottom: 30px;
`;

export const Step = styled.li`
  width: auto;
  ${Flexbox("row", "flex-start", "center")};
  margin-left: 20px;

  img {
    width: 2rem;
    margin-right: 7px;
  }

  span {
    font-size: 13pt;
    ${getFont("SemiBold")};
  }
`;

export const ButtonStartRate = styled(ButtonLogin)`
  margin-top: 70px;
  height: 56px;
  background: ${colorsApp.orange};
  ${getFont("Medium")};
  ${Flexbox()};
  font-size: 14pt;
  color: ${colorsApp.soDark};
  padding-right: 30px;
  padding-left: 30px;

  img {
    width: 30px;
    height: 30px;
    margin-left: 15px;
  }

  &:hover {
    background: ${colorsApp.kindaBlue};
  }
`;

export const IllustrationRating = styled.div`
  position: absolute;
  width: auto;
  right: 0;
  bottom: 12%;
  overflow: hidden;

  img {
    width: 29rem;
    margin-left: 40px;
  }
`;
