import { Fragment, useState } from "react";
import StarsRatedCompany from "../companies/starsRated";
import { colorsApp } from "../layout/layoutStyle";
import {
  ConsumerAvatar,
  ConsumerRateStyle,
  BodyRating,
  ConsumerName,
  ConsumerStarsRating,
  RateTime,
  BodyTextRating,
  TextSuggestionRate,
  ButtonToggleSuggestionText,
} from "./companySuggestionAndRateStyle";
import { AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import TimeAgo from "react-timeago";
import portugueseString from "react-timeago/lib/language-strings/pt";
import buildFormatter from "react-timeago/lib/formatters/buildFormatter";
import { IRating } from "../../../types";

interface IProps {
  data: IRating;
}

export default function ConsumerRating({
  data: { consumerName, experience, feeling, stars, time, suggestion },
}: IProps) {
  const [showSuggestion, setShowSuggestion] = useState<boolean>(false);

  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-100px 0px",
  });

  const animationStyle = { opacity: 1, y: 0 };

  const formatter = buildFormatter(portugueseString);

  return (
    <AnimatePresence>
      <ConsumerRateStyle
        ref={ref}
        initial={{ opacity: 0, y: 100 }}
        animate={inView ? animationStyle : {}}
        exit={{ opacity: 0, y: 100 }}
      >
        <ConsumerAvatar name={consumerName[0]}>
          {consumerName[0]}
        </ConsumerAvatar>
        <BodyRating>
          <ConsumerName>{consumerName}</ConsumerName>
          <div className="min_bdy_fr_strA_">
            <ConsumerStarsRating>
              <StarsRatedCompany
                color={colorsApp.roxo}
                classNames="startOnRating"
                stars={stars}
              />
            </ConsumerStarsRating>
            <RateTime>{<TimeAgo date={time} formatter={formatter} />}</RateTime>
          </div>
          <BodyTextRating>{experience}</BodyTextRating>
          {suggestion !== "" && (
            <Fragment>
              {!showSuggestion && (
                <ButtonToggleSuggestionText
                  onClick={() => setShowSuggestion(true)}
                >
                  Ver Sugestão de melhoria
                </ButtonToggleSuggestionText>
              )}

              {showSuggestion && (
                <TextSuggestionRate
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <p className="title_txt_fd_g">Sugestao de melhoria</p>

                  <p>{suggestion}</p>

                  <ButtonToggleSuggestionText
                    onClick={() => setShowSuggestion(false)}
                  >
                    Ocultar Sugestão
                  </ButtonToggleSuggestionText>
                </TextSuggestionRate>
              )}
            </Fragment>
          )}
        </BodyRating>
      </ConsumerRateStyle>
    </AnimatePresence>
  );
}
