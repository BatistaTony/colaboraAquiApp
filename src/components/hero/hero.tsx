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
import Route from "next/router";
import { useSelector } from "react-redux";
import { IConsumer } from "../../../types";
import { StepsHero } from "./hero.data";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  const animateStep = [
    { y: 20, transition: 0.2, delay: 0.1 },
    { y: 20, transition: 0.3, delay: 0.3 },
    { y: 20, transition: 0.5, delay: 0.4 },
  ];

  return (
    <HeroStyle>
      <BackGroundWithIllustration
        initial={{ opacity: 1, y: 1000 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="illustration1_e"></div>

        <div className="illustration2_e"></div>
      </BackGroundWithIllustration>

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
              key={index}
            >
              <StepNumber borderColor={value.borderColor}>
                <h1>{index + 1}</h1>
              </StepNumber>
              <span>{value.text}</span>
            </Step>
          ))}
        </ListStep>

        <Link href="/companies">
          <ButtonStartRate>
            Começar a avaliar <img src="/images/start.png" alt="" />
          </ButtonStartRate>
        </Link>
      </DivHero>
      <IllustrationRating
        initial={{ opacity: 1, y: 1000 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.7 }}
      >
        <img src="/images/OnlineReview-rafiki.png" alt="" />
      </IllustrationRating>
    </HeroStyle>
  );
}
