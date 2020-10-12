import { useContext, useState } from "react";
import { appContext } from "../appContext";
import { colorsApp } from "../layout/layoutStyle";
import SignUp from "../signUp/signUp";
import SucessModal from "../signUp/sucessModal";
import {
  ButtonStartRate,
  HeroStyle,
  ListStep,
  LogoHero,
  Step,
  Text,
  IllustrationRating,
  StepNumber,
  DivHero,
} from "./heroStyle";
import { CSSTransition } from "react-transition-group";
import Route from "next/router";
import { useSelector } from "react-redux";
import { IConsumer } from "../../types";

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

  const consumerState: IConsumer = useSelector((state) => state.Consumer);
  const [showSignUp, toggleSignUp] = useContext(appContext);
  const [isLogged, setIsLogged] = useState<boolean>(
    consumerState.userName.length > 0
  );

  const startRate = () => {
    if (isLogged) {
      Route.push("/search");
    } else {
      toggleSignUp();
    }
  };

  return (
    <HeroStyle>
      <CSSTransition
        unmountOnExit
        addEndListener={() => {}}
        timout={200}
        in={showSignUp}
        classNames="my-overlay"
      >
        <SignUp />
      </CSSTransition>

      <DivHero>
        <LogoHero>
          <img src="/images/logo.png" alt="" />
        </LogoHero>
        <Text>
          Uma plataforma Web que te permite avaliar os serviços prestados pelos
          orgão e empresas nacionais
        </Text>
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
        <ButtonStartRate onClick={startRate}>
          Começar a avaliar <img src="/images/start.png" alt="" />{" "}
        </ButtonStartRate>
      </DivHero>
      <IllustrationRating>
        <img src="/images/OnlineReview-rafiki.png" alt="" />
      </IllustrationRating>
    </HeroStyle>
  );
}
