import { useContext, useState } from "react";
import { appContext } from "../appContext";
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
  DivHero,
  BackGroundWithIllustration,
} from "./heroStyle";
import { CSSTransition } from "react-transition-group";
import Route from "next/router";
import { useSelector } from "react-redux";
import { IConsumer } from "../../../types";
import SignUpConsumer from "../signUp/signUp";
import { StepsHero } from "./hero.data";

export default function Hero() {
  const consumerState: IConsumer = useSelector((state) => state.Consumer);
  const { showSignUp, toggleSignUp } = useContext(appContext);
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
      <BackGroundWithIllustration>
        <div className="illustration1_e"></div>
        <div className="illustration2_e"></div>
      </BackGroundWithIllustration>
      <CSSTransition
        unmountOnExit
        addEndListener={() => {}}
        timout={200}
        in={showSignUp}
        classNames="my-overlay"
      >
        <SignUpConsumer />
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
          {StepsHero.map((value, index) => (
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