import { colorsApp } from "../layout/layoutStyle";
import SignUp from "../signUp/signUp";
import {
  ButtonStartRate,
  HeroStyle,
  ListStep,
  LogoHero,
  Step,
  Text,
  IllustrationRating,
  StepNumber,
  DivText,
} from "./heroStyle";

export default function Hero() {
  const steps = [
    {
      text: "Escolha",
      borderColor: colorsApp.roxo,
    },
    {
      text: "Avalie",
      borderColor: colorsApp.orange,
    },
    {
      text: "Sugira",
      borderColor: colorsApp.kindaBlue,
    },
  ];

  return (
    <HeroStyle>
      <SignUp />

      <LogoHero>
        <img src="/images/logo.png" alt="" />
      </LogoHero>
      <DivText>
        <Text>
          Uma plataforma Web que te permite avaliar os serviços prestados pelos
          orgão e empresas nacionais
        </Text>

        <IllustrationRating>
          <img src="/images/OnlineReview-rafiki.png" alt="" />
        </IllustrationRating>
      </DivText>

      <ListStep>
        {steps.map((value, index) => (
          <Step>
            <StepNumber borderColor={value.borderColor}>
              <h1>{index + 1}</h1>
            </StepNumber>
            <span>{value.text}</span>
          </Step>
        ))}
      </ListStep>

      <ButtonStartRate>
        Começar a avaliar <img src="/images/start.png" alt="" />{" "}
      </ButtonStartRate>
    </HeroStyle>
  );
}
