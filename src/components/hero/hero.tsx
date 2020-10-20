import { useCallback, useState } from "react";
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
import { motion, AnimatePresence } from "framer-motion";

export default function Hero() {
  const consumerState: IConsumer = useSelector((state) => state.Consumer);
  const [showSignUp, setShowSignUp] = useState<boolean>(false);
  const [isLogged, setIsLogged] = useState<boolean>(
    consumerState.userName.length > 0
  );

  const toggleSignUp = useCallback((): void => {
    setShowSignUp(!showSignUp);
  }, [showSignUp]);

  const startRate = () => {
    if (isLogged) {
      Route.push("/companies");
    } else {
      toggleSignUp();
    }
  };

  const animateStep = [
    { y: 20, transition: 0.2, delay: 0.1 },
    { y: 20, transition: 0.3, delay: 0.3 },
    { y: 20, transition: 0.5, delay: 0.4 },
  ];

  return (
    <HeroStyle showSignUp={showSignUp}>
      <BackGroundWithIllustration
        initial={{ opacity: 1, y: -1000 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
      >
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
        <SignUpConsumer toggleSignUp={toggleSignUp} />
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
            <Step
              initial={{ opacity: 1, y: animateStep[index].y }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...animateStep[index] }}
            >
              <StepNumber borderColor={value.borderColor}>
                <h1>{index + 1}</h1>
              </StepNumber>
              <span>{value.text}</span>
            </Step>
          ))}
        </ListStep>
        <ButtonStartRate
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={startRate}
        >
          Começar a avaliar <img src="/images/start.png" alt="" />{" "}
        </ButtonStartRate>
      </DivHero>
      <IllustrationRating
        initial={{ opacity: 1, x: 1000 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 1000 }}
      >
        <img src="/images/OnlineReview-rafiki.png" alt="" />
      </IllustrationRating>
    </HeroStyle>
  );
}
